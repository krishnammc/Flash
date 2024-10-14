"use client"
import React, { useEffect, useState } from 'react'
import BasicInfoForm from '../forms/signup_forms/basic_info_form';
import AddressInfoForm from '../forms/signup_forms/address_info_form';
import CredentialInfo from '../forms/signup_forms/credential_info';
import Emailverified from '../forms/signup_forms/email_verified';
import CheckEmail from '../forms/signup_forms/check_email';
import { Flex, Spinner, useToast } from '@chakra-ui/react';
import { autoSignIn, fetchUserAttributes, getCurrentUser, signIn, signUp } from 'aws-amplify/auth';
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import { Schema } from '@/amplify/data/resource';
import outputs from "@/amplify_outputs.json";
import { Hub } from 'aws-amplify/utils';

import OTPValidationPage from './otp_validation';
import VerifiedPage from '../forms/signup_forms/verified_page';


Amplify.configure(outputs);

const client = generateClient<Schema>();


interface SignUpFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
  phone_number:HTMLInputElement
  family_name:HTMLInputElement
  given_name:HTMLInputElement
  confirm_password: HTMLInputElement
  'custom:role':HTMLInputElement
}

interface SignUpForm extends HTMLFormElement {
  readonly elements: SignUpFormElements
}


// export const awsConfig = {
//   // ... other configurations ...
//   Auth: {
//     mandatorySignIn: true,
//     // ... other auth configurations ...
//   },
//   attributeMapping: {
//     'custom:company_name': 'company_name',
//     'custom:role': 'role',
//   },
// };


const SignUpPage = () => {

  const toast = useToast();
  const [basicInfo, setBasicInfo] = useState<boolean>(true);
  const [agentInfo, setAgentInfo] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] = useState<boolean>(false);
  const [credentialInfo, setCredentialInfo] = useState<boolean>(false);
  const [sentEmail, setSentEmail] = useState<boolean>(false);
  const [emailVerified, setEmailVerified] = useState<boolean>(false);
  const [verfied,setVerified] =useState<boolean>(false)
  const [buttonLoader,setButtonLoader] = useState<boolean>(false);
  const [regError,setRegError]= useState<boolean>(false);
  const [demo,setDemo]=useState(false)
  const [formatError,setFormatError] = useState<boolean>(false);
  const [phn,setPhn,phnTryAgain] = useSessionStorage<string>('phone_number');
  const [store, setStorage,tryAgain] = useSessionStorage<Record<string, string | string[] | number> | null>('Credential Info Form Values');
  const [basicstore, setBasicStorage,tryAgain2] = useSessionStorage<Record<string, string | string[] | number> | null>('Basic Info Form Values');

  useEffect(()=>{
    setButtonLoader(false);
    setDemo(true)
  },[])
 
 const SubmitedBasicInfo = () => {
  setButtonLoader(true)
  setBasicInfo(false);
  setAddressInfo(true);
  setButtonLoader(false)
 }

 const BacktoBasicInfo = () => {
  setAddressInfo(false);
  setBasicInfo(true);
 }

 const SubmitedAddressInfo = () => {
  setButtonLoader(true)
  tryAgain2();
  phnTryAgain();
  setAddressInfo(false);
  setCredentialInfo(true);
  setButtonLoader(false)
 }

 const BacktoAddressInfo = () => {
  setRegError(false);
  setCredentialInfo(false);
  setAddressInfo(true);
 }

