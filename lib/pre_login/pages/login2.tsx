/* "use client"
import { BUTTON_BG, FILE_BORDER_COLOR, FLEX_BORDER_COLOR, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, HELP_TEXT_COLOR, SINGPASS_SUB_TEXT_COLOR, SINGPASS_TEXT_COLOR, SUB_HEADING_FONT_SIZE, TAB_SUB_HEADING_FONT_SIZE, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '@/lib/app/app_constants';
import { Button, Checkbox, Flex, FormControl, Heading, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import TextField from '../components/text_field';
import ButtonField from '../components/button_field';
import { getNumberFromString, validateField } from '@/lib/utlils/utill_methods';
import { useRouter } from 'next/navigation';
import TextField2 from '../components/text_field2';
import ButtonField2 from '../components/button_field2';

export type FieldType = 'TEXT';
export type FieldValidationType = "PASSWORD" |"TEXT_ONLY"| 'EMAIL' |"NONE" | "NUMBER";

export interface LoginLabelDataValues {
  id: string,
  type: FieldType,
  label: string,
  help_text: string,
  error_message: string,
  format_error_message: string,
  format_validation: FieldValidationType
}

export const LoginLabelData: LoginLabelDataValues[] = [
  {
    id: "email",
    type: "TEXT",
    label: "Email",
    help_text: "Input your Email Address",
    error_message: "Email address is required for login",
    format_error_message: "Please enter an email using the standard format (e.g., example@domain.com)",
    format_validation: "EMAIL"
  },
  {
    id: "password",
    type: "TEXT",
    label: "Password",
    help_text: "Input your Password",
    error_message: "Password should be entered",
    format_error_message: "Your password doesn't meet the requirements. Make sure it's at least 8 characters long, with uppercase and lowercase letters, a number, and a special character.",
    format_validation: "PASSWORD"
  }
]

const LoginPage2 = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const router = useRouter();
 
  const [data, setData] = useState(
    LoginLabelData.map((field) => {

      let ansVal = '';
      return {
        id: field.id,
        value: ansVal as string | string[] | number,
        error: null as 'EMPTY' | 'FORMAT' | null
      }
    })
  );
  //console.log("Initial Data :", data);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: LoginLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    if (index < 0) return;

    let value: string | number = event.target.value;
    const validateResult = validateField(value.toString(), field.format_validation)
    tempData[index].value = value;

    tempData[index].error = (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" : null)
    setData(tempData)
  }

  const submitValidate = () => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    tempData.forEach((input) => {
      let value = LoginLabelData.filter((e) => e.id == input.id);
      value.map((e) => {
        if (e.type == "TEXT") {
          let value: number | string = input.value as number | string;
          const validateResult = validateField(value.toString(), e.format_validation)
          input.error = validateResult.isEmpty ? "EMPTY" : validateResult.isContainsFormatError ? "FORMAT" : null;
        }
      })
    })
    setData(tempData);
    return tempData.every((input) => input.error == null);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitValidate()) return;
    console.log("Answer Data :", data);
    router.push('/client/otp_verify')
  }

  return (
    <Flex flexDir={'column'} w={'100%'} h={'fit-content'} justifyContent={'center'} gap={'40px'}>

      <Flex flexDir={'column'} gap={['4px', '4px', '16px']} color={BUTTON_BG}>
        <Heading fontSize={HEADING_FONT_SIZE} fontWeight={LABEL_TEXT_FONT_WEIGHT}>Log in to your account</Heading>
        <Text fontSize={SUB_HEADING_FONT_SIZE} fontWeight={TEXT_FONT_WEIGHT}>Welcome! Enter your details to log in</Text>
      </Flex>

      <Flex w={'100%'} flexDir={'column'} gap={'24px'}>
        <form onSubmit={onSubmit}>
          <Flex flexDir={'column'} gap={'16px'}>
            {
              LoginLabelData.map((e: LoginLabelDataValues) => {
                let field = data.find((val) => val.id == e.id);
                let stateValue = field?.value!;
                const errorType = field?.error ?? null;
                const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
                const isInValid = (errorType != null);

                switch (e.type) {
                  case "TEXT":
                    return (
                      <React.Fragment key={e.id}>
                        <TextField2 label={e.label} value={stateValue} placeholder={e.help_text} format={e.format_validation} inputProps={{ onChange: event => onChange(event, e.id, e) }} isInValid={isInValid} errorMessage={errorMessage} h={'44px'} />
                      </React.Fragment>
                    );
                }
              })
            }
            
            <Flex w={'100%'} justifyContent={'space-between'} gap={'16px'}>
              <FormControl w={['40%', '40%', '60%']} >
                <Checkbox
                  type="checkbox"
                  name="checkbox"
                  id="checkbox" isChecked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}
                  sx={{
                    "& .chakra-checkbox__control": {
                      borderRadius: "4px",
                      height: "16px",
                      width: "16px",
                      borderWidth: "1px",
                      bg: BUTTON_BG
                    }
                  }}
                >
                  <Text fontSize={TEXT_FONT_SIZE} fontWeight={TEXT_FONT_WEIGHT}>Keep me logged for 14 days</Text>
                </Checkbox>
              </FormControl>
              <Flex justifyContent={'center'} alignItems={'center'} w={['60%', '60%', '40%']} >
                <Link href={'/client/forgot_pass'}>
                  <Text fontSize={TAB_SUB_HEADING_FONT_SIZE} fontWeight={LABEL_TEXT_FONT_WEIGHT} textAlign={['start', 'end']}>Forgot Password?</Text>
                </Link>
              </Flex>
            </Flex>
            <ButtonField2 textValue={"Sign In"} w={"100%"} h={"40px"} />
          </Flex>
        </form>
        <Flex flexDir={'column'} gap={'24px'} justifyContent={'center'} alignItems={'center'}>
          <Flex flexDir={'row'} w={'100%'} justifyContent={'space-between'}>
            <Flex w={'45%'} flexDir={'column'} mt={'11px'} borderTopWidth={'1px'} borderColor={FLEX_BORDER_COLOR}></Flex>
            <Text fontSize={TEXT_FONT_SIZE} fontWeight={TEXT_FONT_WEIGHT}>or</Text>
            <Flex w={'45%'} flexDir={'column'} mt={'11px'} borderTopWidth={'1px'} borderColor={FLEX_BORDER_COLOR}></Flex>
          </Flex>
          <Button w={'100%'} h={'40px'} borderWidth={'1px'} borderColor={FILE_BORDER_COLOR} borderRadius={'4px'} bg={BUTTON_BG} gap={'5px'} >
            <Text color={HELP_TEXT_COLOR} fontSize={TEXT_FONT_SIZE} fontWeight={LABEL_TEXT_FONT_WEIGHT}>Sign In</Text>
            <Text color={SINGPASS_TEXT_COLOR} fontSize={'18px'}>s<Text as={'span'} color={SINGPASS_SUB_TEXT_COLOR}>i</Text>ngpass</Text>
          </Button>
        </Flex>
      </Flex>

      <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'} h={'32px'}>
        <Text fontSize={TEXT_FONT_SIZE} fontWeight={TEXT_FONT_WEIGHT}>Don’t have an account?</Text>
        <Link href={'/client/signup'}>
          <Text fontSize={TEXT_FONT_SIZE} fontWeight={LABEL_TEXT_FONT_WEIGHT} >Sign Up</Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default LoginPage2 */