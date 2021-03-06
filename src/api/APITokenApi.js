/**
 * Dynamix
 * Sign up for Dynamix & grab your token.
 *
 * OpenAPI spec version: v0.1.0
 * Contact: david@theadsontop.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountRegistrationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccountRegistrationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.APITokenApi = factory(root.Dynamix.ApiClient, root.Dynamix.AccountRegistrationRequest);
  }
}(this, function(ApiClient, AccountRegistrationRequest) {
  'use strict';

  /**
   * APIToken service.
   * @module api/APITokenApi
   * @version v0.1.0
   */

  /**
   * Constructs a new APITokenApi. 
   * @alias module:api/APITokenApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createAccount operation.
     * @callback module:api/APITokenApi~createAccountCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an Ads on Top Dynamix account
     * Each namespace is its own data sandbox.
     * @param {String} namespace 
     * @param {module:model/AccountRegistrationRequest} body 
     * @param {module:api/APITokenApi~createAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.createAccount = function(namespace, body, callback) {
      var postBody = body;

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling createAccount");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAccount");
      }


      var pathParams = {
      };
      var queryParams = {
        'namespace': namespace,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
