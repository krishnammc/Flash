import { DueDiligenceFormField } from "@/lib/interfaces/incorporation/due_diligence_form/interfaces";

export const DeclarationAnswerData:Record<string, string | number | number[] | string[]> = {
  individual_type:"one",
  full_name:"Cat",
  identification_type:"one",
  unique_identification_number:"12345",
  signature_date:"2003-11-14"
}

export const DeclarationFormData:DueDiligenceFormField = {
  page_heading:"Customer’s/ Client’s/ Agent’s Declaration",
  page_heading_sub_info:"The person who provided the information to you can sign off against the information. I declare that the information provided in this form is true and correct.",
  page_values:[
    {
      section_heading: "",
      section_values: [
        {
          id: "individual_type",
          type: "SELECT",
          label: "Individual Type",
          value: "",
          values: [
            {
              id: "one",
              value: "Type 1"
            },
            {
              id: "two",
              value: "Type 2"
            }
          ],
          help_text: "Select individual type",
          is_required: true,
          label_tooltip: "",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "full_name",
          type: "TEXT",
          label: "Full Name",
          value: "",
          values: [],
          help_text: "Enter your full name",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "identification_type",
          type: "SELECT",
          label: "Identification Type",
          value: "",
          values: [
            {
              id: "one",
              value: "Type 1"
            },
            {
              id: "two",
              value: "Type 2"
            }
          ],
          help_text: "Select identification type",
          is_required: true,
          label_tooltip: "",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "unique_identification_number",
          type: "TEXT",
          label: "Unique Identification Number",
          value: "",
          values: [
            {
              id: "one",
              value: "Type 1"
            },
            {
              id: "two",
              value: "Type 2"
            }
          ],
          help_text: "Enter identification number",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NUMBER",
          limit: ""
        },
        {
          id: "signature_date",
          type: "DATE",
          label: "Signature Date",
          value: "",
          values: [],
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Date Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        }
      ] 
    }
  ]
}