//  const NextVerified = () => {
//   setEmailVerified(true);
//   setSentEmail(false);
//  }

 const SubmitedCredentialInfo = async (pwd:string) => {
  setButtonLoader(true)
  console.log(tryAgain2(),tryAgain())
  // try {
  //   const  response = await signUp({
  //     username: basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : "",
  //     password: store !== null && store !== undefined && store.confirm_password ? store.confirm_password as string : "",

  //     options: {
  //       userAttributes: {
  //         email: basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : "",
  //         family_name:basicstore !== null && basicstore !== undefined && basicstore.first_name ? basicstore.first_name as string : "",
  //         given_name:basicstore !== null && basicstore !== undefined && basicstore.last_name ? basicstore.last_name as string : "",
  //         phone_number:basicstore !== null && basicstore !== undefined && basicstore.phone_number ? basicstore.phone_number as string : "",
  //         'custom:company_name': basicstore !== null && basicstore !== undefined && basicstore.company_name ? basicstore.company_name as string : "",
  //       },
  //       autoSignIn:true
  //     }
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     setCredentialInfo(false);
  //     setEmailVerified(true);
  //     setButtonLoader(false);
  //   })
    
  // } catch (error) {
  //   if (error instanceof Error) {
  //     console.log(error)
  //     // setCredentialInfo(false);
  //   // setEmailVerified(true);
  //     if(error.name=="UsernameExistsException"){
  //       setRegError(true);
  //       // toast({
  //       //   title: 'Already Registered',
  //       //   description: "this user details is already registered",
  //       //   status: 'error',
  //       //   duration: 9000,
  //       //   position:'top',
  //       //   isClosable: true,
  //       // });
  //       setButtonLoader(false);
  //     } else if(error.name=="InvalidParameterException"){
  //       setFormatError(true);
  //       // toast({
  //       //   title: 'Already Registered',
  //       //   description: "this user details is already registered",
  //       //   status: 'error',
  //       //   duration: 9000,
  //       //   position:'top',
  //       //   isClosable: true,
  //       // });
  //       setButtonLoader(false);
  //     }
  //     setButtonLoader(false);
      
  //   } else {
  //     console.log(`Unknown error: ${error}`);
  //     setButtonLoader(false);
  //     setRegError(true);
  //     // setCredentialInfo(false);
  //     // setEmailVerified(true);
  //   }
  //   // Display an error message to the user
  // }
 
  return await new Promise( async (resolve, reject) => {
    
    console.log("works")
    // ... validate inputs
  
  await  signUp({
      username: basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : "",
      password: pwd,

      options: {
        userAttributes: {
          email: basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : "",
          family_name:basicstore !== null && basicstore !== undefined && basicstore.first_name ? basicstore.first_name as string : "",
      
          given_name:basicstore !== null && basicstore !== undefined && basicstore.last_name ? basicstore.last_name as string : "",
          phone_number:(phn !== null && phn !==undefined && phn ?phn :'' )+(basicstore !== null && basicstore !== undefined && basicstore.phone_number ? basicstore.phone_number as string : ""),
          'custom:company_name': basicstore !== null && basicstore !== undefined && basicstore.company_name ? basicstore.company_name as string : "",
        },
        autoSignIn:true
      }
    })
    .then((response) => {
      resolve(response);
      setCredentialInfo(false);
      setEmailVerified(true);
      setButtonLoader(false);
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error)
      //   setCredentialInfo(false);
      // setEmailVerified(true);
        if(error.name=="UsernameExistsException"){
          setRegError(true);
          // toast({
          //   title: 'Already Registered',
          //   description: "this user details is already registered",
          //   status: 'error',
          //   duration: 9000,
          //   position:'top',
          //   isClosable: true,
          // });
          setButtonLoader(false);
        } else {
          toast({
            title: 'Something went wrong',
            description: "please try after sometime",
            status: 'error',
            duration: 9000,
            position:'top',
            isClosable: true,
          });
          setButtonLoader(false);
        }
      } else {
        console.log(`Unknown error: ${error}`);
        setButtonLoader(false);
        // setCredentialInfo(false);
        // setEmailVerified(true);
      }
      // reject(error);
    });
  });
  

 }

 const handleEmailVerified = () => {
  setSentEmail(false);
  setEmailVerified(true);
 }

 if(demo==false){
  return(
    <Flex bg={"black"} w={"100vw"} h={"100vh"}  alignItems={"center"} justifyContent={"center"}>
        <Spinner w={"50px"} h={"50px"} color={"yellow"} />
    </Flex>
)
 }

  return (
   <Flex flexDir = {'column'} w = {'100%'} h = {'fit-content'} justifyContent = {'center'} gap = {'40px'}>
      { basicInfo && <BasicInfoForm onSubmit = {SubmitedBasicInfo} buttonLoader={buttonLoader} /> }
      { addressInfo && <AddressInfoForm onSubmit = {SubmitedAddressInfo} moveBack = {BacktoBasicInfo} buttonLoader={buttonLoader} /> }
      { credentialInfo &&  <CredentialInfo onSubmit = {SubmitedCredentialInfo}  moveBack = {BacktoAddressInfo} formatError={formatError} regError={regError} buttonLoader={buttonLoader} /> }
      {/* { sentEmail && <CheckEmail email={basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : ""}  onSubmit = {handleEmailVerified}/> } */}
      {/* { emailVerified && (verfied ? <VerifiedPage /> :<OTPValidationPage setVerified={setVerified} email={basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : ""} />)} */}
      { emailVerified && (verfied ? <VerifiedPage /> : <Emailverified  setVerified={setVerified} email={basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : ""} setButtonLoader={setButtonLoader} buttonLoader={buttonLoader}  />) }
    </Flex>
  );
}

export default SignUpPage
