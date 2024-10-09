import { BusinessInfoListDataValues, DueDiligenceFormField } from "@/lib/interfaces/incorporation/due_diligence_form/interfaces";


export const BusinessInfoAnswerData:Record<string, string | number | number[] | string[]> = {
  name_of_entity_or_name_of_proposed_entity:"Cat",
  trading_names:"Cat",
  unique_entity_number:"12345",
  country_or_proposed_country:"one",
  contact_number:"12345",
  email:"cat@gmail.com",
  mostly_transacted_country:"one",
  nature_of_business:"Cat",
  registered_address:"Nellai",
  address_of_principal_place:"Nellai"
}

export const BusinessInfoListData:BusinessInfoListDataValues[] =[
  {
    id:"Company ABC-1",
    name_of_entity_or_name_of_proposed_entity: "Company ABC-1",
    trading_names: "Customer/Client",
    unique_entity_number: "123456789A",
    country_or_proposed_country: "Singapore",
    contact_number: "+65 3817 2812",
    email: "company.abc@gmail.com",
    mostly_transacted_country: "Singapore",
    nature_of_business: "Membership",
    registered_address: "ATM, Ang Mo Kio Avenue 8 (UOB) 710A Ang Mo Kio Avenue 8 #01-2625",
    address_of_principal_place: "ATM, Ang Mo Kio Avenue 8 (UOB) 710A Ang Mo Kio Avenue 8 #01-2625"
  }
]

const BusinessInfoFormData:DueDiligenceFormField = {
  page_heading:"Business Info",
  page_heading_sub_info:"You should obtain information on the customer/client (individual) who is requesting your service. You should also obtain information on the agent (individual or entity) who acts on behalf of the customer/client (business entity) and on any connected party who is a natural person having executive authority in the legal person or arrangement (e.g.: Directors, Managing Directors, Partners, Chief Executive Officers etc.).",
  page_values:[
    {
      section_heading: "Add Business",
      section_values: [
        {
          id: "name_of_entity_or_name_of_proposed_entity",
          type: "FULL_TEXT",
          label: "Name of Entity or Name of Proposed Entity",
          value: "",
          values: [],
          help_text: "Enter name of entity",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "trading_names",
          type: "TEXT",
          label: "Trading Names",
          value: "",
          values: [],
          help_text: "Enter a name ",
          is_required: false,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "unique_entity_number",
          type: "TEXT",
          label: "Unique Entity Number (UEN)",
          value: "",
          values: [],
          help_text: "Enter entity number",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NUMBER",
          limit: ""
        },
        {
          id: "country_or_proposed_country",
          type: "SELECT",
          label: "Country or Proposed Country*",
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
          help_text: "Select country",
          is_required: true,
          label_tooltip: "",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "contact_number",
          type: "TEXT",
          label: "Contact Number",
          value: "",
          values: [],
          help_text: "+65 1234567890",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NUMBER",
          limit: ""
        },
        {
          id: "email",
          type: "TEXT",
          label: "Email",
          value: "",
          values: [],
          help_text: "Enter your email",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "EMAIL",
          limit: ""
        },
        {
          id: "mostly_transacted_country",
          type: "SELECT",
          label: "Mostly Transacted Country",
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
          help_text: "Select country",
          is_required: true,
          label_tooltip: "",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "nature_of_business",
          type: "TEXTAREA",
          label: "Nature of Business",
          value: "",
          values: [],
          help_text: "Enter nature of business",
          is_required: true,
          label_tooltip: "",
          error_message: "The Textarea Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "registered_address",
          type: "TEXTAREA",
          label: "Registered Address",
          value: "",
          values: [],
          help_text: "Enter an address",
          is_required: true,
          label_tooltip: "",
          error_message: "The Textarea Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "address_of_principal_place",
          type: "TEXTAREA",
          label: "Address of Principal Place",
          value: "",
          values: [],
          help_text: "Enter address of principla place",
          is_required: true,
          label_tooltip: "",
          error_message: "The Textarea Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        }
      ]
    }
  ]
}
export default BusinessInfoFormData;
