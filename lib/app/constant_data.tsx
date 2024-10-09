export interface onBoardingPageValues {
  id:string,
  label:string
}

export interface loginPagecarouselImageData {
  id:string,
  src:string,
  alt:string,
  heading:string,
  text:string
}

export type requirementFormsPath = '/requirement_form/company_details' | '/requirement_form/officer_shareholder' | '/requirement_form/share_capital' | '/requirement_form/share_holders' | '/requirement_form/registered_office';
export type dueDiligenceFormsPath = '/due_diligence_form/individual_info' | '/due_diligence_form/business_info' | '/due_diligence_form/beneficial_owner_info' | '/due_diligence_form/transaction_info' | '/due_diligence_form/declaration' | '/due_diligence_form/review_and_submit';

export const dueDiligenceFormPathTitle = ['Individual Info', 'Business Info', 'Beneficial Owner Info', 'Transaction Info', 'Declaration','Review & Submit'];
export const dueDiligencePathFormName = ['individual_info', 'business_info', 'beneficial_owner_info', 'transaction_info', 'declaration','review_and_submit'];

export const requirementFormPathTitle = ['Company Details', 'Officer/Shareholder', 'Share Capital', 'Shareholder', 'Registered Office'];
export const requirementFormPathName = ['company_details', 'officer_shareholder', 'share_capital', 'share_holders', 'registered_office'];

export const requirementFormsPrevPathName:Record<requirementFormsPath, string | null> = {
  '/requirement_form/company_details': null,
  '/requirement_form/officer_shareholder': 'Company Details',
  '/requirement_form/share_capital': 'Officer/Shareholder',
  '/requirement_form/share_holders': 'Share Capital',
  '/requirement_form/registered_office': 'Shareholder',
};

export const requirementFormPathToPrevPath: Record<requirementFormsPath, requirementFormsPath | null> = {
  '/requirement_form/company_details': null,
  '/requirement_form/officer_shareholder': '/requirement_form/company_details',
  '/requirement_form/share_capital': '/requirement_form/officer_shareholder',
  '/requirement_form/share_holders': '/requirement_form/share_capital',
  '/requirement_form/registered_office': '/requirement_form/share_holders'
};

export const requirementFormPathToNextPath: Record<requirementFormsPath, requirementFormsPath | null> = {
  '/requirement_form/company_details': '/requirement_form/officer_shareholder',
  '/requirement_form/officer_shareholder': '/requirement_form/share_capital',
  '/requirement_form/share_capital': '/requirement_form/share_holders',
  '/requirement_form/share_holders': '/requirement_form/registered_office',
  '/requirement_form/registered_office': null
};

export const dueDiligenceFormsPrevPathName: Record<dueDiligenceFormsPath, string | null> = {
  '/due_diligence_form/individual_info': null,
  '/due_diligence_form/business_info': 'Individual Info',
  '/due_diligence_form/beneficial_owner_info': 'Business Info',
  '/due_diligence_form/transaction_info': 'Beneficial Owner Info',
  '/due_diligence_form/declaration': 'Transaction Info',
  '/due_diligence_form/review_and_submit':'Declaration'
};

export const dueDiligenceFormPathToPrevPath: Record<dueDiligenceFormsPath, dueDiligenceFormsPath | null> = {
  '/due_diligence_form/individual_info': null,
  '/due_diligence_form/business_info': '/due_diligence_form/individual_info',
  '/due_diligence_form/beneficial_owner_info': '/due_diligence_form/business_info',
  '/due_diligence_form/transaction_info': '/due_diligence_form/beneficial_owner_info',
  '/due_diligence_form/declaration': '/due_diligence_form/transaction_info',
  '/due_diligence_form/review_and_submit': '/due_diligence_form/declaration'
};

export const dueDiligenceFormPathToNextPath: Record<dueDiligenceFormsPath, dueDiligenceFormsPath | null> = {
  '/due_diligence_form/individual_info': '/due_diligence_form/business_info',
  '/due_diligence_form/business_info': '/due_diligence_form/beneficial_owner_info',
  '/due_diligence_form/beneficial_owner_info': '/due_diligence_form/transaction_info',
  '/due_diligence_form/transaction_info': '/due_diligence_form/declaration',
  '/due_diligence_form/declaration': '/due_diligence_form/review_and_submit',
  '/due_diligence_form/review_and_submit': null
};

export const onBoardingPageValues:onBoardingPageValues[] = [
  {
    id:"data1",
    label:"I want to register a business and incorporate a company with your services"
  },
  {
    id:"data2",
    label:"I own a company and would like to switch my accounting"
  },
  {
    id: "data3",
    label: "I want to talk to an expert"
  }
]

export const loginPagecarouselImageData:loginPagecarouselImageData[] = [
  { 
    id: "1", 
    src: '/images/Login Image 1.jpeg', 
    alt: 'Slide 1', 
    heading:"Submit Incorporation",
    text:"Join with us through our platform" 
  },
  { 
    id: "2", 
    src: '/images/Login Image 2.jpeg', 
    alt: 'Slide 2',
    heading:"Book an appointment",
    text:"Talk more and discuss your business with our expert" 
  },
  { 
    id: "3", 
    src: '/images/Login Image 3.jpeg', 
    alt: 'Slide 3' ,
    heading:"Comprehensive Data",
    text:"Analyze the data of your business with our platform" 
  },
];