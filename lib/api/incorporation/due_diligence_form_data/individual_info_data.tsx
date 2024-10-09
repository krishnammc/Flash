import { DueDiligenceFormField, IndividualInfoListDataValues } from "@/lib/interfaces/incorporation/due_diligence_form/interfaces";

export const IndividualInfoAnswerData:Record<string, string | number | number[] | string[]> = {
  type_of_individual:"one",
  acting_capacity:"one",
  existing_individual:"one",
  full_name:"Cat",
  date_of_birth:"2003-11-14",
  email:"cat@gmail.com",
  phone_number:"123456",
  identification_type:"one",
  identification_number:"21312",
  identification_expiry_date:"2024-08-15",
  gender:"one",
  nationality:"one",
  regitered_address:"Nellai",
  intended_nature_and_purpose_of_business_relationship:"Cat",
  is_the_individual_a_political_exposed_person:"one",
  individual_identification:["one"],
  relationship_with_pep:"Cat",
  relationship_with_pep2:"Cat2",
  full_name_of_pep:"Cat",
  nationality_of_pep:"one",
  time_period_of_pep:"Cat",
  nature_of_prominent_public_function:"one",
  information_on_the_person_source_of_wealth:"Cat",
  information_on_the_person_source_of_funds_in_the_establishment_of_the_business_relationship:"Cat",
  any_other_info_as_necessary:"Cat"

}

export const IndividualInfoListData:IndividualInfoListDataValues[] = [ 
  {
    id:"Joe Allen" ,
    full_name: "Joe Allen",
    acting_capacity: "123456789A",
    date_of_birth: "16 July 1999",
    email: "joe.allen@gmail.com",
    phone_number: "+65 3817 2812",
    identification_type: "NRIC",
    identification_number: "123456789",
    gender: "Male",
    nationality: "Singaporean",
    registered_address: "ATM, Ang Mo Kio Avenue 8 (UOB) 710A Ang Mo Kio Avenue 8 #01-2625",
    intended_nature_and_purpose_of_business_relationship: "Business Partner",
    data:[
      {
        id: "political_exposed_person_info",
        label: "Political Exposed Person (PEP) Info"
      },
      {
        id: "enhanced_cdd_info",
        label: "Enhanced CDD Info"
      }
    ]
  }
]

