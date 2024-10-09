export type DynamicInputFieldType = 'TEXT'|'FULL_TEXT'|"STATIC_TEXT"| 'STATIC_TEXT_WITH_BUTTON' | 'TEXTAREA' | 'SELECT' | 'CHECKBOX'  | 'RADIO' | 'PROPOSE_COMPANY_TEXT' | 'PROPOSE_COMPANY_SELECT' | 'PHONE_NUMBER_SELECT' | "PHONE_NUMBER_TEXT" | 'LABEL_TEXT' | 'FINANCIAL_DATE' | 'FINANCIAL_SELECT' | 'DATE' | 'TABLE'|'SUB_TABLE' | 'PHONE_NUMBER' | 'FILE' | 'FETCH_USER_DATA'|'DBL_TEXT' | 'DBL_SELECT';

export type FieldValidationType = 'TEXT_ONLY' | 'TEXT_WITH_ALLOWED_SPECIAL' |'TEXT_WITH_BUTTON'  | 'EMAIL' | 'NUMBER' | 'NUMBER_WITH_LIMIT' | 'NONE' | 'PASSWORD' | null

export type Answer = {
  id: string,
  answer:  string[] | string |  number | number[],
}

export interface shareCapitalListDataValues {
  id:string,
  name:string,
  currency:string,
  shares_payable:string,
  sub_class:string,
  method_of_allotment:string,
  attachment:string,
  data:shareHolderListTableDataValues[]
}

export interface officerShareHolderListDataValues {
  name:string,
  nick_name:string,
  identification_number_uen:string,
  position:string,
  identification_type:string
}

export interface shareHolderListDataValues {
  section_id:string,
  section_label:string,
  section_values:shareHolderListDataSectionValues[]
}

export interface shareHolderListDataSectionValues {
  id:string,
  name:string,
  identification_number_uen:string,
  currency:string,
  shares_held_in_trust:string,
  name_in_trust:string,
  data:shareHolderListTableDataValues[]
}

export interface shareHolderListTableDataValues {
  id:string,
  label:string,
  values:{id:string,label:string,value:string}[]
}

export interface RequirementFormField {
  page_heading:string,
  page_heading_sub_info:string,
  page_values:RequirementFormPageValues[]
}

export interface RequirementFormPageValues {
  section_heading:string,
  section_values:RequirementFormSectionValues[]
} 
export interface RequirementFormSectionValues {
  id:string,
  type:DynamicInputFieldType,
  label:string,
  value: string | number,
  values:{id:string,value:string}[],
  table_values:RequirementFormTableValues[],
  help_text:string,
  is_required:boolean,
  label_tooltip:string,
  error_message: string,
  format_error_message: string,
  format_validation: FieldValidationType,
  limit:string
}

export interface RequirementFormTableValues {
  id:string,
  values: string,
  help_text:string,
}[]