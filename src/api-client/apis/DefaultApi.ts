/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  QueryModel,
  SubmitQueryRequest,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    QueryModelFromJSON,
    QueryModelToJSON,
    SubmitQueryRequestFromJSON,
    SubmitQueryRequestToJSON,
} from '../models/index';

export interface GetQueryEndpointGetQueryGetRequest {
    queryId: string;
}

export interface ListQueryEndpointListQueryGetRequest {
    userId: string;
}

export interface SubmitQueryEndpointSubmitQueryPostRequest {
    submitQueryRequest: SubmitQueryRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Get Query Endpoint
     */
    async getQueryEndpointGetQueryGetRaw(requestParameters: GetQueryEndpointGetQueryGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryModel>> {
        if (requestParameters['queryId'] == null) {
            throw new runtime.RequiredError(
                'queryId',
                'Required parameter "queryId" was null or undefined when calling getQueryEndpointGetQueryGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['queryId'] != null) {
            queryParameters['query_id'] = requestParameters['queryId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/get_query`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryModelFromJSON(jsonValue));
    }

    /**
     * Get Query Endpoint
     */
    async getQueryEndpointGetQueryGet(requestParameters: GetQueryEndpointGetQueryGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryModel> {
        const response = await this.getQueryEndpointGetQueryGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Index
     */
    async indexGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Index
     */
    async indexGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.indexGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * List Query Endpoint
     */
    async listQueryEndpointListQueryGetRaw(requestParameters: ListQueryEndpointListQueryGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QueryModel>>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling listQueryEndpointListQueryGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['userId'] != null) {
            queryParameters['user_id'] = requestParameters['userId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/list_query`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QueryModelFromJSON));
    }

    /**
     * List Query Endpoint
     */
    async listQueryEndpointListQueryGet(requestParameters: ListQueryEndpointListQueryGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QueryModel>> {
        const response = await this.listQueryEndpointListQueryGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Submit Query Endpoint
     */
    async submitQueryEndpointSubmitQueryPostRaw(requestParameters: SubmitQueryEndpointSubmitQueryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryModel>> {
        if (requestParameters['submitQueryRequest'] == null) {
            throw new runtime.RequiredError(
                'submitQueryRequest',
                'Required parameter "submitQueryRequest" was null or undefined when calling submitQueryEndpointSubmitQueryPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/submit_query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubmitQueryRequestToJSON(requestParameters['submitQueryRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryModelFromJSON(jsonValue));
    }

    /**
     * Submit Query Endpoint
     */
    async submitQueryEndpointSubmitQueryPost(requestParameters: SubmitQueryEndpointSubmitQueryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryModel> {
        const response = await this.submitQueryEndpointSubmitQueryPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}