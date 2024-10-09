"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { confirmSignUp, fetchAuthSession, getCurrentUser, rememberDevice } from 'aws-amplify/auth';
 import { Hub } from 'aws-amplify/utils';
import { Amplify } from 'aws-amplify';
import { signOut } from 'aws-amplify/auth';
import { Badge, Button, Flex, FormControl, Input, InputGroup, InputLeftElement, Spacer, Text } from '@chakra-ui/react';
import outputs from "@/amplify_outputs.json";
import { useRouter } from 'next/navigation';
import useCurrentUser from '@/lib/hooks/use_currentuser';
import Image from 'next/image';
import { fonts } from '../app/chakra_theme';
import ButtonField from '../components/button_field';
import { BUTTON_TEXT_COLOR, TEXT_FONT_SIZE, BODY_TEXT_FONT_FAMILY } from '../app/app_constants';

Amplify.configure(outputs);


function Dashboard() {
    const router = useRouter()
    const [state,setState]= useState(0);
    const [buttonLoader,setButtonLoader] = useState<boolean>(false)
    const cloudTrail = rememberDevice()
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.error(error);
    });
    const { session, loading, error } = useCurrentUser();
    console.log(cloudTrail);


    const navData:{label:string,link:string,icon:string}[] = [
      {
        label:"Overview",
        link:"",
        icon:""
      },
      {
        label:"Email",
        link:"",
        icon:""
      },
    ]

    const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log("searching....")
    }
  
    async function handleSignOut() {
      setButtonLoader(true)
      await signOut({ global: true })
      router.push("/client/login")
      // setButtonLoader(false)
    }

  return (
    <Flex bg={"#fff"} w={"100vw"}>

      {/* navbar */}
      <Flex bg={"black"} w={"100%"} maxW={"208px"} h={"100vh"} px={"20px"} alignItems={"flex-start"} flexDir={"column"} justifyContent={"space-between"}>
        <Flex flexDir={"column"} w={"100%"} h={"100%"}> 
          <Flex position = {'relative'} maxW = {'104px'} w = {'100%'} minH = {'40px'} h = {'100%'} maxH={"90px"}  >
            <Image src = {'/images/Flash Logo.png'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
          </Flex>
          <Flex flexDir={"column"} gap={"10px"}>
            {
              navData.map((data)=>{
                return(
                  <Flex w={"100%"} maxW={"200px"} bg={"#fff"} p={"5px"} borderRadius={"4px"} >
                    <Text fontFamily={fonts.montserrat} fontWeight={"700"} fontSize={"12px"}  lineHeight={"18px"}>{data.label}</Text>
                  </Flex>
                )
              })
            }
          </Flex>
        </Flex>
        <Button my={"10px"} w={"100%"} maxW={"200px"} isLoading={buttonLoader} bg={"yellow"} onClick={()=>{handleSignOut()}}>Sign out</Button>
      </Flex>

      <Flex  maxW={"100vw"} w={"100%"} h={"100%"} maxH={"80%"} px={"20px"} py={"10px"} gap={"10px"} flexDir={"column"} justifyContent={"space-between"}>

        {/* search */}

        <Flex w={"100%"} h={"44px"}>

          <form onSubmit={onSearch} style={{width:"100%"}}>
            <FormControl  maxW={"470px"} w={"100%"}>
              <InputGroup maxW={"470px"} w={"100%"}>
                <InputLeftElement>
                <Flex position = {'relative'} maxW = {'20px'} w = {'100%'} h = {'100%'} maxH={"20px"}  >
                    <Image src = {'/icons/search.svg'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
                  </Flex>
                </InputLeftElement> 
                <Input />
              </InputGroup>
            </FormControl>
          </form>

          <Flex w={"100%"} h={"100%"} justifyContent={"flex-end"} gap={"10px"} >
            <Flex borderRadius={"4px"} w={"100%"} h={"100%"} maxW={"40px"}  border={"1px solid rgba(215, 220, 224, 1)"}  maxH={"40px"} alignItems={"center"} justifyContent={"center"}>
              <Flex position = {'relative'} maxW = {'24px'} w = {'100%'} h = {'100%'} maxH={"24px"}  >
                <Image src = {'/icons/notify.svg'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
              </Flex>
            </Flex>
            <Flex borderRadius={"4px"} w={"100%"} h={"100%"} maxW={"40px"}  border={"1px solid rgba(215, 220, 224, 1)"}  maxH={"40px"} alignItems={"center"} justifyContent={"center"}>
              <Flex position = {'relative'} maxW = {'24px'} w = {'100%'} h = {'100%'} maxH={"24px"}  >
                <Image src = {'/icons/setting.svg'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
              </Flex> 
            </Flex>
          </Flex>
        </Flex>


        {/* Body */}

        <Flex w={"100%"} maxW={"100%"} h={"100%"} maxH={"100vh"} flexDir={"column"} borderRadius={"12px"} border={"1px solid rgba(215, 220, 224, 1)"} >

          <Flex w={"100%"} maxW={"100vw"} h={"100%"} maxH={"97px"} px={"20px"} alignItems={"center"} justifyContent={"center"} borderBottom={"1px solid rgba(224, 225, 226, 1)"}>
            <Flex w={"100%"} maxW={'700px'} flexDir={"column"}  >
              <Text fontSize={"24px"} lineHeight={"36px"} fontWeight={"700"} color={"rgba(25, 25, 25, 1)"} fontFamily={fonts.montserrat}>Overview</Text>
              <Text fontWeight={"400"} fontSize={"14px"} lineHeight={"21px"} color={"rgba(129, 137, 149, 1)"} fontFamily={fonts.avenir}> See all your progress here </Text>
            </Flex>
            <Flex w={"100%"} h={"100%"} alignItems={"center"} gap={"10px"} justifyContent={"flex-end"}>
              <Flex h={"40px"} w={"100%"} maxW={"181px"}>
                <ButtonField textValue={'+ Create Submission'}  />
              </Flex>
              <Button h={"40px"} w={"100%"} maxW={"181px"}> 
                <Text color = {BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE} fontFamily={BODY_TEXT_FONT_FAMILY} fontWeight = {"700"} >Compose Email</Text>
              </Button>
            </Flex>
          </Flex>
          
          <Flex p={"20px"} flexDir={"column"} gap={"10px"}  >
            <Text fontWeight={"700"} fontSize={"18px"}  lineHeight={"27px"} fontFamily={fonts.montserrat}>Incorporation Progress</Text>
            <Flex w={"100%"} borderRadius={"8px"} h={"100%"} border={"1px solid rgba(224, 225, 226, 1)"}  alignItems={"center"} justifyContent={"center"}>
              
              <Flex w={"100%"} maxW={"100%"} h={"100%"} p={"20px"}  flexDir={"column"}>
                <Flex  h={"100%"} gap={"10px"} >
                  <Flex position = {'relative'}minW = {'32px'} minH = {'32px'}  >
                    <Image src = {'/icons/check.svg'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
                  </Flex> 
                  <Flex w={"100%"} maxW={"400px"} h={"100%"} flexDir={"column"}  >
                    <Text fontWeight={"400"} fontFamily={fonts.montserrat} fontSize={"18px"}lineHeight={"24px"} color={"rgba(25, 25, 25, 0.88)"}>
                      Know Your Client
                    </Text>
                
                  </Flex>
                  <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Flex justifySelf={"center"} bg={"yellow"} h={"1px"} w={"100%"} maxW={"300px"}>

                    </Flex>
                  </Flex>
                
                </Flex>
                <Text ml={"42px"} fontWeight={"400"} fontSize={"16px"} lineHeight={"24px"} fontFamily={fonts.helvetica} color={"rgba(25, 25, 25, 0.45);"}>
                  Completed
                </Text>
              </Flex>

              <Flex w={"100%"} h={"100%"} p={"20px"} maxW={"100%"} flexDir={"column"}>
                <Flex  h={"100%"} gap={"10px"} >
                  <Flex position = {'relative'}minW = {'32px'} minH = {'32px'}    >
                    <Image src = {'/icons/check.svg'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
                  </Flex> 
                  <Flex w={"100%"} maxW={"fit-content"}  h={"100%"} flexDir={"column"} >
                    <Text fontWeight={"400"} fontFamily={fonts.montserrat} fontSize={"18px"}lineHeight={"24px"} color={"rgba(25, 25, 25, 0.88)"}>
                      Payment
                    </Text>
                
                  </Flex>
                  <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Flex justifySelf={"center"} bg={"yellow"} h={"1px"} w={"100%"} maxW={"300px"}>

                    </Flex>
                  </Flex>
                
                </Flex>
                <Text ml={"42px"} fontWeight={"400"} fontSize={"16px"} lineHeight={"24px"} fontFamily={fonts.helvetica} color={"rgba(25, 25, 25, 0.45);"}>
                  Completed
                </Text>
              </Flex>

              <Flex w={"100%"} h={"100%"} p={"20px"}  flexDir={"column"}>
                <Flex  h={"100%"} gap={"10px"} w={"100%"} >
                  <Flex position = {'relative'} minW = {'32px'} minH = {'32px'}  >
                    <Image src = {'/icons/check.svg'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
                  </Flex> 
                  <Flex w={"100%"} maxW={"fit-content"}  h={"100%"} flexDir={"column"} >
                    <Text fontWeight={"400"} fontFamily={fonts.montserrat} fontSize={"18px"}lineHeight={"24px"} color={"rgba(25, 25, 25, 0.88)"}>
                      Reservation
                    </Text>
                
                  </Flex>
                  <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Flex justifySelf={"center"} bg={"yellow"} h={"1px"} w={"100%"} maxW={"300px"}>

                    </Flex>
                  </Flex>
                
                </Flex>
                <Text ml={"42px"} fontWeight={"400"} fontSize={"16px"} lineHeight={"24px"} fontFamily={fonts.helvetica} color={"rgba(25, 25, 25, 0.45);"}>
                  Completed
                </Text>
              </Flex>


                 <Flex w={"100%"} h={"100%"} p={"20px"} maxW={"fit-content"}  flexDir={"column"}>
                <Flex  h={"100%"} gap={"10px"} >
                  <Flex position = {'relative'} w = {'32px'} h = {'32px'} >
                    <Image src = {'/icons/check.svg'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
                  </Flex> 
                  <Flex w={"fit-content"} h={"100%"} flexDir={"column"} >
                    <Text fontWeight={"400"} fontFamily={fonts.montserrat} fontSize={"18px"}lineHeight={"24px"} color={"rgba(25, 25, 25, 0.88)"}>
                      Incoporation
                    </Text>
                
                  </Flex>
                  {/* <Flex w={"fit-content"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Flex justifySelf={"center"} bg={"yellow"} h={"1px"} w={"106px"}>

                    </Flex>
                  </Flex> */}
                
                </Flex>
                <Text ml={"42px"} fontWeight={"400"} fontSize={"16px"} lineHeight={"24px"} fontFamily={fonts.helvetica} color={"rgba(25, 25, 25, 0.45);"}>
                  Completed
                </Text>
              </Flex>


            </Flex>
          </Flex>

          <Flex p={"20px"} flexDir={"column"} gap={"10px"} >
            <Text fontWeight={"400"} fontSize={"16px"} fontFamily={fonts.avenir} lineHeight={"19px"} color={"rgba(25, 25, 25, 1)"}>Form and Document Status</Text>
            <Flex border={"1px solid rgba(224, 225, 226, 1)"} p={"10px"} flexDir={"column"} borderRadius={"4px"} w={"100%"} maxW={"505px"} h={"101px"} >
              <Flex gap={"10px"} h={"50px"} w={"100%"} borderBottom={"1px solid rgba(224, 225, 226, 1)"} >
                <Flex position = {'relative'} w = {'32px'} h = {'32px'} >
                  <Image src = {'/icons/rform.svg'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
                </Flex> 
                <Flex w={"100%"} flexDir={"column"}>
                  <Text fontWeight={"500"} fontSize={"14px"} lineHeight={"22px"}>
                    Requirement Form
                  </Text>
                  <Text fontSize={"12px"} fontWeight={"400"} lineHeight={"14.3px"} color={"rgba(129, 137, 149, 1)"}> 
                  Created at 12 Jun
                  </Text>
                </Flex>
                <Spacer />
                <Flex border={" 1px solid #000"} h={"fit-content"} px={"5px"} borderRadius={"12px"}>
                    <Text fontWeight={"400"} fontSize={"12px"} lineHeight={"20px"}> Submitted</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"}  justifyContent={"center"}>
                <Text fontSize={"12px"} mt={"10px"} fontWeight={"500"} fontFamily={fonts.helvetica} lineHeight={"14px"} color={"rgba(25, 25, 25, 0.88)"} >
                  Last updated: 13 Jun, 14:45
                </Text>
                <Spacer />
                {/* <Flex bg={"rgba(145, 202, 255, 1)"} >
                    <Text color={"rgba(22, 119, 255, 1)"}>On Check</Text>
                </Flex> */}
              </Flex>
            
            </Flex>
          </Flex>

         

        </Flex>
  
      </Flex>
        
    </Flex>
  )
}

export default Dashboard