import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { postConfirmation } from '../triggers/postConfirmation/resource';

const schema = a.schema({
  Users: a
    .model({
      userId: a.string().required(),
      profileOwner: a.string(),
      name: a.string(),
      email: a.string(),
      createdAt: a.string(),
      updatedAt: a.string(),
      profilePicture: a.string(),
    })
    .identifier(['userId'])
    .authorization((allow) => [allow.owner(), allow.ownerDefinedIn("profileOwner")]),
  Notes: a
    .model({
      id: a.string().required(),
      title: a.string().required(),
      description: a.string(),
      createdAt: a.string(),
      updatedAt: a.string(),
    })
    .identifier(['id'])
    .authorization((allow) => [allow.owner()]),
}).authorization((allow) => [
  allow.resource(postConfirmation),
]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
  name: 'api',
});
