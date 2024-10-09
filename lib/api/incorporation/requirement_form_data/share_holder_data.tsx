import { RequirementFormField, shareCapitalListDataValues, shareHolderListDataValues } from "@/lib/interfaces/incorporation/requirement_form/interfaces";

export const shareHolderAnswerData: Record<string, string | number | number[] | string[]> = {
  name: "cat",
  identification_number_uen: "12345",
  currency: "one",
  name_of_the_trust: "Cat",
  any_sub_class_of_shares_for_the_currency: "one",
  method_of_allotment: ["one", "four"],
  group: "one",
  group_currency: "one",
  group_name_of_the_trust: "Cat",
  group_any_sub_class_of_shares_for_the_currency: "one",
  existing_shareholder: "one"
}

export const shareHoldingTableAnswerData: Record<string, string | number | number[] | string[] | boolean> = {
  number_of_shares_ordinary:"10",
  number_of_shares_preference:"20",
  number_of_shares_others:"30",
  amount_of_issued_share_capital_ordinary:"40",
  amount_of_issued_share_capital_preference:"50",
  amount_of_issued_share_capital_others:"60",
  shares_held_in_trust_ordinary:true,
  shares_held_in_trust_preference:false,
  shares_held_in_trust_others:false,
  
}



export const shareHolderListData:shareHolderListDataValues[] = [
  {
    section_id:"list_of_shareholders",
    section_label:"List of Shareholders",
    section_values:[
      {
        id:"shareHolderListData1",
        name:"Joe Allen",
        identification_number_uen:"123456789A",
        currency:"SDG- SingaporenDollers",
        data:[
          {
            id:"number_of_shares",
            label:"Number of Share",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          },
          {
            id:"amount_of_paid_up_share_capital",
            label:"Amount of Paid Up Share Capital",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          }
        ],
        shares_held_in_trust:"",
        name_in_trust:"Joe Allen"
      },
      {
        id:"shareHolderListData2",
        name:"Emily Helen",
        identification_number_uen:"123456789A",
        currency:"SDG- SingaporenDollers",
        data:[
          {
            id:"number_of_shares",
            label:"Number of Share",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          },
          {
            id:"amount_of_paid_up_share_capital",
            label:"Amount of Paid Up Share Capital",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          }
        ],
        shares_held_in_trust:"",
        name_in_trust:""
      },
      {
        id:"shareHolderListData3",
        name:"Thiery Henry",
        identification_number_uen:"123456789A",
        currency:"",
        data:[
          {
            id:"number_of_shares",
            label:"Number of Share",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          },
          {
            id:"amount_of_paid_up_share_capital",
            label:"Amount of Paid Up Share Capital",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          }
        ],
        shares_held_in_trust:"",
        name_in_trust:""
      },
      {
        id:"shareHolderListData4",
        name:"Toni Kroos",
        identification_number_uen:"123456789A",
        currency:"",
        data:[
          {
            id:"number_of_shares",
            label:"Number of Share",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          },
          {
            id:"amount_of_paid_up_share_capital",
            label:"Amount of Paid Up Share Capital",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          }
        ],
        shares_held_in_trust:"",
        name_in_trust:""
      }
    ]
  },
  {
    section_id:"group_share_allotment",
    section_label:"Group Share Allotment",
    section_values:[
      {
        id:"group_a",
        name:"Group A",
        identification_number_uen:"",
        currency:"SDG- Singapore Dollers",
        data:[
          {
            id:"list_of_shareholders",
            label:"List of shareholders",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          },
          {
            id:"number_of_shares",
            label:"Number of Share",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          },
          {
            id:"amount_of_issued_share_capital",
            label:"Amount of Issued Share Capital",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          },
          {
            id:"amount_of_paid_up_share_capital",
            label:"Amount of Paid Up Share Capital",
            values:[
              {
                id:"ordinary",
                label:"Ordinary",
                value:"100"
              },
              {
                id:"preference",
                label:"Preference",
                value:"100"
              },
              {
                id:"others",
                label:"Others",
                value:"100"
              }
            ]
          }
        ],
        shares_held_in_trust:"",
        name_in_trust:"Joe Allen"
      }
    ]
  }
]

