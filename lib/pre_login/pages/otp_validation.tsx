"use client"
import { PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_BODY_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_SIZE, PRE_LOGIN_PAGE_BODY_FONT_WEIGHT, PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT, PRE_LOGIN_ALTERNATE_BUTTON_BACKGROUND_COLOR, PRE_LOGIN_BUTTON_BORDER_COLOR } from '@/lib/app/app_constants';
import { Button, Flex, Heading, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ButtonField from '../components/button_field';
import { useRouter } from 'next/navigation';
import { OTPValidationPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';
import { validateField } from '@/lib/utlils/utill_methods';
import OTPField from '../components/otp_field';
import { autoSignIn, confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import { fonts } from '@/lib/app/chakra_theme';

export const OTPValidationPageLabelData:OTPValidationPageLabelDataValues[] = [
  {
    id: 'otp_1',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NONE'
  },
  {
    id: 'otp_2',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NONE'
  },
  {
    id: 'otp_3',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NONE'
  },
  {
    id: 'otp_4',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NONE'
  },
  {
    id: 'otp_5',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NONE'
  },
  {
    id: 'otp_6',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NONE'
  }
];

const OTPValidationPage = ({email,flag=false,setVerified}:{email:string,flag?:boolean,setVerified:(data:boolean)=>void}) => {
  const router = useRouter();
  const toast = useToast();
  const [basicstore, setBasicStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Basic Info Form Values');
  const [store, setStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Credential Info Form Values');
  const [buttonLoader,setButtonLoader]=useState<boolean>(false);
  const [codeError,setCodeError]=useState<boolean>(false);
  const [timer,setTimer]=useState<boolean>(true)
  const [timerDuration, setTimerDuration] = useState<number>(300);

  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration % 60;

  useEffect(() => {

    
 

        
    if(minutes==0 && seconds==0 && timer == true){
      setTimer(false);
    }

    if(timerDuration>0){
      setTimeout(() => {
        setTimerDuration(timerDuration - 1);
      }, 1000);
      // return () => {
      //   clearTimeout(timerId);
      // };
    }
  
  },[timerDuration]);

  const [data, setData] = useState(
    OTPValidationPageLabelData.map((field) => {
      let ansVal = '';
      return {
        id: field.id,
        value: ansVal as string | string[] | number,
        error: null as 'EMPTY' | 'FORMAT' | null
      }
    })
  );
  //console.log("Initial Data :", data);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: OTPValidationPageLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    if (index < 0) return;

    let value: string | number = event.target.value;
    const validateResult = validateField(value.toString(), field.format_validation);
    tempData[index].value = value;

    tempData[index].error = (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" : null);
    setData(tempData);
  }

  const submitValidate = () => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    tempData.forEach((input) => {
      let value = OTPValidationPageLabelData.filter((e) => e.id == input.id);
      value.map((e) => {
        if (e.type == "TEXT") {
          let value: number | string = input.value as number | string;
          const validateResult = validateField(value.toString(), e.format_validation);
          input.error = validateResult.isEmpty ? "EMPTY" : (validateResult.isContainsFormatError ? "FORMAT" : null);
        }
      });
    });
    setData(tempData);
    return tempData.every((input) => input.error == null);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitValidate()) return;
    console.log("Answer Data :", data);
    //router.push('/requirement_form/company_details');
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
        const value = data.map(e=>e.value).join("")
        console.log("value",value)
        confirmSignUp({
         username:  basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : "",
         confirmationCode:value
       }).then(async (response)=>{
           resolve(response);
           await autoSignIn();
           setVerified(true)
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
              setVerified(true)
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
            const value = data.map(e=>e.value).join("")
            console.log("value",value)
     confirmSignUp({
      username:  basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : "",
      confirmationCode: value
    }).then(async (response)=>{
        resolve(response);
        // await autoSignIn();
        // router.push('/home');
        setVerified(true)
        console.log('Auto signed in successfully!');
        // sessionStorage.removeItem('Basic Info Form Values');
        // sessionStorage.removeItem('Credential Info Form Values');
        // sessionStorage.removeItem('Address Info Form Values');
        setButtonLoader(false);
    }).catch((error)=>{
      console.log(error)
      if (error instanceof Error) {
        if(error.name=="CodeMismatchException"){
          setCodeError(true)
          setButtonLoader(false)
        } else {
          setVerified(true)
          // router.push("/client/login")
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
    // }

  }

  async function resendConfirmationCode() {

    if(timerDuration<=0 ){
      setTimerDuration(300);
      setTimer(true)
    }
  
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

const validate = () => {
  return data.filter((e)=>e.error!==null).length!==0
}


  return (
  <>
    {/* Forgot Password Content */}
    <Flex flexDir = {'column'}  w = {'100%'}  gap = {'40px'}>

      {/* Forgot Password Page Heading */}
      <Flex flexDir = {'column'} gap = {['4px','4px','16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Verification Code</Heading>
        <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>Enter the 6-digit code sent to your email</Text>
      </Flex>

        <form onSubmit = {handleSubmit}>
          <Flex flexDir={'column'} gap = {'24px'}>
            <Flex gap = {'16px'}>
              {
                OTPValidationPageLabelData.map((e: OTPValidationPageLabelDataValues) => {
                  let field = data.find((val) => val.id == e.id);
                  let stateValue = field?.value!;
                  const errorType = field?.error ?? null;
                  const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
                  const isInValid = (errorType != null);

                  switch (e.type) {
                    case "TEXT":
                      return (
                        <React.Fragment key = {e.id}>
                          <OTPField label = {e.label} value = {stateValue} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} errorMessage = {errorMessage} />
                        </React.Fragment>
                      );
                  }
                })
              }

             
                
            </Flex>
            <Flex>
              {
                validate()?<Text color={"red"} fontFamily={fonts.montserrat}>Please enter Validation Code</Text>:<></>
              }
            </Flex>
            <ButtonField textValue = {'Verify'} />
          </Flex>
        </form>

        {/* Verification Section */}
        <Flex flexDir = {'column'} gap = {'24px'} mt = {'-16px'} justifyContent = {'center'} alignItems = {'center'}>
         
          <Flex flexDir = {'row'} fontFamily ={PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT} w= '100%' justifyContent = {'center'} gap = {'8px'}>
            <Text >Don’t receive the email? Try again in</Text>
            <Text fontWeight = {'700'}>Time: {minutes}:{seconds.toString().padStart(2, '0')} minutes</Text>
          </Flex>

          <Button w = {'100%'} h = {'40px'} borderWidth = {'1px'} isDisabled={ timerDuration > 0 } onClick={resendConfirmationCode} borderColor = {PRE_LOGIN_BUTTON_BORDER_COLOR} borderRadius = {'4px'} bg = {PRE_LOGIN_ALTERNATE_BUTTON_BACKGROUND_COLOR}  >
            <Text color = {PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT}>Resend Code</Text>
          </Button>

        </Flex>
       
    </Flex>
  </>
  );
}

export default OTPValidationPage