export const IndividualInfoFormData:DueDiligenceFormField = {
  page_heading:"Individual  Info",
  page_heading_sub_info:"You should obtain information on the customer/client (individual) who is requesting your service. You should also obtain information on the agent (individual or entity) who acts on behalf of the customer/client (business entity) and on any connected party who is a natural person having executive authority in the legal person or arrangement (e.g.: Directors, Managing Directors, Partners, Chief Executive Officers etc.).",
  page_values:[
    {
      section_heading:"Add Individual",
      section_values:[
        {
          id: "type_of_individual",
          type: "RADIO",
          label: "Type of Individual",
          value: "",
          values: [
            {
              id: "one",
              value: "New"
            },
            {
              id: "two",
              value: "Existing"
            }
          ],
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "acting_capacity",
          type: "RADIO",
          label: "Acting Capacity",
          value: "",
          values: [
            {
              id: "one",
              value: "Customer/Client"
            },
            {
              id: "two",
              value: "Agent"
            },
            {
              id: "three",
              value: "Connected Party"
            }
          ],
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "upload_identification",
          type: "FILE",
          label: "Upload Identification",
          value: "",
          values: [],
          help_text: "Drag & drop your pdf here, max 5MB",
          is_required: false,
          label_tooltip: "",
          error_message: "The File Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "upload_proof_of_address",
          type: "FILE",
          label: "Upload Proof of Address",
          value: "",
          values: [],
          help_text: "Drag & drop your pdf here, max 5MB",
          is_required: false,
          label_tooltip: "",
          error_message: "The File Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "existing_individual",
          label: "Existing Individual",
          type: "FULL_SELECT",
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
          help_text: "Joe Alllen",
          is_required: true,
          label_tooltip: "",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
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
          format_validation:"TEXT_ONLY",
          limit: ""
        },
        {
          id: "date_of_birth",
          type: "DATE",
          label: "Date of Birth",
          value: "",
          values: [],
          help_text: "Select a date",
          is_required: true,
          label_tooltip: "",
          error_message: "The Date Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
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
          format_validation:"EMAIL",
          limit: ""
        },
        {
          id: "phone_number",
          label: "Phone Number",
          type: "TEXT",
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
          help_text: "+65",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NUMBER",
          limit: ""
        },
        {
          id: "identification_type",
          label: "Identification Type",
          type: "SELECT",
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
          help_text: "Select identification",
          is_required: true,
          label_tooltip: "",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "identification_number",
          type: "TEXT",
          label: "Identification Number",
          value: "",
          values: [],
          help_text: "Enter the identification number",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NUMBER",
          limit: ""
        },
        {
          id: "identification_expiry_date",
          type: "FULL_DATE",
          label: "Identification Expiry Date",
          value: "",
          values: [],
          help_text: "Select a date",
          is_required: true,
          label_tooltip: "",
          error_message: "The Date Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "gender",
          type: "SELECT",
          label: "Gender",
          value: "",
          values: [
            {
              id: 'one',
              value: 'Male'
            },
            {
              id: 'two',
              value: 'Female'
            }
          ],
          help_text: "Select gender",
          is_required: true,
          label_tooltip: "",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
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
          help_text: "Select nationality",
          is_required: true,
          label_tooltip: "",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "regitered_address",
          label: "Registered Address",
          type: "TEXTAREA",
          value: "",
          values: [],
          help_text: "Enter your address",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "intended_nature_and_purpose_of_business_relationship",
          label: "Intended Nature and Purpose of Business Relationship",
          type: "TEXTAREA",
          value: "",
          values: [],
          help_text: "Enter intended nature and purpose of business relationship",
          is_required: false,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "is_the_individual_a_political_exposed_person",
          type: "RADIO",
          label: "Is The Individual a Political Exposed Person (PEP)?",
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
          help_text: "",
          is_required: false,
          label_tooltip: "Question",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        }
      ]
    },
    {
      section_heading: "Political Exposed Person (PEP) Info",
      section_values: [
        {
          id: "individual_identification",
          type: "CHECKBOX",
          label: "Individual Identification",
          value: "",
          values: [
            {
              id: "one",
              value: "Singapore Political Exposed Person (PEP)"
            },
            {
              id: "two",
              value: "International Organisation PEP"
            },
            {
              id: "three",
              value: "Close Associate of PEP"
            },
            {
              id: "four",
              value: "Foreign PEP"
            },
            {
              id: "five",
              value: "Family Member of PEP"
            }
          ],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "relationship_with_pep",
          type: "TEXT",
          label: "Relationship with PEP",
          value: "",
          values: [],
          help_text: "Enter relationship",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_ONLY",
          limit: ""
        },
        {
          id: "relationship_with_pep2",
          type: "TEXT",
          label: "Relationship with PEP",
          value: "",
          values: [], 
          help_text: "Enter relationship",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_ONLY",
          limit: ""
        },
        {
          id: "full_name_of_pep",
          type: "TEXT",
          label: "Full Name of PEP",
          value: "",
          values: [],
          help_text: "Enter your full name",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_ONLY",
          limit: ""
        },
        {
          id: "nationality_of_pep",
          type: "SELECT",
          label: "Nationality of PEP",
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
          help_text: "Select nationality",
          is_required: true,
          label_tooltip: "",
          error_message: "The Select Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "time_period_of_pep",
          type: "FULL_TEXT",
          label: "Time Period of PEP",
          value: "",
          values: [],
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "nature_of_prominent_public_function",
          type: "TEXTAREA",
          label: "Nature of Prominent Public Function",
          value: "",
          values: [],
          help_text: "Enter your address",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        }
      ]
    },
    {
      section_heading: "Enhanced CDD Info",
      section_values: [
        {
          id: "information_on_the_person_source_of_wealth",
          type: "TEXTAREA",
          label: "Information on the Person' Source of Wealth",
          value: "",
          values: [],
          help_text: "Enter here",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "information_on_the_person_source_of_funds_in_the_establishment_of_the_business_relationship",
          type: "TEXTAREA",
          label: "Information on the Person’ Source of Funds in The Establishment of The Business Relationship",
          value: "",
          values: [],
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "any_other_info_as_necessary",
          type: "TEXTAREA",
          label: "Any Other Info as Necessary",
          value: "",
          values: [],
          help_text: "Enter here",
          is_required: true,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        }
      ],
    }
  ]
}