export const shareHolderFormData: RequirementFormField = {
  page_heading: "Shareholders Details",
  page_heading_sub_info: "Fill how much shares each members have in the company",
  page_values: [
    {
      section_heading: "Add Share Holding Details",
      section_values: [
        {
          id: "name",
          type: "STATIC_TEXT",
          label: "Name",
          value: "John Doe",
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
          id: "identification_number_uen",
          type: "STATIC_TEXT",
          label: "Identification Number/UEN",
          value: "123456789A",
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
          id: "currency",
          type: "SELECT",
          label: "Currency",
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
          help_text: "Select position",
          is_required: true,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: null,
          limit: ""
        },
        {
          id: "class_of_shares",
          type: "TABLE",
          label: "Class of Shares",
          value: "",
          values: [],
          table_values: [
            {
              id:"number_of_shares_ordinary",
              values:"",
              help_text:"100"
            },
            {
              id:"number_of_shares_preference",
              values:"",
              help_text:"100"
            },
            {
              id:"number_of_shares_others",
              values:"",
              help_text:"100"
            },
            {
              id:"amount_of_issued_share_capital_ordinary",
              values:"",
              help_text:"100"
            },
            {
              id:"amount_of_issued_share_capital_preference",
              values:"",
              help_text:"100"
            },
            {
              id:"amount_of_issued_share_capital_others",
              values:"",
              help_text:"100"
            },
            {
              id:"shares_held_in_trust_ordinary",
              values:"",
              help_text:""
            },
            {
              id:"shares_held_in_trust_preference",
              values:"",
              help_text:""
            },
            {
              id:"shares_held_in_trust_others",
              values:"",
              help_text:""
            }
          ],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: null,
          limit: ""
        },
        {
          id: "name_of_the_trust",
          type: "TEXT",
          label: "Name of The Trust",
          value: "",
          values: [],
          table_values: [],
          help_text: "Insert your name",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "any_sub_class_of_shares_for_the_currency",
          type: "RADIO",
          label: "Any Sub-Class of Shares for The Currency?",
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
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "sub_class_list",
          type: "SUB_TABLE",
          label: "Sub-class List",
          value: "",
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
      ]
    },
    {
      section_heading: "Add Group Share Allotment",
      section_values: [
        {
          id: "group",
          type: "SELECT",
          label: "Group",
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
          help_text: "Select position",
          is_required: true,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: null,
          limit: ""
        },
        {
          id: "group_currency",
          type: "SELECT",
          label: "Currency",
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
          help_text: "Select position",
          is_required: true,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: null,
          limit: ""
        },
        {
          id: "class_of_shares",
          type: "TABLE",
          label: "Class of Shares",
          value: "",
          values: [],
          table_values:  [
            {
              id:"number_of_shares_ordinary",
              values:"",
              help_text:"100"
            },
            {
              id:"number_of_shares_preference",
              values:"",
              help_text:"100"
            },
            {
              id:"number_of_shares_others",
              values:"",
              help_text:"100"
            },
            {
              id:"amount_of_issued_share_capital_ordinary",
              values:"",
              help_text:"100"
            },
            {
              id:"amount_of_issued_share_capital_preference",
              values:"",
              help_text:"100"
            },
            {
              id:"amount_of_issued_share_capital_others",
              values:"",
              help_text:"100"
            },
            {
              id:"shares_held_in_trust_ordinary",
              values:"",
              help_text:""
            },
            {
              id:"shares_held_in_trust_preference",
              values:"",
              help_text:""
            },
            {
              id:"shares_held_in_trust_others",
              values:"",
              help_text:""
            }
          ],
          help_text: "",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: null,
          limit: ""
        },
        {
          id: "group_name_of_the_trust",
          type: "TEXT",
          label: "Name of The Trust",
          value: "",
          values: [],
          table_values: [],
          help_text: "Insert your name",
          is_required: false,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "TEXT_ONLY",
          limit: ""
        },
        {
          id: "group_any_sub_class_of_shares_for_the_currency",
          type: "RADIO",
          label: "Any Sub-Class of Shares for The Currency?",
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
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: "NONE",
          limit: ""
        },
        {
          id: "sub_class_list",
          type: "SUB_TABLE",
          label: "Sub-class List",
          value: "",
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
          id: "",
          type: "STATIC_TEXT_WITH_BUTTON",
          label: "",
          value: "",
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
          id: "existing_shareholder",
          type: "SELECT",
          label: "Existing shareholder",
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
          help_text: "Select existing shareholder",
          is_required: true,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: null,
          limit: ""
        }
      ]
    }
  ]
}