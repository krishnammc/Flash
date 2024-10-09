import { DueDiligenceFormField } from "@/lib/interfaces/incorporation/due_diligence_form/interfaces";

export const TransactionInfoAnswerData:Record<string, string | number | number[] | string[]> = {
  are_you_a_listed_company:"one",
  any_of_the_directors_or_shareholders_are_acting_on_nominee_capacity:"one",
  shareholding_percentage:"55",
  ownership_structure_of_the_company:"cat",
  is_it_a_cash_intensive_business:"one",
  are_you_directors_shareholders_are_politically_exposed_person:"one",
  financial_statement_prepared:"2024-08-15",
  financial_year_end_date:"2024-08-10",
  any_transactions_carried_out_or_to_be_carried_out_in_future_on_behalf_of_anonymous_party:"one",
  have_you_received_or_transferred_any_funds_without_the_provisions_of_underlying_services_or_transactions:"one",
  what_is_the_operation_plan_for_the_entity:"cat",
  does_the_business_have_physical_presence_in_singapore:"one",

}

export const TransactionInfoFormData:DueDiligenceFormField = {
  page_heading:"Transaction Info",
  page_heading_sub_info:"Please answer the following questions to help us understand your business better",
  page_values:[
    {
      section_heading: "Other Information",
      section_values:[
        {
          id: "are_you_a_listed_company",
          type: "RADIO",
          label: "Are you a Listed Company?",
          value:"",
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
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "any_of_the_directors_or_shareholders_are_acting_on_nominee_capacity",
          type: "RADIO",
          label: "Any of the directors or shareholders are acting on nominee capacity",
          value:"",
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
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "shareholding_percentage ",
          type: "TEXT",
          label: "Shareholding Percentage ",
          value:"",
          values: [],
          help_text: "Enter shareholding percentage",
          is_required: false,
          label_tooltip: "",
          error_message: "The Text Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NUMBER",
          limit: ""
        },
        {
          id: "ownership_structure_of_the_company",
          type: "TEXTAREA",
          label: "Ownership Structure of The Company",
          value:"",
          values: [],
          help_text: "Enter here",
          is_required: true,
          label_tooltip: "",
          error_message: "The Textarea Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "is_it_a_cash_intensive_business",
          type: "RADIO",
          label: "Is it a cash intensive business?",
          value:"",
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
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "business_operating_model",
          type: "FILE",
          label: "Business Operating Model (Chart Form)",
          value:"",
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
          id: "are_you_directors_shareholders_are_politically_exposed_person",
          type: "RADIO",
          label: "Are you/directors/shareholders are politically exposed person",
          value:"",
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
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "financial_statement_prepared",
          type: "DATE",
          label: "Financial Statement Prepared",
          value:"",
          values: [],
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Date Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "financial_year_end_date",
          type: "DATE",
          label: "Financial  Year End Date",
          value:"",
          values: [],
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Date Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "any_transactions_carried_out_or_to_be_carried_out_in_future_on_behalf_of_anonymous_party",
          type: "RADIO",
          label: "Any transactions carried out or to be carried out in future on behalf of anonymous party? ",
          value:"",
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
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "have_you_received_or_transferred_any_funds_without_the_provisions_of_underlying_services_or_transactions",
          type: "RADIO",
          label: "Have you received or transferred any funds without the provisions of underlying services or transactions?",
          value:"",
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
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        },
        {
          id: "what_is_the_operation_plan_for_the_entity",
          type: "TEXTAREA",
          label: "What is the operation plan for the entity? If existing company, what is the current operation?",
          value:"",
          values: [],
          help_text: "Enter here",
          is_required: true,
          label_tooltip: "",
          error_message: "The Textarea Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "does_the_business_have_physical_presence_in_singapore",
          type: "RADIO",
          label: "Does the business have physical presence in Singapore? ",
          value:"",
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
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Radio Field is Empty",
          format_error_message: "Format Error Message",
          format_validation:"NONE",
          limit: ""
        }
  
      ]
    }
  ]
}

