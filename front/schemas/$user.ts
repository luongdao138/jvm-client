/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $user = {
  description: `Represents a User of system.`,
  properties: {
    id: {
      type: 'string',
      description: `The user's ID`,
    },
    email: {
      type: 'string',
      description: `The email of the User`,
      isRequired: true,
      format: 'email',
    },
    username: {
      type: 'string',
      description: `The username of the User`,
      isRequired: true,
      format: 'username',
    },
    created_at: {
      type: 'string',
      description: `The date with timezone at which the resource was created.`,
      format: 'date-time',
    },
    updated_at: {
      type: 'string',
      description: `The date with timezone at which the resource was updated.`,
      format: 'date-time',
    },
  },
} as const;
