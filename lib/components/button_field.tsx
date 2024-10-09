import { Button, Flex, Text } from '@chakra-ui/react'
import { BODY_TEXT_FONT_FAMILY, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, BUTTON_TEXT_COLOR, BUTTON_TEXT_FONT_WEIGHT, TEXT_AREA_FONT_WEIGHT, TEXT_COLOR, TEXT_FONT_SIZE } from '../app/app_constants'

export interface fields {
  textValue:string,
  h?:String,
  w?:string[] | string
}

const ButtonField = ({textValue, w = '100%', h = '100%'}:fields) => {

  return (
    <Flex w = {'100%'} justifyContent = {['center', 'center', 'flex-end', 'flex-end', 'flex-end']}>
      <Button 
        type = 'submit'
        w = {w}
        h = {`${h}`}
        color = {TEXT_COLOR}
        bgGradient = {`linear(180deg, ${BUTTON_LINEAR_LEFT_COLOR}, ${BUTTON_LINEAR_RIGHT_COLOR})`}    
        borderRadius = {'4px'}
      >
        <Text color = {BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE} fontFamily={BODY_TEXT_FONT_FAMILY} fontWeight = {TEXT_AREA_FONT_WEIGHT} >{textValue}</Text>
      </Button>
    </Flex>
  );
}

export default ButtonField

