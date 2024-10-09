import { RequirementFormField } from "@/lib/interfaces/incorporation/requirement_form/interfaces";

export const companyDetailsAnswerData:Record<string, string | number | number[] | string[]> = {
  company_existence:"one",
  company_type:"one",
  propose_company_name1:"Company ABC",
  suffix1:"one",
  propose_company_name2:"Company DEF",
  suffix2:"one",
  company_name:"Company ABC",
  uen:"12345ABC",
  upload_business_file:"",
  tips_for_company_name:"",
  checkbox:["one"],
  financial_year:"2024-08-15",
  financial_year_period:"one",
  reasons_for_applying_for_a_financial_year_of_longer_than_18_months:["one","two"],
  primary_activity:"one",
  description1:"ABCDE",
  secondary_activity:"one",
  description2:"QWER"
}


export const companyDetailsFormData:RequirementFormField = {
  page_heading:"About Your Business",
  page_heading_sub_info:"",
  page_values:[
    {
      section_heading:"Company Info",
      section_values:[
        {
          id: 'company_existence',
          type: 'RADIO',
          label: 'Company Existence',
          value: "",
          values: [
            {
              id: 'one',
              value: 'New Company'
            },
            {
              id: 'two',
              value: 'Existing Company'
            }
          ],
          table_values: [],
          help_text: '',
          is_required: true,
          label_tooltip:"",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: 'company_type',
          type: 'SELECT',
          label: 'Company Type',
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
          help_text: 'Insert company name here ',
          is_required: true,
          label_tooltip:"",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: 'propose_company_name1',
          type: 'PROPOSE_COMPANY_TEXT',
          label: 'Propose Company Name 1',
          value: "",
          values: [],
          table_values: [],
          help_text: 'Provide Your Company Name Here',
          is_required: true,
          label_tooltip:"",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_WITH_BUTTON",
          limit: ""
        },
        {
          id: "suffix1",
          type: "PROPOSE_COMPANY_SELECT",
          label: "Suffix",
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
          help_text: "Insert suffix company here",
          is_required: true,
          label_tooltip:"",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: 'propose_company_name2',
          type: 'PROPOSE_COMPANY_TEXT',
          label: 'Propose Company Name 2',
          value: "",
          values: [],
          table_values: [],
          help_text: 'Provide Your Company Name Here',
          is_required: true,
          label_tooltip:"",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_WITH_BUTTON",
          limit: ""
        },
        {
          id: "suffix2",
          type: "PROPOSE_COMPANY_SELECT",
          label: "Suffix",
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
          help_text: "Insert suffix company here",
          is_required: true,
          label_tooltip:"",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "company_name",
          type: "TEXT",
          label: "Company Name",
          value: "",
          values: [],
          table_values: [],
          help_text: "Insert Company Name Here",
          is_required: true,
          label_tooltip:"",
          error_message: "The Text Field is Empty ",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "uen",
          type: "TEXT",
          label: "UEN",
          value: "",
          values: [],
          table_values: [],
          help_text: "Insert UEN here",
          is_required: true,
          label_tooltip:"",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NUMBER",
          limit: ""
        },
        {
          id: "upload_business_file",
          type: "FILE",
          label: "Upload Business File",
          value: "",
          values: [],
          table_values: [],
          help_text: "Click or drag file to this area to upload",
          is_required: true,
          label_tooltip:"",
          error_message: "The File Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "tips_for_company_name",
          type: "LABEL_TEXT",
          label: "",
          value: "",
          values: [],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip:"",
          error_message: "",
          format_error_message: "",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: 'checkbox',
          type: 'CHECKBOX',
          label: "",
          value: "",
          values: [
            {
              id: 'one',
              value: 'Company has obtained approval from the Registrar to register as a company without the addition of the word "Limited" or "Berhad" to its name'
            },
            {
              id: 'two',
              value: 'your name application will be used to apply for Amalgamation'
            }
          ],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip:"",
          error_message: "The CheckBox Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: 'financial_year',
          type: 'FINANCIAL_DATE',
          label: "Financial Year End Date",
          value: "",
          values: [],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip:"",
          error_message: "The Date Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        }, 
        {
          id: "financial_year_period",
          type: "FINANCIAL_SELECT",
          label: "Financial Year Period",
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
          help_text: "Choose Year Period",
          is_required: false,
          label_tooltip:"",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },     
        {
          id: 'reasons_for_applying_for_a_financial_year_of_longer_than_18_months',
          type: 'CHECKBOX',
          label: 'Reasons for applying for a financial year of longer than 18 months',
          value: "",
          values: [
            {
              id: 'one',
              value: 'Company will commence trading much later after date of incorporation'
            },
            {
              id: 'two',
              value: 'To coincide with the FYE of parent company / related entities'
            },
            {
              id: 'three',
              value: 'To choose a FYE that is widely used'
            },
            {
              id: 'four',
              value: 'To have more time to prepared for Annual General Meeting (AGM)'
            }
          ],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip:"",
          error_message: "The CheckBox Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        }
      ]
    },
    {
      section_heading:"Company Activity",
      section_values:[
        {
          id: 'primary_activity',
          type: 'SELECT',
          label: "Primary Activity",
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
          help_text: "Insert company name here",
          is_required: true,
          label_tooltip:"",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: 'description1',
          type: 'TEXTAREA',
          label: 'Description',
          value: "",
          values: [],
          table_values: [],
          help_text: "This is a placeholder for text area",
          is_required: false,
          label_tooltip:"",
          error_message: "The TextArea Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: 'secondary_activity',
          type: 'SELECT',
          label: 'Secondary Activity',
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
          help_text: "Insert company name here",
          is_required: true,
          label_tooltip:"",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: 'description2',
          type: 'TEXTAREA',
          label: 'Description',
          value: "",
          values: [],
          table_values: [],
          help_text: "This is a placeholder for text area",
          is_required: false,
          label_tooltip:"",
          error_message: "The TextArea Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        } 
      ]
    }
  ]
}
