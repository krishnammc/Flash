"use client"
import { FLEX_BORDER_COLOR, TEXT_COLOR, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, BUTTON_TEXT_COLOR, PAGE_HEADING_TEXT_COLOR, HEADER_ICON_COLOR, FILE_BORDER_COLOR, FILE_BG, BUTTON_BG, APP_MAX_WIDTH, LABEL_TEXT_FONT_WEIGHT, TEXT_FONT_SIZE, BUTTON_TEXT_FONT_WEIGHT, HELP_TEXT_COLOR, FLEX_BUTTON_BG, POPUP_FORM_BG, POPUP_HEADER_FONT_SIZE, TEXT_FONT_WEIGHT, FORM_BORDER_COLOR, FORM_MAX_WIDTH, TEXT_AREA_FONT_WEIGHT, PAGE_SUB_HEADING_FONT_FAMILY } from '@/lib/app/app_constants';
import { Flex, Button, Modal, ModalOverlay, ModalContent, ModalBody, Text, Select, useDisclosure, SimpleGrid, GridItem, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import AddNewDetails from './add_share_holder_details';
import { RequirementFormSectionValues, shareHolderListDataValues, shareHolderListTableDataValues } from '@/lib/interfaces/incorporation/requirement_form/interfaces';
import { shareHolderListData } from '@/lib/api/incorporation/requirement_form_data/share_holder_data';

export interface fields {

  shareholder_list: shareHolderListDataValues[],
  answer_data: Record<string, string | number | string[] | number[]>,
}

const ShareHoldersList = ({ shareholder_list, answer_data }: fields) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Flex maxW = {FORM_MAX_WIDTH} w={'100%'} h = {'fit-content'} flexDir = {'column'} gap = {'24px'} >
      { 
        shareholder_list.map((fields) => {
          console.log("ShareHoldersList :",shareHolderListData)
          console.log("fields:",fields)
          return(
            <Flex key = {fields.section_id} w = {'100%'} flexDir = {'column'} p = {'20px'} gap = {'24px'} borderWidth = {'1px'} borderRadius = {'4px'} borderColor = {FLEX_BORDER_COLOR}>
              <Flex justifyContent = {'space-between'} alignItems = {'center'}>
                <Text fontFamily={PAGE_SUB_HEADING_FONT_FAMILY} fontWeight = {TEXT_AREA_FONT_WEIGHT} fontSize = {TEXT_FONT_SIZE}>{fields.section_label}</Text>
                <Button
                  maxW = {'235px'}
                  w={'100%'} 
                  h = {'32px'}
                  color = {TEXT_COLOR}
                  bgGradient = {`linear(180deg,${BUTTON_LINEAR_LEFT_COLOR},${BUTTON_LINEAR_RIGHT_COLOR})`}
                  borderRadius = {'4px'}
                  onClick = {onOpen}
                >
                  <Text color = {BUTTON_TEXT_COLOR} display = {["none", "none", "flex", "flex", "flex"]} fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New Share Holder</Text>
                  <Text color = {BUTTON_TEXT_COLOR} display = {["flex", "flex", "none", "none", "none"]} fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add New</Text>
                </Button>
              </Flex>

              <SimpleGrid columns = {2} columnGap = {['10px', '24px']} rowGap = {['10px', '24px']}>
                {
                  fields.section_values.map((field) => {
                    return (
                      <GridItem key = {field.id} colSpan = {[2, 2, 1]} maxW = {'426px'} w={'100%'} h = {'fit-content'} borderRadius = {'4px'} borderWidth = {'1px'} p = {'16px 20px 16px 20px'}>
                        <Flex flexDir = {'column'} gap = {'12px'}>
                          <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>{field.name}</Text>
                          <Flex fontSize = {TEXT_FONT_SIZE} flexDir = {'column'} gap = {'4px'}>
                            <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Identification Number/UEN</Text>
                            <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.identification_number_uen}</Text>
                          </Flex>
                          <Flex flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'}>
                            <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Currency</Text>
                            <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.currency ? field.currency : "-"}</Text>
                          </Flex>

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

                          <Flex flexDir = {['column', 'column', 'row']} justifyContent = {'space-between'} gap = {'12px'}>
                            <Flex flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'}>
                              <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Shares Held in Trust</Text>
                              <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.shares_held_in_trust ? field.shares_held_in_trust : "-"}</Text>
                            </Flex>
                            { field.name_in_trust &&
                              <Flex flexDir = {'column'} fontSize = {TEXT_FONT_SIZE} gap = {'4px'}>
                                <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Name in Trust</Text>
                                <Text fontWeight = {TEXT_FONT_WEIGHT}>{field.name_in_trust ? field.name_in_trust : ""}</Text>
                              </Flex>
                            }
                          </Flex>

                          <Button maxW = {'386px'} w={'100%'}  maxH = {'32px'} h={'100%'}  backgroundColor = {BUTTON_BG} borderColor = {FILE_BORDER_COLOR} borderWidth = {'1px'}>
                            <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT}  color = {BUTTON_TEXT_COLOR}>Enter Shareholder Details</Text>
                          </Button>
                        </Flex>
                      </GridItem>
                    );
                  })
                }
              </SimpleGrid>

            </Flex>
          );
        })
      }

     {/*  <Modal isOpen={isOpen} onClose = {onClose} >
        <ModalOverlay />
        <ModalContent maxW={'728px'} w={'100%'} mt = {'260px'} mx={['24px', '24px', 'auto']} >
          <ModalBody p = {'0px'}  >
            <Flex borderRadius = {'5px 5px 0 0 '} key={section_heading} flexDir = {'column'} p = {'20px 16px 20px 16px'} h={'fit-content'} gap = {'20px'} bg={POPUP_FORM_BG} >
              <Flex justifyContent = {'space-between'} h={'36px'}>
                <Text fontSize = {POPUP_HEADER_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {PAGE_HEADING_TEXT_COLOR}>{section_heading}</Text>
                <IoCloseCircleOutline fontSize = {'24px'} cursor = {'pointer'} onClick={() => { onClose(); }} />
              </Flex>
              <Flex border = {'1px'} borderColor = {FLEX_BORDER_COLOR}></Flex>
              <AddNewDetails section_values = {section_values} answer_data={answer_data} />
            </Flex>
            <Flex borderRadius = {'0 0 5px 5px'} bg={FLEX_BUTTON_BG} borderTop = {'1px'} borderColor = {FLEX_BORDER_COLOR} h={'72px'} p = {'20px 16px 20px 16px'} justifyContent = {'flex-end'} alignItems = {'center'} gap = {['16px', '16px', '20px']} >
              <Button h='40px' borderWidth={'1px'} borderRadius = {'10px'} bg={BUTTON_BG} borderColor = {FILE_BORDER_COLOR}>
                <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>Save</Text>
              </Button>
              <Button h='40px' borderWidth={'1px'} borderRadius = {'10px'} bg={FILE_BG} borderColor = {FILE_BORDER_COLOR}>
                <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>Next</Text>
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </Flex>
  );
}

export default ShareHoldersList
