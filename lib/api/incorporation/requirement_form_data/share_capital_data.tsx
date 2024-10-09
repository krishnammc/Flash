import { RequirementFormField, shareCapitalListDataValues } from "@/lib/interfaces/incorporation/requirement_form/interfaces";

export const shareCapitalAnswerData: Record<string, string | number | number[] | string[]> = {
  currency: "one",
  shares_payable: "one",
  any_sub_class_of_shares_for_the_currency: "one",
  method_of_allotment: ["one", "four"]
}

export const shareCapitalTableAnswerData: Record<string, string | number | number[] | string[]> = {
  number_of_shares_ordinary:"100",
  number_of_shares_preference:"200",
  number_of_shares_others:"30",
  amount_of_issued_share_capital_ordinary:"40",
  amount_of_issued_share_capital_preference:"50",
  amount_of_issued_share_capital_others:"60",
  amount_of_paid_up_share_capital_ordinary:"70",
  amount_of_paid_up_share_capital_preference:"80",
  amount_of_paid_up_share_capital_others:"90"
}

export const shareCapitalListData: shareCapitalListDataValues[] = [
  {
    id: "share_capital_info_1",
    name: "Share Capital Info 1",
    currency: "SGD - Singapore Dollar",
    shares_payable: "In Cash",
    sub_class: "No",
    method_of_allotment: "",
    attachment: "",
    data:[
      {
        id:"number_of_share",
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
  },
  {
    id: "share_capital_info_2",
    name: "Share Capital Info 2",
    currency: "SGD - Singapore Dollar",
    shares_payable: "In Cash",
    sub_class: "Yes",
    method_of_allotment: "",
    attachment: "",
    data:[
      {
        id:"number_of_share",
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
  },
  {
    id: "share_capital_info_3",
    name: "Share Capital Info 3",
    currency: "SGD - Singapore Dollar",
    shares_payable: "Otherwise In Cash",
    sub_class: "",
    method_of_allotment: "Pursuant to a contract in writing",
    attachment: "Pursuant to a contract in writing",
    data:[
      {
        id:"number_of_share",
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
  },
  {
    id: "share_capital_info_4",
    name: "Share Capital Info 4",
    currency: "SGD - Singapore Dollar",
    shares_payable: "Both",
    sub_class: "",
    method_of_allotment: "Pursuant to a contract in writing",
    attachment: "Pursuant to a contract in writing",
    data:[
      {
        id:"number_of_share",
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
  }
]

export const shareCapitalFormData: RequirementFormField = {
  page_heading: "Shares Capital Details",
  page_heading_sub_info: "Fill how much shares each members have in the company",
  page_values: [
    {
      section_heading: "Share Capital Info",
      section_values: [
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
          help_text: "Insert company name here",
          is_required: true,
          label_tooltip: "",
          error_message: "The Field is Empty",
          format_error_message: "Format Error Message",
          format_validation: null,
          limit: ""
        },
        {
          id: "shares_payable",
          type: "RADIO",
          label: "Share Payable",
          value: "",
          values: [
            {
              id: "one",
              value: "In Cash"
            },
            {
              id: "two",
              value: "Otherwise In Cash"
            },
            {
              id: "three",
              value: "Both"
            },
            {
              id: "four",
              value: "Otherwise"
            }
          ],
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
          id: "allotment_details",
          type: "TABLE",
          label: "Allotment Details",
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
              id:"amount_of_paid_up_share_capital_ordinary",
              values:"",
              help_text:"100"
            },
            {
              id:"amount_of_paid_up_share_capital_preference",
              values:"",
              help_text:"100"
            },
            {
              id:"amount_of_paid_up_share_capital_others",
              values:"",
              help_text:"100"
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
          format_validation: null,
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
          id: "method_of_allotment",
          type: "CHECKBOX",
          label: "Method of Allotment",
          value: "",
          values: [
            {
              id: "one",
              value: "Pursuant to a contract in writing"
            },
            {
              id: "two",
              value: "Pursuant to a contract not reduce to writing"
            },
            {
              id: "three",
              value: "Pursuant to a provision in the constitution"
            },
            {
              id: "four",
              value: "In satisfaction of a dividend in favor of, but not payable in cash to, the shareholder or in pursuance of the application of monies held in an account or reserve in paying up unissued shares to which the shareholder have become entitled"
            },
            {
              id: "five",
              value: "Pursuant to a scheme of arrangment approved by the court"
            }
          ],
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
          id: "attachment",
          type: "FILE",
          label: "Attachment",
          values: [],
          value: "",
          table_values: [],
          help_text: "Click or drag file to this area to upload",
          is_required: false,
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
