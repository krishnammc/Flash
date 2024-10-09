import React, { useState } from 'react';
import { validateField } from '@/lib/utlils/utill_methods';
import { useRouter } from 'next/navigation';
import ButtonField from '../../components/button_field';
import TextField from '../../components/text_field';
import { Alert, AlertIcon, Flex, GridItem, Heading, SimpleGrid, Text, useToast } from '@chakra-ui/react';
import { PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_BODY_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_SIZE, PRE_LOGIN_PAGE_BODY_FONT_WEIGHT } from '@/lib/app/app_constants';
import { SignUpPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';
import { autoSignIn, confirmSignUp, confirmUserAttribute, resendSignUpCode, signIn } from 'aws-amplify/auth';
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import { error } from 'console';
import outputs from "@/amplify_outputs.json";
import { Amplify } from 'aws-amplify';


Amplify.configure(outputs);


export const SignUpPasswordEnterData:SignUpPageLabelDataValues[] = [
  {
    id: 'password',
    type: 'TEXT',
    label: '',
    values: [],
    help_text: 'Enter Password',
    error_message: 'Please Enter Password',
    format_error_message: 'Invalid Password',
    format_validation: 'NUMBER'
  }
]

const Emailverified = ({email,buttonLoader,setButtonLoader,flag=false}:{email:string,buttonLoader:boolean,setButtonLoader:(data:boolean)=>void,flag?:boolean}) => {
  const router = useRouter();
  const toast = useToast();
  const [codeError,setCodeError]=useState(false);
  
  const [data, setData] = useState(
    SignUpPasswordEnterData.map((field:SignUpPageLabelDataValues) => {

      let ansVal = '';
      return {
        id: field.id,
        value: ansVal as string | string[] | number,
        error: null as 'EMPTY' | 'FORMAT' | null
      }
    })
  );
  //console.log("Initial Data :", data);
  const [basicstore, setBasicStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Basic Info Form Values');
  const [store, setStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Credential Info Form Values');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: SignUpPageLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);
    setCodeError(false)
    if (index < 0) return;

    let value: string | number = event.target.value;
    const validateResult = validateField(value.toString(),"NUMBER");
    tempData[index].value = value;

    tempData[index].error = (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" : null)
    setData(tempData)
  }

  const submitValidate = () => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    tempData.forEach((input) => {
      let value = SignUpPasswordEnterData.filter((e) => e.id == input.id);
      value.map((e) => {
        if (e.type == "TEXT") {
          let value: number | string = input.value as number | string;
          const validateResult = validateField(value.toString(), e.format_validation)
          input.error = validateResult.isEmpty ? "EMPTY" : validateResult.isContainsFormatError ? "FORMAT" : null;
        }
      })
    })
    setData(tempData);
    return tempData.every((input) => input.error == null);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitValidate()) return;
    setButtonLoader(true);
    // if(flag == true){
    // await  confirmUserAttribute({userAttributeKey:"email", confirmationCode:"925412"}).then(()=>{
    //     console.log("sucess")
    //   }).catch((error)=>{
    //     console.log(error)
    //   })
    //   return;
    // } else {
    if(flag==true){
      return new Promise((resolve, reject) => {
        confirmSignUp({
         username:  basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : "",
         confirmationCode: data[0].value as string
       }).then(async (response)=>{
           resolve(response);
           await autoSignIn();
           
           router.push('/home');
           console.log('Auto signed in successfully!');
           sessionStorage.removeItem('Basic Info Form Values');
           sessionStorage.removeItem('Credential Info Form Values');
           sessionStorage.removeItem('Address Info Form Values');
           setButtonLoader(false);
       }).catch((error)=>{
         console.log(error)
          if (error instanceof Error) {
            if(error.name=="CodeMismatchException"){
              setCodeError(true)
              setButtonLoader(false)
            } else {
              router.push("/client/login")
            }
          } 
       })
   
   
       // if(isSignUpComplete){
       //   try {
       //     const user = await autoSignIn();
       //     console.log('Auto signed in successfully!');
       //     console.log(user);
       //     router.push('/home');
       //   } catch (error) {
       //     if (error instanceof Error) {
       //       console.error('Auto sign-in failed:', error);
       //       // Handle the exception, e.g., display an error message to the user
       //     } else {
       //       throw error;
       //     }
       //   }
       // }
      
     }
   )
    }
          return new Promise((resolve, reject) => {
     confirmSignUp({
      username:  basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : "",
      confirmationCode: data[0].value as string
    }).then(async (response)=>{
        resolve(response);
        await autoSignIn();
        router.push('/home');
        console.log('Auto signed in successfully!');
        sessionStorage.removeItem('Basic Info Form Values');
        sessionStorage.removeItem('Credential Info Form Values');
        sessionStorage.removeItem('Address Info Form Values');
        setButtonLoader(false);
    }).catch((error)=>{
      console.log(error)
      if (error instanceof Error) {
  
        setCodeError(true)
        setButtonLoader(false)
      }
    })


    // if(isSignUpComplete){
    //   try {
    //     const user = await autoSignIn();
    //     console.log('Auto signed in successfully!');
    //     console.log(user);
    //     router.push('/home');
    //   } catch (error) {
    //     if (error instanceof Error) {
    //       console.error('Auto sign-in failed:', error);
    //       // Handle the exception, e.g., display an error message to the user
    //     } else {
    //       throw error;
    //     }
    //   }
    // }
   
  }
)
    // }

  }

  async function resendConfirmationCode() {
  
    resendSignUpCode({"username":email})
  .then((output) => {
    toast({
      title: 'Resended Verfication Code',
      description: "Verfication code is send to the registered email",
      status: 'success',
      duration: 5000,
      position:'top',
      isClosable: true,
    });

    console.log(output);
  })
  .catch((error) => {
    console.error(error);
  });
}
console.log(data)
  return (
    <>
    <Flex flexDir = {'column'} gap = {['4px', '4px', '16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
      <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Enter your password</Heading>
      <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>Your email has been verified. Please enter the password for the account associated with {email} to proceed with login.</Text>
    </Flex>

    <form onSubmit = {handleSubmit}>

      {
        codeError && <Alert borderRadius={"4px"} mb={"20px"} status='error' color={"#000"}>
          <AlertIcon />
          Invalid Verification code
        </Alert>
      }


      {/* Sign Up Page Input Field */}
      <SimpleGrid columns = {2} w = {'100%'} rowGap = {'16px'} columnGap = {'16px'}>
      {
        SignUpPasswordEnterData.map((e: SignUpPageLabelDataValues) => {
          let field = data.find((val) => val.id == e.id);
          let stateValue = field?.value!;
          const errorType = field?.error ?? null;
          const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
          const isInValid = (errorType != null);

          switch (e.type) {
            case "TEXT":
              return (
                <GridItem colSpan = {2} key = {e.id}>
                  <TextField label = {e.label} value = {stateValue} placeholder = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} errorMessage = {errorMessage} />
                </GridItem>
              );
          }
        })
      }
      </SimpleGrid>

     

      {/* Verification Section */}
      <Flex mt = {'24px'}>
        <ButtonField textValue = {'Sign in'} buttonLoader={buttonLoader} />
      </Flex>


      
    </form>
    <Flex flexDir = {'column'}  fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT} w= '100%' justifyContent = {'center'} alignItems={'center'} gap = {'12px'}>
          <Text >Don’t receive the email? try again
          </Text>

          {/* <Button onClick = {resendConfirmationCode} w = {'100%'} h = {'40px'} borderWidth = {'1px'} borderColor = {PRE_LOGIN_BUTTON_BORDER_COLOR} borderRadius = {'4px'} bg = {PRE_LOGIN_ALTERNATE_BUTTON_BACKGROUND_COLOR}  >
            <Text color = {PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT}>Resend Code</Text>
          </Button>  */}

        <Flex onClick = {resendConfirmationCode} w={"100%"}>
          <ButtonField textValue = {"Resend Email"} />
        </Flex>
        
      </Flex>
  </>
);
}

export default Emailverified
