import { defineAuth } from "@aws-amplify/backend";
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  
  loginWith: {
  
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Welcome to my app!",
      verificationEmailBody: (createCode) => `Use this code to confirm your account: ${createCode()}, Welcome to the APP!!!!!` ,
    },
    
  },
  
  accountRecovery: 'EMAIL_ONLY',

  userAttributes: {
    
    preferredUsername: {
      mutable: true,
      required: false
    },
    'custom:role':{
      dataType:"String",
      mutable:true,
      maxLen:10,
      minLen:1
    }, 
    'custom:company_name':{
      dataType:"String",
      mutable:true,
      maxLen:30,
      minLen:1
    },

  }
});