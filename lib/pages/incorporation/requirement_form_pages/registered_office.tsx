"use client"
import React, { useEffect, useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, Heading, Spinner, Text } from '@chakra-ui/react'
import { FORM_MAX_WIDTH, TAB_HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, TEXT_COLOR, TAB_SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, PAGE_TEXT_COLOR, FORM_BORDER_COLOR, TEXT_FONT_SIZE, HEADER_BG, OVERALL_PAGE_BG, BODY_TEXT_FONT_FAMILY, PAGE_SUB_HEADING_FONT_FAMILY, TEXT_AREA_FONT_WEIGHT } from '@/lib/app/app_constants'
import { RequirementFormPageValues } from '@/lib/interfaces/incorporation/requirement_form/interfaces'
import { registeredOfficeAnswerData, registeredOfficeFormData } from '@/lib/api/incorporation/requirement_form_data/registered_office_data'
import RegisteredOfficeAddress from '@/lib/forms/incorporation/requirement_forms/registered_office_form/registered_office_address'
import TopButton from '@/lib/components/top_button'

const RegisteredOffice = () => {

   const formData = registeredOfficeFormData;
   const answerData = registeredOfficeAnswerData;

  //Initial Page Loading Spinner
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => { 
    setTimeout(() => { setLoading(false)}, 2000);
  }, [])

  if(loading){
    return(
      <Flex h = {'100vh'} w = {'100vw'} bg = {OVERALL_PAGE_BG} justifyContent = {'center'} alignItems = {'center'}>
        <Spinner
          thickness = {'4px'}
          speed = {'0.65s'}
          emptyColor = {'gray.200'}
          color = {HEADER_BG}
          size = {'xl'}
          width = {'50px'}
          height = {'50px'}
        />
      </Flex>
    );
  }

  return (
    <Flex key = {formData.page_heading} flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w = {'100%'}  h = {'100%'} gap = {'24px'} >
      
      {/* Form Top Button For Save Details and Move to Dashboard Page */}
      <TopButton />
      {/* Page Heading */}
      <Flex flexDir = {'column'} w = {'100%'} gap = {['4px','8px']}>
        <Heading  fontSize = {TAB_HEADING_FONT_SIZE} fontFamily={PAGE_SUB_HEADING_FONT_FAMILY} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {TEXT_COLOR}>{formData.page_heading}</Heading>
        <Text fontSize = {TAB_SUB_HEADING_FONT_SIZE} fontFamily={BODY_TEXT_FONT_FAMILY} fontWeight = {TEXT_FONT_WEIGHT} color = {PAGE_TEXT_COLOR}>{formData.page_heading_sub_info}</Text>
      </Flex>
      {/* Page Data */}
      <Accordion allowMultiple defaultIndex = {[0]} maxW = {FORM_MAX_WIDTH} w = {'100%'} gap = {['10px', '10px', '20px']}  h = {'fit-content'}   p = {'20px 16px 0px 16px'} borderWidth = {1} borderRadius = {'4px'} borderColor = { FORM_BORDER_COLOR}>
        {
          formData.page_values.map((value : RequirementFormPageValues) => {
            return(
              <AccordionItem mb = {'20px'}  key = {value.section_heading}   h = {'fit-content'} p = {'16px'} gap = {'20px'} borderWidth = {1} borderRadius = {'6px'} borderColor = {FORM_BORDER_COLOR}>
                <AccordionButton  >
                  <Text as = {'span'} flex = {'1'} textAlign = {'left'} fontFamily={PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {TEXT_COLOR}>{value.section_heading}</Text>
                  <AccordionIcon />
                </AccordionButton>                 
                <AccordionPanel pb = {4}>
                  <RegisteredOfficeAddress section_values = {value.section_values} answer_data = {answerData}/>
                </AccordionPanel>
              </AccordionItem>
            );
          })
        } 
      </Accordion>  
                         
    </Flex>
  );
}

export default RegisteredOffice
