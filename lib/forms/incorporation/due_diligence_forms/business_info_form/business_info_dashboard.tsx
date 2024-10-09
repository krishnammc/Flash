"use client"
import { FLEX_BORDER_COLOR, HEADING_ICON_ACTIVE_COLOR, HELP_TEXT_COLOR, TEXT_COLOR, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, BUTTON_TEXT_COLOR, FILE_BG, FILE_BORDER_COLOR, PAGE_HEADING_TEXT_COLOR, BUTTON_TEXT_FONT_WEIGHT, FORM_BORDER_COLOR, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT, BUTTON_BG, FLEX_BUTTON_BG, POPUP_FORM_BG, POPUP_HEADER_FONT_SIZE, FORM_MAX_WIDTH, LIST_FORM_DATA_MAX_WIDTH, POPUP_FORM_MAX_WIDTH } from '@/lib/app/app_constants';
import { Button, Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import { FaInbox } from 'react-icons/fa6';
import { IoCloseCircleOutline } from 'react-icons/io5';
import AddBusiness from './add_business';
import { DueDiligenceFormSectionValues } from '@/lib/interfaces/incorporation/due_diligence_form/interfaces';
import { BusinessInfoListData } from '@/lib/api/incorporation/due_diligence_form_data/business_info_data';
import { HiMiniTrash } from 'react-icons/hi2';
import { MdEdit } from 'react-icons/md';

export interface fields {
  heading:string,
  answer:Record<string, string | number | string[] | number[]>,
  section_values:DueDiligenceFormSectionValues[]
}

const BusinessInfoDashboard = ({heading,answer,section_values}:fields) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [listEmpty, SetListEmpty] = useState<boolean>(false);

  return (
    <Flex key = {heading} w = {'100%'}>
      { listEmpty ?
        <Flex key = {heading}  flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w={'100%'} h = {'335px'} p = {'20px'} gap = {['10px','24px']}   borderRadius = {'4px'} borderColor = {FORM_BORDER_COLOR}>
          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} fontSize = {TEXT_FONT_SIZE}>List of Business</Text>
          <Flex w = {'100%'} flexDir = {'column'} p = {['20px','20px','30px']} gap = {'20px'}  justifyContent = {'center'}   h = {'100%'} alignItems = {'center'}>
            <FaInbox fontSize = {'50px'} color = {HEADING_ICON_ACTIVE_COLOR}/>
            <Flex flexDir = {'column'} gap = {'5px'} justifyContent = {'flex-end'} >
              <Text textAlign = {'center'} fontSize = {TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>There are no Business data yet</Text>
              <Text textAlign = { 'center'} fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>Click on the Add New Business button to fill the data</Text>
            </Flex>
          </Flex>
          <Flex  justifyContent = {'center'} alignItems = {'flex-end'}>
            <Button 
              maxW = {'187px'}
              w={'100%'}
              h = {'32px'}
              color = {TEXT_COLOR}
              bgGradient = {`linear(180deg,${BUTTON_LINEAR_LEFT_COLOR},${BUTTON_LINEAR_RIGHT_COLOR})`}    
              borderRadius = {'4px'}
              onClick = {onOpen}
            >
              <Text color = {BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE}  fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New Business</Text>
            </Button>
          </Flex>
        </Flex> 
      :
      <Flex w = {'100%'} flexDir = {'column'}   p = {'20px'} gap = {'24px'}   borderWidth = {'1px'} borderRadius = {'4px'} borderColor = {FLEX_BORDER_COLOR}>
        <Flex justifyContent = {'space-between'} alignItems = {'center'}>
          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} fontSize = {TEXT_FONT_SIZE}>List of Shareholders</Text>
          <Button 
            maxW = {'235px'}
            w={'100%'}
            h = {'32px'}
            color = {TEXT_COLOR}
            bgGradient = {`linear(180deg,${BUTTON_LINEAR_LEFT_COLOR},${BUTTON_LINEAR_RIGHT_COLOR})`}    
            borderRadius = {'4px'}
            onClick = {onOpen}
          >
            <Text color = {BUTTON_TEXT_COLOR} display = {["none","none","flex","flex","flex"]} fontSize = {TEXT_FONT_SIZE}  fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New Business</Text>
            <Text color = {BUTTON_TEXT_COLOR} display = {["flex","flex","none","none","none"]} fontSize = {TEXT_FONT_SIZE}  fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New</Text>
          </Button>
        </Flex>
        <Flex w = {'100%'} gap = {['10px', '24px']}>
          {
            BusinessInfoListData.map((field) => {
              return (
                <Flex key = {field.id}  maxW = {LIST_FORM_DATA_MAX_WIDTH} w = {'100%'} h = {'fit-content'} borderRadius = {'4px'} borderWidth = {'1px'} p = {'16px 20px 16px 20px'}>
                  <Flex w = {'100%'} flexDir = {'column'} gap = {'12px'} >

                    <Flex justifyContent = {'space-between'} alignItems = {'center'}>
                      <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>{field.name_of_entity_or_name_of_proposed_entity}</Text>
                      <Flex gap = {'8px'} >
                        <Flex w = {'32px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                          <MdEdit />
                        </Flex>
                        <Flex w = {'32px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                          <HiMiniTrash />
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'}>
                      <Flex w = {'50%'}  flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Trading Name</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.trading_names}</Text>
                      </Flex>
                      <Flex w = {'50%'}  flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'right'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>UEN</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT} >{field.unique_entity_number}</Text>
                      </Flex>
                    </Flex>

                    <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'} >
                      <Flex w = {'50%'} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Country or Proposed Country</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.country_or_proposed_country}</Text>
                      </Flex>
                      <Flex w = {'50%'}  flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'right'}>
                        <Text  fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Phone Number</Text>
                        <Text  fontWeight = {TEXT_FONT_WEIGHT}>{field.contact_number}</Text>
                      </Flex>
                    </Flex>

                    <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'} >
                      <Flex w = {'100%'} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Email</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.email}</Text>
                      </Flex>
                    </Flex>

                    <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'} >
                      <Flex w = {'100%'} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Mostly Transacted Country</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.mostly_transacted_country}</Text>
                      </Flex>
                    </Flex>

                    <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'} >
                      <Flex w = {'100%'} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Nature of Business</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.nature_of_business}</Text>
                      </Flex>
                    </Flex>

                    <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'} >
                      <Flex w = {'100%'} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Registered Address</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.registered_address}</Text>
                      </Flex>
                    </Flex>

                    <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'} >
                      <Flex w = {'100%'} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Address of Principal Place</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.address_of_principal_place}</Text>
                      </Flex>
                    </Flex>

                  </Flex>
                </Flex>
              );
            })
          }
        </Flex>
      </Flex> 
      }

      <Modal  isOpen = {isOpen } onClose = {onClose} >
        <ModalOverlay />
        <ModalContent maxW = {POPUP_FORM_MAX_WIDTH} w = {'100%'} mt = {'260px'} mx = {['24px','24px','auto']} >
          <ModalBody p = {'0px'}  >
            <Flex borderRadius = {'5px 5px 0 0 '} key = {heading} flexDir = {'column'} p = {'20px 16px 20px 16px'}  h = {'fit-content'} gap = {'20px'} bg = {POPUP_FORM_BG} >
              <Flex justifyContent = {'space-between'} h = {'36px'}>
                <Text fontSize = {POPUP_HEADER_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {PAGE_HEADING_TEXT_COLOR}>{heading}</Text>
                <IoCloseCircleOutline fontSize = {'24px'} cursor = {'pointer'} onClick = {() => {onClose();}} />
              </Flex>
              <Flex border = {'1px'} borderColor = {FLEX_BORDER_COLOR}></Flex>
              <AddBusiness section_values = {section_values} answer_data = {answer} />
            </Flex>
            <Flex borderRadius = {'0 0 5px 5px'}  bg = {FLEX_BUTTON_BG} borderTop = {'1px'} borderColor = {FLEX_BORDER_COLOR} h = {'72px'} p = {'20px 16px 20px 16px'} justifyContent = {'flex-end'} alignItems = {'center'} gap = {['16px','16px','20px']} >
              <Button h = '40px' borderWidth = {'1px'} borderRadius = {'10px'} bg = {BUTTON_BG} borderColor = {FILE_BORDER_COLOR}>
                <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>Save</Text>
              </Button>
              <Button h = '40px' borderWidth = {'1px'} borderRadius = {'10px'} bg = {FILE_BG}  borderColor = {FILE_BORDER_COLOR}>
                <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>Next</Text>
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default BusinessInfoDashboard
