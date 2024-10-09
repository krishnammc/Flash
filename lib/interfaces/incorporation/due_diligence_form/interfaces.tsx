export type InputFieldType = 'TEXT' | 'SELECT' | 'RADIO' |'PHONE_NUMBER'|'TEXTAREA'|'FULL_TEXTAREA'|'FULL_TEXT'|'FULL_DATE' |'FULL_SELECT'|'DATE'|'FILE'|'CHECKBOX';

export type FieldValidationType = 'TEXT_ONLY' | 'TEXT_WITH_ALLOWED_SPECIAL' |'TEXT_WITH_BUTTON'  | 'EMAIL' | 'NUMBER' | 'NUMBER_WITH_LIMIT' | 'NONE' | 'PASSWORD' | null;

export type Answer = {
  id: string,
  answer:  string[] | string |  number | number[],
}

export interface DueDiligenceFormField {
  page_heading:string,
  page_heading_sub_info:string,
  page_values:DueDiligenceFormPageValues[]
}
export interface DueDiligenceFormPageValues {
  section_heading:string,
  section_values:DueDiligenceFormSectionValues[]
} 
export interface DueDiligenceFormSectionValues {
  id:string,
  type:InputFieldType,
  label:string,
  value: string | number,
  values:{id:string,value:string}[],
  help_text:string,
  is_required:boolean,
  label_tooltip:string,
  error_message: string,
  format_error_message: string,
  format_validation: FieldValidationType,
  limit:string
}

export interface IndividualInfoListDataValues {
  id:string,
  full_name:string,
  acting_capacity:string,
  date_of_birth:string,
  email:string,
  phone_number:string,
  identification_type:string,
  identification_number:string,
  gender:string,
  nationality:string,
  registered_address:string,
  intended_nature_and_purpose_of_business_relationship:string,
  data:IndividualInfoListDropdownDataValues[]
}

export interface IndividualInfoListDropdownDataValues {
  id:string,
  label:string
}

export interface BusinessInfoListDataValues {
  id:string,
  name_of_entity_or_name_of_proposed_entity:string,
  trading_names:string,
  unique_entity_number:string,
  country_or_proposed_country:string,
  contact_number:string,
  email:string,
  mostly_transacted_country:string,
  nature_of_business:string,
  registered_address:string,
  address_of_principal_place:string
}

export interface BeneficialOwnerInfoListDataValues {
  id:string,
  full_name:string,
  date_of_birth:string,
  email:string,
  phone_number:string,
  identification_type:string,
  identification_number:string,
  identification_expiry_date:string,
  nationality:string,
  mostly_transacted_country:string,
  registered_address:string,
  data:BusinessInfoListDropdownDataValues[]
}

export interface BusinessInfoListDropdownDataValues {
  id:string,
  label:string
}
