"use client"
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react'
import { Flex, Spinner } from '@chakra-ui/react'
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Middelware({ children }:{ children: React.ReactNode }) {

    const[loader,setLoader] = useState<boolean>(false);
    const router = useRouter();
    const pathName = usePathname();
    const protectedPages:string[] = ["/home","/dashboard"];
    const preLoginPages:string[] = ["/client/signup","/client/login","/"];
 
    useEffect(()=>{
        if(protectedPages.includes(pathName)){
            fetchAuthSession().then((session) => {
                if (session.tokens) {
                  setLoader(true);
                  console.log(session);
                } else {
                  router.push("/client/login");
                }
            });
        } else if(preLoginPages.includes(pathName)){
            fetchAuthSession().then((session) => {
                if (session.tokens) {
                    router.push("/home");
                } else {
                    setLoader(true);
                    console.log(session)
                }
              });
        } else {
            setLoader(true)
        }
    },[pathName])
    
    // const status = async() => {

    //     try{
          
    //         if(user){
    //             console.log(user);
    //             setLoader(true)
    //             setHold("success")
    //         } else {
    //             router.push("/client/login");
               
    //         }
            
    //     } catch(error){
    //         router.push("/client/login");
    //         console.log(error);
    //     } 
 
    // }

    if(loader==false){
        return(
            <Flex bg={"black"} w={"100vw"} h={"100vh"}  alignItems={"center"} justifyContent={"center"}>
                <Spinner w={"50px"} h={"50px"} color={"yellow"} />
            </Flex>
        )
    }
      
    return (
        <Flex w={"100vw"} h={"100vh"}>
            {children}
        </Flex>
    )
}

export default Middelware