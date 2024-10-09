import { RequirementFormField } from "@/lib/interfaces/incorporation/requirement_form/interfaces";

export const registeredOfficeAnswerData: Record<string, string | number | number[] | string[]> = {
  company_name: "Cat",
  proposal_name_1: "Cat Company 1",
  proposal_name_2: "Cat Company 2",
  postal_code: "600 001",
  block_or_house_number: "",
  street_name: "",
  level: "10",
  unit: "5",
  building_or_state_name: "cat street",
  working_hours: "one",
  number_of_hours: "one",
  select: "one",
  constitutions: "one",
  type_of_model_constitutions: "one"
}


export const registeredOfficeFormData: RequirementFormField = {
  page_heading: "Registered Office",
  page_heading_sub_info: "",
  page_values: [
    {
      section_heading: "Company Info",
      section_values: [
        {
          id: "company_name",
          type: "STATIC_TEXT",
          label: "Company Name",
          value: "Public Company Limited by Shares",
          values: [],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "",
          format_error_message: "",
          format_validation: null,
          limit: ""
        },
        {
          id: "proposal_name_1",
          type: "STATIC_TEXT",
          label: "Proposal Name 1",
          value: "Qatar Airlines",
          values: [],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "",
          format_error_message: "",
          format_validation: null,
          limit: ""
        },
        {
          id: "proposal_name_2",
          type: "STATIC_TEXT",
          label: "Proposal Name 2",
          value: "New Qatar Airlines",
          values: [],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "",
          format_error_message: "",
          format_validation: null,
          limit: ""
        }
      ]
    },
    {
      section_heading: "Registered Office Address",
      section_values: [
        {
          id: "postal_code",
          type: "FULL_TEXT",
          label: "Postal Code",
          value: "",
          values: [],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NUMBER",
          limit: ""
        },
        {
          id: "block_or_house_number",
          type: "STATIC_TEXT",
          label: "Block/House Number",
          value: "208",
          values: [],
          table_values: [],
          help_text: "",
          is_required: true,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: null,
          limit: ""
        },
        {
          id: "street_name",
          type: "STATIC_TEXT",
          label: "Street Name",
          value: "SEA Avenue",
          values: [],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: null,
          limit: ""
        },
        {
          id: "level",
          type: "TEXT",
          label: "Level",
          value: "",
          values: [],
          table_values: [],
          help_text: "Enter level",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NUMBER",
          limit: ""
        },
        {
          id: "unit",
          type: "TEXT",
          label: "Unit",
          value: "",
          values: [],
          table_values: [],
          help_text: "Enter Unit",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NUMBER",
          limit: ""
        },
        {
          id: "building_or_state_name",
          type: "FULL_TEXT",
          label: "Building/Estate Name",
          value: "",
          values: [],
          table_values: [],
          help_text: "Enter building/estate name",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_WITH_ALLOWED_SPECIAL",
          limit: ""
        },
        {
          id: "working_hours",
          type: "RADIO",
          label: "Working Hours",
          value: "",
          values: [
            {
              id: "one",
              value: "At least 5 hours during ordinary business hours on each business day"
            },
            {
              id: "two",
              value: "At least 3 hours but less than 5 hours during ordinary business hours on each business day"
            }
          ],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "number_of_hours",
          type: "SELECT",
          label: "Number of Hours",
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
          table_values: [],
          help_text: "Enter level",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "select",
          type: "SELECT",
          label: "",
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
          table_values: [],
          help_text: "Select option",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "constitutions",
          type: "RADIO",
          label: "Constitutions",
          value: "",
          values: [
            {
              id: "one",
              value: "Use model constitution"
            },
            {
              id: "two",
              value: "Attached Customized Constitution"
            }
          ],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "type_of_model_constitutions",
          type: "RADIO",
          label: "Type of Model Constitutions",
          value: "",
          values: [
            {
              id: "one",
              value: "Adopt the constitution in force at the time of adoption"
            },
            {
              id: "two",
              value: "Adopt the constitution which may be in force for time to time"
            }
          ],
          table_values: [],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        }
      ]
    }
  ]
}