// "use client"
// import { LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, INPUT_BORDER_COLOR, INPUT_TEXT_COLOR, BUTTON_BG, LOGIN_INPUT_FIELD_HEIGHT, LOGIN_INPUT_FIELD_PADDING, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT, HELP_TEXT_COLOR, FORM_LABEL_TEXT_FONT_FAMILY, FORM_LABEL_TEXT_FONT_WEIGHT, FORM_LABEL_TEXT_FONT_SIZE } from '@/lib/app/app_constants'
// import { Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputProps, InputRightElement, Text } from '@chakra-ui/react'
// import React, { useState } from 'react'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import OTPField from './otp_field'
// import { FieldValidationType } from '@/lib/utlils/utill_methods'

// export interface fields {
//   label?:string,
//   type?:"text" | "email" | "password" |"number" |"otp",
//   value?: string | string[] | number,
//   values?:{id:string,value:string}[],
//   placeholder?:string,
//   inputProps?:InputProps,
//   isInValid?:boolean,
//   format?:FieldValidationType,
//   errorMessage?: string | null,
//   w?:string,
//   h?:string
// }

// const TextField2 = ({label, type, value, values, placeholder, inputProps, format, isInValid, errorMessage, w = "100%", h = "44px"}:fields) => {
//   const [show, setShow] = useState(false);

//   //Password Hide and Show Function
//   const handleClick = () => setShow(!show);

//   return (
//     <FormControl  gap = {'4px'} isInvalid = {isInValid}>
//       <FormLabel fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT}>{label}</FormLabel>
//       { format == "PASSWORD" ?
//         <InputGroup maxW = {w} h = {LOGIN_INPUT_FIELD_HEIGHT} borderWidth = {'1px'}  borderRadius = {'6px'} borderColor = {INPUT_BORDER_COLOR}>
//           <Input 
//           {...inputProps}
//           value={value}
//             type = {show ? 'text' : 'password'}
//             placeholder = {'Input your Password'}
//             bg = {BUTTON_BG}
//             h = {h}
//             p = {LOGIN_INPUT_FIELD_PADDING}
//             color = {INPUT_TEXT_COLOR}
//             //fontFamily = {FORM_LABEL_TEXT_FONT_FAMILY} 
//             //fontSize = {TEXT_FONT_SIZE} 
//             //fontWeight = {FORM_LABEL_TEXT_FONT_WEIGHT}
//             fontSize = {TEXT_FONT_SIZE}
//             fontWeight = {TEXT_FONT_WEIGHT}
//           />
//           <InputRightElement fontSize = {'20px'} cursor = {'pointer'} color = {HELP_TEXT_COLOR}>
//             <Text as = {'span'} onClick = {handleClick}>
//               { show ? <AiOutlineEye  /> : <AiOutlineEyeInvisible /> }
//             </Text>
//           </InputRightElement>
//         </InputGroup>
//       : ( type == "otp" ? 
//           <Flex w = {w} gap = {'20px'}>
//             <OTPField />
//             <OTPField />
//             <OTPField />
//             <OTPField />
//             <OTPField />
//             <OTPField />
//           </Flex>
//        :
//           <Input 
//             {...inputProps}
//             value = {value}
//             type = {'text'} 
//             //placeholder={'Montserrat Medium 18px'}
//             placeholder = {placeholder} 
//             borderWidth = {'1px'} 
//             borderColor = {INPUT_BORDER_COLOR} 
//             borderRadius = {'4px'}
//             color = {INPUT_TEXT_COLOR}
//             bg = {BUTTON_BG}
//             w = {w}
//             h = {h}
//             p = {LOGIN_INPUT_FIELD_PADDING}
//             // fontSize = {TEXT_FONT_SIZE} 
//             // fontWeight = {FORM_LABEL_TEXT_FONT_WEIGHT}
//             fontSize = {TEXT_FONT_SIZE}
//             fontWeight = {TEXT_FONT_WEIGHT}
//           />
//         )
//       }
//        <FormErrorMessage>{errorMessage}</FormErrorMessage>      
//     </FormControl>
//   )
// }

// export default TextField2
