export type DynamicInputFieldType = 'TEXT' | 'RADIO' | 'SELECT' | 'TEXTAREA' | 'CHECKBOX' | 'DATE' | 'FILE';
export type FieldValidationType = "PASSWORD" |"TEXT_ONLY"| 'EMAIL' |"NONE" | "NUMBER" | "CONFIRM_PASSWORD";

export interface LoginPageLabelDataValues {
  id: string,
  type: DynamicInputFieldType,
  label: string,
  help_text: string,
  error_message: string,
  format_error_message: string,
  format_validation: FieldValidationType
}

export interface SignUpPageLabelDataValues {
  id: string,
  type: DynamicInputFieldType,
  label: string,
  values:{id:string,value:string}[]
  help_text: string,
  error_message: string,
  format_error_message: string,
  format_validation: FieldValidationType
}
export interface ForgotPasswordPageLabelDataValues {
  id: string,
  type: DynamicInputFieldType,
  label: string,
  values:{id:string,value:string}[],
  help_text: string,
  error_message: string,
  format_error_message: string,
  format_validation: FieldValidationType
}
export interface OTPValidationPageLabelDataValues {
  id: string,
  type: DynamicInputFieldType,
  label: string,
  error_message: string,
  format_error_message: string,
  format_validation: FieldValidationType
}