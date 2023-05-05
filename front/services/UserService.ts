/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

  /**
   * Get list user demo
   * Get list user demo
   * @returns any OK
   * @throws ApiError
   */
  public static getUsers(): CancelablePromise<Array<{
    /**
     * Name of user
     */
    name?: string;
    /**
     * Age of user
     */
    age?: string;
  }>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users',
    });
  }

}
