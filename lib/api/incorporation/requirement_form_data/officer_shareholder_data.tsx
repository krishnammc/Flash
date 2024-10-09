import { officerShareHolderListDataValues, RequirementFormField } from "@/lib/interfaces/incorporation/requirement_form/interfaces";

export const officerShareHolderAnswerData:Record<string, string | number | number[] | string[]> = {
  name:"Cat",
  position:"one",
  category:"one",
  identification_type:"one",
  identification_number_with_button:"12345",
  identification_number:"1234",
  nationality:"one",
  name_as_per_document:"Cat",
  address_type:"one",
  address:"Tirunelveli",
  alternate_address:"one",
  date_of_birth:"2003-11-14",
  email:"cat@gmail.com",
  phone_number:"987654321",
  upload_passport:"",
  in_principle_approval_obtained_from_other_authorities:"one",
  referral_authority:"one",
  attachment:""
}

export const officerShareHolderListData:officerShareHolderListDataValues[] =[ 
  {
    name:"Joe Allen",
    nick_name:"Table Data",
    identification_number_uen:"0123456789A",
    position:"Director and 2+ position",
    identification_type:"NRIC (Citizen)"
  },
  {
    name:"Emily Helen",
    nick_name:"Table Data",
    identification_number_uen:"0123456789A",
    position:"Secretary",
    identification_type:"Passport/Others"
  },
  {
    name:"Anchovy Setev",
    nick_name:"Table Data",
    identification_number_uen:"0123456789A",
    position:"CEO",
    identification_type:"NRIC (Permanent Resident)"
  }
]

export const officerShareholderFormData:RequirementFormField = {
  page_heading:"Officer/ Shareholder Info",
  page_heading_sub_info:"Add the officer/shareholder information",
  page_values:[
    {
      section_heading:"Add Member",
      section_values:[
        {
          id: "name",
          type: "TEXT",
          label: "Name",
          value: "",
          values: [],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "position",
          type: "SELECT",
          label: "Position",
          value: "",
          values: [
            {
              id: 'one',
              value: 'Type 1'
            },
            {
              id: 'two',
              value: 'Type 2'
            }
          ],
          table_values: [],
          help_text: "Select",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "category",
          type: "RADIO",
          label: "Category",
          value: "",
          values: [
            {
              id: 'one',
              value: 'Corporate'
            },
            {
              id: 'two',
              value: 'Individual'
            }
          ],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
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
              id: 'one',
              value: 'NRI (Citizen)'
            },
            {
              id: 'two',
              value: 'Passport/Others'
            }
          ],
          table_values: [],
          help_text: "Select",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "identification_number_with_button",
          type: "TEXT",
          label: "Identification Number",
          value: "",
          values: [],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_WITH_BUTTON",
          limit: ""
        },
        {
          id: "identification_number",
          type: "TEXT",
          label: "Identification Number",
          value: "",
          values: [],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NUMBER",
          limit: ""
        },
        {
          id: "nationality",
          type: "SELECT",
          label: "Nationality",
          value: "",
          values: [
            {
              id: 'one',
              value: 'Type 1'
            },
            {
              id: 'two',
              value: 'Type 2'
            }
          ],
          table_values: [],
          help_text: "Select",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "name_as_per_document",
          type: "TEXT",
          label: "Name (As per NRIC/Identification Document)",
          value: "",
          values: [],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "address_type",
          type: "RADIO",
          label: "Address Type",
          value: "",
          values: [
            {
              id: 'one',
              value: 'Local Address'
            },
            {
              id: 'two',
              value: 'Foreign Address'
            }
          ],
          table_values: [],
          label_tooltip:"",
          help_text: "",
          is_required: true,
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "address",
          type: "TEXTAREA",
          label: "Address",
          value: "",
          values: [],
          table_values: [],
          help_text: "Enter Address",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "alternate_address",
          type: "RADIO",
          label: "Provide Alternate Address",
          value: "",
          values: [
            {
              id: "one",
              value: "Yes"
            },
            {
              id: "two",
              value: "No"
            }
          ],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "date_of_birth",
          type: "DATE",
          label: "Date of Birth",
          value: "",
          values: [],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "email",
          type: "TEXT",
          label: "Email",
          value: "",
          values: [],
          table_values: [],
          help_text: "Insert Your Email",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "EMAIL",
          limit: ""
        },
        {
          id: "phone_number",
          type: "TEXT",
          label: "Phone Number",
          value: "",
          values: [
            {
              id: "one",
              value: "+65"
            },
            {
              id: "two",
              value: "+91"
            }
          ],
          table_values: [],
          help_text: "+65",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NUMBER",
          limit: ""
        },
        {
          id: "upload_passport",
          type: "FILE",
          label: "Upload Passport",
          value: "",
          values: [],
          table_values: [],
          help_text: "Drag & drop your pdf here, max 5MB",
          is_required: false,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "in_principle_approval_obtained_from_other_authorities",
          type: "RADIO",
          label: "In-Principle Approval obtained from Other Authorities",
          value: "",
          values: [
            {
              id: 'one',
              value: 'Yes'
            },
            {
              id: 'two',
              value: 'No'
            }
          ],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "referral_authority",
          type: "SELECT",
          label: "Referral Authority",
          value: "",
          values: [
            {
              id: 'one',
              value: 'Type 1'
            },
            {
              id: 'two',
              value: 'Type 2'
            }
          ],
          table_values: [],
          help_text: "Select referral authority",
          is_required: false,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "attachment",
          type: "FILE",
          label: "Attachment",
          value: "",
          values: [],
          table_values: [],
          help_text: "Drag & drop your pdf here, max 5MB",
          is_required: false,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        }
      ]
    }
  ]
}

