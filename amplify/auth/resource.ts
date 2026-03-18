import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from '../triggers/postConfirmation/resource'


export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  accountRecovery: "NONE",
  triggers: {
    postConfirmation
  }
});
