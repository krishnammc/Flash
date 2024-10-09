"use client"
import React, { useState } from 'react';
import { Button, Flex, Modal, ModalBody, ModalContent, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { FaInbox } from 'react-icons/fa6'
import {FILE_BORDER_COLOR, FILE_BG, HEADING_ICON_ACTIVE_COLOR, FLEX_BORDER_COLOR, PAGE_HEADING_TEXT_COLOR, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, BUTTON_TEXT_COLOR, TEXT_COLOR, FLEX_BUTTON_BG, HEADER_ICON_COLOR, LABEL_TEXT_FONT_WEIGHT, TEXT_FONT_SIZE, BUTTON_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, TEXT_FONT_WEIGHT, POPUP_HEADER_FONT_SIZE, POPUP_FORM_BG, BUTTON_BG, TABLE_HEADING_BG, LABEL_COLOR, HELP_TEXT_COLOR, PAGE_SUB_HEADING_FONT_FAMILY, TEXT_AREA_FONT_WEIGHT } from '../../../../app/app_constants'
import { IoCloseCircleOutline } from 'react-icons/io5'
import AddMember from './add_member'
import { RequirementFormSectionValues } from '@/lib/interfaces/incorporation/requirement_form/interfaces'
import { FORM_BORDER_COLOR, FORM_MAX_WIDTH } from '@/lib/app/app_constants'
import { HiMiniTrash } from 'react-icons/hi2'
import { LuEye } from 'react-icons/lu'
import { MdEdit } from 'react-icons/md'
import { officerShareHolderListData } from '@/lib/api/incorporation/requirement_form_data/officer_shareholder_data'

export interface fields {
  heading:string,
  answer:Record<string, string | number | string[] | number[]>,
  section_values:RequirementFormSectionValues[]
} 

const OfficerAndShareHolderDashboard = ({heading,answer,section_values}:fields) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [listEmpty, SetListEmpty] = useState<boolean>(false);

  const shareHolderList = officerShareHolderListData;

  return (
    <Flex key = {heading} w  = {'100%'} >
      { 
        listEmpty ?
          <Flex key = {heading}  flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w = {'100%'} h = {'335px'} p = {'20px'} gap = {['10px','24px']}   borderRadius = {'4px'} borderColor = {FORM_BORDER_COLOR}>
            <Text fontWeight = {TEXT_AREA_FONT_WEIGHT} fontFamily={PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {TEXT_FONT_SIZE}>Officer/Shareholder List</Text>
            <Flex w = '100%' flexDir = {'column'} p = {['20px','20px','30px']} gap = {'20px'}  justifyContent = {'center'}   h = {'100%'} alignItems = {'center'}>
              <FaInbox fontSize = {'50px'} color = {HEADING_ICON_ACTIVE_COLOR}/>
              <Flex flexDir = {'column'} gap = {'5px'} justifyContent = {'flex-end'} >
                <Text textAlign = {'center'} fontSize = {TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>There are no Officer/Shareholder data yet</Text>
                <Text textAlign = { 'center'} fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>Click on the Add Member button to add new member</Text>
              </Flex>
            </Flex>
            <Flex  justifyContent = {'center'} alignItems = {'flex-end'}>
              <Button 
                maxW = {'187px'}
                w = {'100%'} 
                h = {'32px'}
                color = {TEXT_COLOR}
                bgGradient = {`linear(180deg,${BUTTON_LINEAR_LEFT_COLOR},${BUTTON_LINEAR_RIGHT_COLOR})`}    
                borderRadius = {'4px'}
                onClick = {onOpen}
              >
                <Text color = {BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE}  fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add Member</Text>
              </Button>
            </Flex>
          </Flex> 
      :
          <Flex key = {heading} flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w = {'100%'} h = {'fit-content'} p = {'20px'} gap = {'12px'} borderRadius = {'4px'} borderColor = {FORM_BORDER_COLOR}>
            <Flex justifyContent = {'space-between'} alignItems = {'center'} >
              <Text fontWeight = {TEXT_AREA_FONT_WEIGHT} fontFamily={PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {TEXT_FONT_SIZE}>Officer/Shareholder List</Text>
              <Button 
                maxW = {'114px'}
                w = {'100%'} 
                h = {'32px'}
                color = {TEXT_COLOR}
                bgGradient = {`linear(180deg,${BUTTON_LINEAR_LEFT_COLOR},${BUTTON_LINEAR_RIGHT_COLOR})`}    
                borderRadius = {'4px'}
                onClick = {onOpen}
              >
                <Text color = {BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE}  fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add Member</Text>
              </Button>
            </Flex>
            <TableContainer borderRadius = {'4px'} borderWidth = {'1px'}>
              <Table>
                <Thead backgroundColor = {TABLE_HEADING_BG} fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>
                  <Tr h = {'56px'}>
                    <Th maxW = '146px' w = {'100%'} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} color = {LABEL_COLOR} >Name</Th>
                    <Th maxW = '146px' w = {'100%'} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} color = {LABEL_COLOR} whiteSpace = "normal" overflowWrap = "break-word">Identification No./ UEN</Th>
                    <Th maxW = '146px' w = {'100%'} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} color = {LABEL_COLOR}>Position</Th>
                    <Th maxW = '146px' w = {'100%'} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} color = {LABEL_COLOR} >Identification Type</Th>
                    <Th maxW = '146px' w = {'100%'} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} color = {LABEL_COLOR} textAlign = {'end'} >IPA</Th>
                    <Th maxW = '146px' w = {'100%'} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} color = {LABEL_COLOR} textAlign = {'end'} >Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  { 
                    shareHolderList.map((field, index) => {
                      return(
                        <Tr key = {index} h = {'66px'} fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT}>
                          <Td maxW = '146px' w = {'100%'} >
                            <Text fontWeight = {LABEL_TEXT_FONT_WEIGHT}>{field.name}</Text>
                            <Text >{field.nick_name}</Text>
                          </Td>
                          <Td maxW = '146px' w = {'100%'}  whiteSpace = "normal" overflowWrap = "break-word">
                            <Text>{field.identification_number_uen}</Text>
                          </Td>
                          <Td maxW = '146px' w = {'100%'} whiteSpace = "normal" overflowWrap = "break-word">
                            <Text>{field.position}</Text>
                          </Td>
                          <Td maxW = '146px' w = {'100%'} whiteSpace = "normal" overflowWrap = "break-word">
                            <Text>{field.identification_type}</Text>
                          </Td>
                          <Td maxW = '146px' w = {'100%'} whiteSpace = "normal" overflowWrap = "break-word">
                            <Flex gap = {'8px'} justifyContent = {'flex-end'} >
                              <Flex w = {'46px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                                <LuEye />
                              </Flex>
                              <Flex w = {'46px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                                <HiMiniTrash />
                              </Flex>
                            </Flex>
                          </Td>
                          <Td maxW = '146px' w = {'100%'} whiteSpace = "normal" overflowWrap = "break-word">
                            <Flex gap = {'8px'} justifyContent = {'flex-end'} >
                              <Flex w = {'46px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                                <MdEdit />
                              </Flex>
                              <Flex w = {'46px'} h = {'32px'} fontSize = {'16px'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR} cursor = {'pointer'}>
                                <HiMiniTrash />
                              </Flex>
                            </Flex>
                          </Td>
                        </Tr>
                      );
                    })
                  }
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
      }
      <Modal  isOpen = {isOpen } onClose = {onClose} >
        <ModalOverlay />
        <ModalContent maxW = {'728px'} w = {'100%'}  mt = {'260px'} mx = {['24px','24px','auto']} >
          <ModalBody p = {'0px'}  >
            <Flex borderRadius = {'5px 5px 0 0 '} key = {heading} flexDir = {'column'} p = {'20px 16px 20px 16px'}  h = {'fit-content'} gap = {'20px'} bg = {POPUP_FORM_BG} >
              <Flex justifyContent = {'space-between'} h = {'36px'}>
                <Text fontSize = {POPUP_HEADER_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {PAGE_HEADING_TEXT_COLOR}>{heading}</Text>
                <IoCloseCircleOutline fontSize = {'24px'} cursor = {'pointer'} onClick = {() => {onClose();}} />
              </Flex>
              <Flex border = {'1px'} borderColor = {FLEX_BORDER_COLOR}></Flex>
              <AddMember section_values = {section_values} answer_data = {answer} />
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

export default OfficerAndShareHolderDashboard
