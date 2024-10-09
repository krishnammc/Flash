"use client"
import React, { useEffect, useState } from 'react'
import { BUTTON_BG, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, TEXT_FONT_SIZE } from '@/lib/app/app_constants';
import { Flex, Heading, SimpleGrid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { validateField } from '@/lib/utlils/utill_methods';
import TextField from '../../components/text_field';
import ButtonField from '../../components/button_field';
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import { SignUpPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';

export const SignUpAgentIdentifficationInfoLabelData:SignUpPageLabelDataValues[] = [
  {
    id: 'are_you_qualified_individual',
    type: 'RADIO',
    label: 'Are you Qualified Individual?',
    help_text: '',
    error_message: 'Please Select Radio Field',
    format_error_message: 'Formt Error Message',
    format_validation: "NONE",
    values: [
      {
        id: 'one',
        value: 'Yes'
      },
      {
        id: 'two',
        value: 'No'
      }
    ]
  },
  {
    id: 'qi_number',
    type: 'TEXT',
    label: 'QI Number',
    help_text: 'Insert QI Number',
    error_message: 'Please Enter QI Number',
    format_error_message: 'Format Error Message',
    format_validation: "NUMBER",
    values: []
  },
  {
    id: 'qi_expiry_date',
    type: 'DATE',
    label: 'QI Expiry Date',
    help_text: 'Select a date',
    error_message: 'Please Select Date',
    format_error_message: 'Format Error Message',
    format_validation: "NONE",
    values: []
  },
  {
    id: 'qi_certificate',
    type: 'FILE',
    label: 'QI Certificate',
    help_text: 'Click or drag file to this area to upload',
    error_message: 'Please Upload File',
    format_error_message: 'Invalid File Format',
    format_validation: "NONE",
    values: []
  },
  {
    id: 'are_you_compliance_officer',
    type: 'RADIO',
    label: 'Are you Compliance Officer?',
    help_text: '',
    error_message: 'Please Select Radio Field',
    format_error_message: 'Format Error Message',
    format_validation: "NONE",
    values: []
  }
]

export interface BasicInfoProps {
  onSubmit:() => void
}

const AgentIdentificationInfoForm = ({onSubmit}:BasicInfoProps) => {

  const [data, setData] = useState<Array<{ id: string; type: string; value: string | string[] | number; error: 'EMPTY' | 'FORMAT' | null }>>(
    SignUpAgentIdentifficationInfoLabelData.map((field: SignUpPageLabelDataValues) => ({
      id: field.id,
      type: field.type,
      value: field.type === 'CHECKBOX' ? [] : '',
      error: null,
    }))
  );
  console.log(data)

  const [isSubmitting, setSubmitting] = useState(false);
  const [store, setStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Agent Identification Info Form Values');

  useEffect(() => {
    const answerData = store ?? {};
    const newData = SignUpAgentIdentifficationInfoLabelData.map((field) => {
      const answer = answerData[field.id];
      return {
        id: field.id,
        type: field.type,
        value: answer ?? (field.type === 'CHECKBOX' ? [] : ''),
        error: null,
      };
    });
    setData(newData);
  }, [store]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: SignUpPageLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    if (index < 0) return;

    let value: string | number = event.target.value;
    const validateResult = validateField(value.toString(), field.format_validation)
    tempData[index].value = value;

    tempData[index].error = (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" : null)
    setData(tempData)
  }

  const onApi = () => {
    setSubmitting(true);
    const result = data.reduce((acc, item) => {
      acc[item.id] = item.value;
      return acc;
    }, {} as Record<string, string | string[] | number>);
    setStorage(result);
    setSubmitting(false);
  };

  const submitValidate = () => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    tempData.forEach((input) => {
      let value = SignUpAgentIdentifficationInfoLabelData.filter((e) => e.id == input.id);
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

  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitValidate()) return;
    console.log("Answer Data :", data);
    onSubmit();
    onApi();
  }

  return (
    <>
      <Flex flexDir={'column'} gap={['4px', '4px', '16px']} color={BUTTON_BG}>
        <Heading fontSize={HEADING_FONT_SIZE} fontWeight={LABEL_TEXT_FONT_WEIGHT}>Let’s create your account</Heading>
        <Text fontSize={SUB_HEADING_FONT_SIZE} fontWeight={TEXT_FONT_WEIGHT}>Enter your identity information</Text>
      </Flex>

      <form onSubmit={handleSubmit}>
        {/* Sign Up Page Input Field */}
        <SimpleGrid columns={2} w={'100%'} rowGap={'16px'} columnGap={'16px'}>
        {
          SignUpAgentIdentifficationInfoLabelData.map((e: SignUpPageLabelDataValues) => {
            let field = data.find((val) => val.id == e.id);
            if (!field) return null;
            let stateValue = field.value!;
            const errorType = field.error ?? null;
            const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
            const isInValid = (errorType != null);

            switch (e.type) {
              case "TEXT":
                return (
                  <GridItem colSpan={[2, 2, 1]} key={e.id}>
                    <TextField label={e.label} value={stateValue} placeholder={e.help_text} format={e.format_validation} inputProps={{ onChange: event => onChange(event, e.id, e) }} isInValid={isInValid} errorMessage={errorMessage} h={'44px'} values={[]} />
                  </GridItem>
                );
            }
          })
        }
        </SimpleGrid>

        {/* Verification Section */}
        <Flex mt = {'24px'}>
          <ButtonField textValue={'Continue'} />
        </Flex>
      </form>

      <Flex justifyContent={'center'} alignItems={'center'} mt={'-16px'} gap={'10px'} h={'32px'}>
        <Text fontSize={TEXT_FONT_SIZE} fontWeight={TEXT_FONT_WEIGHT}> Have an account?</Text>
        <Link href='/client/login'>
          <Text fontSize={TEXT_FONT_SIZE} fontWeight={LABEL_TEXT_FONT_WEIGHT}>Sign In</Text>
        </Link>
      </Flex>
    </>
  );
}

export default AgentIdentificationInfoForm
