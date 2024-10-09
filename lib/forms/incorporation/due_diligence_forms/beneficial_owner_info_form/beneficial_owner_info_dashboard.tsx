"use client"
import { FLEX_BORDER_COLOR, HEADING_ICON_ACTIVE_COLOR, HELP_TEXT_COLOR, TEXT_COLOR, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, BUTTON_TEXT_COLOR, FILE_BG, FILE_BORDER_COLOR, PAGE_HEADING_TEXT_COLOR, BUTTON_BG, BUTTON_TEXT_FONT_WEIGHT, FLEX_BUTTON_BG, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, POPUP_FORM_BG, POPUP_HEADER_FONT_SIZE, SUB_HEADING_FONT_SIZE, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT, POPUP_FORM_MAX_WIDTH, FORM_BORDER_COLOR, LIST_FORM_DATA_MAX_WIDTH, FORM_MAX_WIDTH } from '@/lib/app/app_constants';
import { useDisclosure, Flex, Button, Text, Modal, ModalBody, ModalContent, ModalOverlay, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import React, { useState } from 'react'
import { FaInbox } from 'react-icons/fa6';
import { IoCloseCircleOutline } from 'react-icons/io5';
import AddBeneficialOwner from './add_beneficial_owner';
import { DueDiligenceFormPageValues, IndividualInfoListDropdownDataValues } from '@/lib/interfaces/incorporation/due_diligence_form/interfaces';
import { BeneficialOwnerInfoListData } from '@/lib/api/incorporation/due_diligence_form_data/beneficial_owner_info_data';
import { HiMiniTrash } from 'react-icons/hi2';
import { MdEdit } from 'react-icons/md';

export interface fields {
  answer: Record<string, string | number | string[] | number[]>,
  page_values: DueDiligenceFormPageValues[]
} 

const BeneficialOwnerInfoDashboard = ({ answer, page_values }: fields) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [listEmpty, SetListEmpty] = useState<boolean>(false);
  const section_heading = ["Add Beneficial Owner","Political Exposed Person (PEP) Info","Enhanced CDD Info"]

  return (
    <Flex w = {'100%'}>
      { listEmpty ?
        <Flex flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w={'100%'} h = {'335px'} p = {'20px'} gap = {['10px', '24px']} borderRadius = {'4px'} borderColor = {FORM_BORDER_COLOR}>
          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} fontSize = {TEXT_FONT_SIZE}>List of Beneficial Owner</Text>
          <Flex w = {'100%'} flexDir = {'column'} p = {['20px', '20px', '30px']} gap = {'20px'} justifyContent = {'center'} h = {'100%'} alignItems = {'center'}>
            <FaInbox fontSize = {'50px'} color = {HEADING_ICON_ACTIVE_COLOR} />
            <Flex flexDir = {'column'} gap = {'5px'} justifyContent = {'flex-end'}>
              <Text textAlign = {'center'} fontSize = {TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>There are no Beneficial Owner data yet</Text>
              <Text textAlign = {'center'} fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>Click on the Add New Beneficial Owner button to fill the data</Text>
            </Flex>
          </Flex>
          <Flex justifyContent = {'center'} alignItems = {'flex-end'}>
            <Button
            
              h = {'32px'}
              color = {TEXT_COLOR}
              bgGradient = {`linear(180deg,${BUTTON_LINEAR_LEFT_COLOR},${BUTTON_LINEAR_RIGHT_COLOR})`}
              borderRadius = {'4px'}
              onClick = {onOpen}
            >
              <Text color = {BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New Beneficial Owner</Text>
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
              <Text color = {BUTTON_TEXT_COLOR} display = {["none","none","flex","flex","flex"]} fontSize = {TEXT_FONT_SIZE}  fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New Beneficial Owner</Text>
              <Text color = {BUTTON_TEXT_COLOR} display = {["flex","flex","none","none","none"]} fontSize = {TEXT_FONT_SIZE}  fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New</Text>
            </Button>
          </Flex>
          <Flex w = {'100%'} gap = {['10px', '24px']}>
            {
              BeneficialOwnerInfoListData.map((field) => {
                return (
                  <Flex key = {field.id}  maxW = {LIST_FORM_DATA_MAX_WIDTH} w = {'100%'} h = {'fit-content'} borderRadius = {'4px'} borderWidth = {'1px'} p = {'16px 20px 16px 20px'}>
                    <Flex w = {'100%'} flexDir = {'column'} gap = {'12px'} >
                      <Flex justifyContent = {'space-between'} alignItems = {'center'}>
                        <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>{field.full_name}</Text>
                        <Flex gap = {'8px'} >
                          <Flex w = {'32px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                            <MdEdit />
                          </Flex>
                          <Flex w = {'32px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                            <HiMiniTrash />
                          </Flex>
                        </Flex>
                      </Flex>

                      <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'} >
                        <Flex w = {'100%'} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Date of Birth</Text>
                          <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.date_of_birth}</Text>
                        </Flex>
                      </Flex>

                      <Flex w= {'100%'} flexDir = {['column','row']} justifyContent = {'space-between'} gap={'15px'} >
                        <Flex w = {['100%','50%']} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Email</Text>
                          <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.email}</Text>
                        </Flex>
                        <Flex w = {['100%','50%']}  flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {['left','right']}>
                          <Text  fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Phone Number</Text>
                          <Text  fontWeight = {TEXT_FONT_WEIGHT}>{field.phone_number}</Text>
                        </Flex>
                      </Flex>

                      <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'} >
                        <Flex w = {'50%'} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>ID Type</Text>
                          <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.identification_type}</Text>
                        </Flex>
                        <Flex w = {'50%'}  flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'right'}>
                          <Text  fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>ID Number</Text>
                          <Text  fontWeight = {TEXT_FONT_WEIGHT}>{field.identification_number}</Text>
                        </Flex>
                      </Flex>

                      <Flex w= {'100%'} justifyContent = {'space-between'} gap={'15px'} >
                        <Flex w = {'50%'} flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'left'}>
                          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>ID Expiration</Text>
                          <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.identification_expiry_date}</Text>
                        </Flex>
                        <Flex w = {'50%'}  flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'} textAlign = {'right'}>
                          <Text  fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Nationality</Text>
                          <Text  fontWeight = {TEXT_FONT_WEIGHT}>{field.nationality}</Text>
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
                          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Registered Address</Text>
                          <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.registered_address}</Text>
                        </Flex>
                      </Flex>

                      <Accordion allowMultiple allowToggle gap = {['12px', '12px', '15px']}  h = {'fit-content'}>
                        {
                          field.data.map((value : IndividualInfoListDropdownDataValues) => {
                            return(
                              <AccordionItem key = {value.id} mb = {'12px'}   h = {'fit-content'} gap = {'12px'} borderWidth = {1} borderRadius = {'6px'} borderColor = {FORM_BORDER_COLOR}>
                                <AccordionButton p = {'16px'} >
                                  <Text as = {'span'} flex = {'1'} textAlign = {'left'} fontSize = {TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {TEXT_COLOR}>{value.label}</Text>
                                  <AccordionIcon />
                                </AccordionButton>                 
                                <AccordionPanel  pb = {4}>
                                  {/* {
                                    value.values.map((item) => {
                                      return(
                                        <Flex key = {item.id} justifyContent = {'space-between'} mb = {'8px'} alignItems = {'center'} fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} >
                                          <Text>{item.label}</Text>
                                          <Text>{item.value}</Text>
                                        </Flex>
                                      );
                                    })
                                  } */}
                                </AccordionPanel>
                              </AccordionItem>
                            );
                          })
                        } 
                      </Accordion> 

                    </Flex>
                  </Flex>
                );
              })
            }
          </Flex>
        </Flex> 
      }

      <Modal isOpen = {isOpen} onClose = {onClose}>
        <ModalOverlay />
        <ModalContent maxW = {POPUP_FORM_MAX_WIDTH} w = {'100%'} mt = {'260px'} mx = {['24px', '24px', 'auto']}>
          <ModalBody p = {'0px'}>
            <Flex borderRadius = {'5px 5px 0 0 '} flexDir = {'column'} p = {'20px 16px 20px 16px'} h = {'fit-content'} gap = {'20px'} bg = {POPUP_FORM_BG}>
              { 
                page_values.map((section) => {
                  if (section.section_heading == section_heading[0]) {
                    return (
                      <>
                        <Flex justifyContent = {'space-between'} h = {'36px'}>
                          <Text fontSize = {POPUP_HEADER_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {PAGE_HEADING_TEXT_COLOR}>{section.section_heading}</Text>
                          <IoCloseCircleOutline fontSize = {'24px'} cursor = {'pointer'} onClick = {() => { onClose(); } } />
                        </Flex>
                        <Flex border = {'1px'} borderColor = {FLEX_BORDER_COLOR}></Flex>
                        <AddBeneficialOwner section_values = {section.section_values} answer_data = {answer} />
                      </>
                    );
                  }
                  if (section.section_heading == section_heading[1]) {
                    return (
                      <>
                        <Flex border = {'1px'} borderColor = {FLEX_BORDER_COLOR}></Flex>
                        <Flex flexDir = {'column'} gap = {'20px'}>
                          <Text fontSize = {SUB_HEADING_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {PAGE_HEADING_TEXT_COLOR}>{section.section_heading}</Text>
                          <AddBeneficialOwner section_values = {section.section_values} answer_data = {answer} />
                        </Flex>
                      </>
                    );
                  }
                  if (section.section_heading == section_heading[2]) {
                    return (
                      <Flex flexDir = {'column'} >
                        <Text fontSize = {SUB_HEADING_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {PAGE_HEADING_TEXT_COLOR}>{section.section_heading}</Text>
                        <AddBeneficialOwner section_values = {section.section_values} answer_data = {answer} />
                      </Flex>
                    );
                  }
                })
              }
            </Flex>
            <Flex borderRadius = {'0 0 5px 5px'} bg = {FLEX_BUTTON_BG} borderTop = {'1px'} borderColor = {FLEX_BORDER_COLOR} h = {'72px'} p = {'20px 16px 20px 16px'} justifyContent = {'flex-end'} alignItems = {'center'} gap = {['16px', '16px', '20px']}>
              <Button h = {'40px'} borderWidth = {'1px'} borderRadius = {'10px'} bg = {BUTTON_BG} borderColor = {FILE_BORDER_COLOR}>
                <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>Save</Text>
              </Button>
              <Button h = {'40px'} borderWidth = {'1px'} borderRadius = {'10px'} bg = {FILE_BG} borderColor = {FILE_BORDER_COLOR}>
                <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>Next</Text>
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default BeneficialOwnerInfoDashboard
