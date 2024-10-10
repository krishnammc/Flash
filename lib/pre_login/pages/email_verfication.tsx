"use client"
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import React, { useEffect, useState } from 'react';
import Emailverified from '../forms/signup_forms/email_verified';

function EmailVerfication() {
    const [basicstore, setBasicStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Basic Info Form Values');
    const [buttonLoader,setButtonLoader] = useState<boolean>(false);
    const[verified,setVerified]=useState(false)
    
    useEffect(()=>{
        setButtonLoader(false)
      },[])
      
  return (
    <>
        <Emailverified email={basicstore !== null && basicstore !== undefined && basicstore.email ? basicstore.email as string : ""} flag={true} setButtonLoader={setButtonLoader} setVerified={setVerified} buttonLoader={buttonLoader}  /> 
    </>
  )
}

export default EmailVerfication