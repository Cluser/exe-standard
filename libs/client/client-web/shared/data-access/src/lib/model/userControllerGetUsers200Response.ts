/**
 * API
 * API Description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserGetResposeDto } from './userGetResposeDto';


export interface UserControllerGetUsers200Response { 
    data: Array<UserGetResposeDto>;
    totalCount: number;
    offset: number;
    limit: number;
}

