/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a User of system.
 */
export type user = {
  /**
   * The user's ID
   */
  id?: string;
  /**
   * The email of the User
   */
  email: string;
  /**
   * The username of the User
   */
  username: string;
  /**
   * The date with timezone at which the resource was created.
   */
  created_at?: string;
  /**
   * The date with timezone at which the resource was updated.
   */
  updated_at?: string;
};

