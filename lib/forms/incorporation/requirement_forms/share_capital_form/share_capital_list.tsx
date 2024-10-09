"use client"
import { FLEX_BORDER_COLOR, TEXT_COLOR, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, BUTTON_TEXT_COLOR, PAGE_HEADING_TEXT_COLOR, HEADER_ICON_COLOR, FILE_BORDER_COLOR, FILE_BG, FORM_BORDER_COLOR, BUTTON_BG, APP_MAX_WIDTH, LABEL_TEXT_FONT_WEIGHT, TEXT_FONT_SIZE, BUTTON_TEXT_FONT_WEIGHT, HELP_TEXT_COLOR, FLEX_BUTTON_BG, POPUP_FORM_BG, POPUP_HEADER_FONT_SIZE, TEXT_FONT_WEIGHT, FORM_MAX_WIDTH } from '@/lib/app/app_constants';
import { Flex, Button, Modal, ModalOverlay, ModalContent, ModalBody, Text, Select, useDisclosure, SimpleGrid, GridItem, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import { RequirementFormSectionValues, shareHolderListTableDataValues } from '@/lib/interfaces/incorporation/requirement_form/interfaces';
import ShareCapitalInfo from './share_capital_info';
import { shareCapitalListData } from '@/lib/api/incorporation/requirement_form_data/share_capital_data';
import { FaFile } from 'react-icons/fa6';
import { HiMiniTrash } from 'react-icons/hi2';
import { MdEdit } from 'react-icons/md';

export interface fields {
  section_heading:string,
  section_values:RequirementFormSectionValues[],
  answer_data:Record<string, string | number | string[] | number[]>
}

const ShareCapitalList = ({section_heading, section_values, answer_data}:fields) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const shareCapitalList = shareCapitalListData;

  return (
    <Flex  maxW = {FORM_MAX_WIDTH} w={'100%'}  h = {'fit-content'}>
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
            <Text color = {BUTTON_TEXT_COLOR} display = {["none","none","flex","flex","flex"]} fontSize = {TEXT_FONT_SIZE}  fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New Share Holder</Text>
            <Text color = {BUTTON_TEXT_COLOR} display = {["flex","flex","none","none","none"]} fontSize = {TEXT_FONT_SIZE}  fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New</Text>
          </Button>
        </Flex>

        <SimpleGrid columns = {2} columnGap = {['10px', '24px']} rowGap = {['10px', '24px']}>
          {
            shareCapitalList.map((field) => {
              return (
                <GridItem key = {field.id} colSpan = {[2, 2, 1]} maxW = {'426px'} w={'100%'} h = {'fit-content'} borderRadius = {'4px'} borderWidth = {'1px'} p = {'16px 20px 16px 20px'}>
                  <Flex flexDir = {'column'} gap = {'12px'}>
                    <Flex justifyContent = {'space-between'}>
                      <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>{field.name}</Text>
                      <Flex gap = {'8px'} >
                        <Flex w = {'32px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                          <MdEdit />
                        </Flex>
                        <Flex w = {'32px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                          <HiMiniTrash />
                        </Flex>
                      </Flex>
                    </Flex>
                    
                    <Flex flexDir = {['column', 'column', 'row']} justifyContent = {'space-between'} gap = {'12px'} >
                      <Flex flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Currency</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.currency}</Text>
                      </Flex>
                        <Flex flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'}>
                          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Shares Payable</Text>
                          <Text fontWeight = {TEXT_FONT_WEIGHT} textAlign = {['left','left','right']}>{field.shares_payable}</Text>
                        </Flex>
                    </Flex>

                    { field.sub_class && 
                      <Flex fontSize = {TEXT_FONT_SIZE} flexDir = {'column'} gap = {'4px'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Sub-class</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.sub_class}</Text>
                      </Flex>
                    }

                    { field.method_of_allotment && 
                      <Flex fontSize = {TEXT_FONT_SIZE} flexDir = {'column'} gap = {'4px'}>
                        <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Method of Allotment</Text>
                        <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.method_of_allotment}</Text>
                      </Flex>
                    }

                    { field.attachment && 
                      <Flex flexDir = {'column'} gap = {'12px'}>
                        <Flex fontSize = {TEXT_FONT_SIZE} flexDir = {'column'} gap = {'4px'}>
                          <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Attachment</Text>
                          <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.attachment}</Text>
                        </Flex>
                        <Flex maxW = {'150px'} w={'100%'} h = {'32px'} justifyContent = {'center'} alignItems = {'center'} gap = {'8px'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR}>
                          <FaFile />
                          <Text>File_name.pdf</Text>
                        </Flex>
                      </Flex>
                    }

                    <Accordion allowToggle gap = {['12px', '12px', '15px']}  h = {'fit-content'}>
                      {
                        field.data.map((value : shareHolderListTableDataValues) => {
                          return(
                            <AccordionItem key = {value.id} mb = {'12px'}   h = {'fit-content'} gap = {'12px'} borderWidth = {1} borderRadius = {'6px'} borderColor = {FORM_BORDER_COLOR}>
                              <AccordionButton  >
                                <Text as = {'span'} flex = {'1'} textAlign = {'left'} fontSize = {TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {TEXT_COLOR}>{value.label}</Text>
                                <AccordionIcon />
                              </AccordionButton>                 
                              <AccordionPanel  pb = {4}>
                                {
                                  value.values.map((item) => {
                                    return(
                                      <Flex key = {item.id} justifyContent = {'space-between'} mb = {'8px'} alignItems = {'center'} fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} >
                                        <Text>{item.label}</Text>
                                        <Text>{item.value}</Text>
                                      </Flex>
                                    );
                                  })
                                }
                              </AccordionPanel>
                            </AccordionItem>
                          );
                        })
                      } 
                    </Accordion> 

                  </Flex>
                </GridItem>
              );
            })
          }
        </SimpleGrid>

      </Flex> 
      
      {/* <Modal  isOpen = {isOpen } onClose = {onClose} >
        <ModalOverlay />
        <ModalContent maxW = {'728px'} w={'100%'}  mt = {'260px'} mx = {['24px','24px','auto']} >
          <ModalBody p = {'0px'}  >
            <Flex borderRadius = {'5px 5px 0 0 '} key = {section_heading} flexDir = {'column'} p = {'20px 16px 20px 16px'}  h = {'fit-content'} gap = {'20px'} bg = {POPUP_FORM_BG} >
              <Flex justifyContent = {'space-between'} h = {'36px'}>
                <Text fontSize = {POPUP_HEADER_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {PAGE_HEADING_TEXT_COLOR}>{section_heading}</Text>
                <IoCloseCircleOutline fontSize = {'24px'} cursor = {'pointer'} onClick = {() => {onClose();}} />
              </Flex>
              <Flex border = {'1px'} borderColor = {FLEX_BORDER_COLOR}></Flex>
              <ShareCapitalInfo heading={''} section_values={section_values} answer_data={answer_data} />
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
      </Modal> */}
    </Flex>
  );
}

export default ShareCapitalList
