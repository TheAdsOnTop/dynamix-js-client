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
    define(['ApiClient', 'model/AdWithProbability', 'model/SoftConstraintRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdWithProbability'), require('../model/SoftConstraintRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.AdRankerApi = factory(root.Dynamix.ApiClient, root.Dynamix.AdWithProbability, root.Dynamix.SoftConstraintRequest);
  }
}(this, function(ApiClient, AdWithProbability, SoftConstraintRequest) {
  'use strict';

  /**
   * AdRanker service.
   * @module api/AdRankerApi
   * @version v0.1.0
   */

  /**
   * Constructs a new AdRankerApi. 
   * @alias module:api/AdRankerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the attachProbabilities operation.
     * @callback module:api/AdRankerApi~attachProbabilitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AdWithProbability>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * AdConstraintResource - Apply Soft Constraints
     * Applies the soft constraints based on the vector and the Publisher settings.
     * @param {String} authToken 
     * @param {String} namespace 
     * @param {module:model/SoftConstraintRequest} body 
     * @param {module:api/AdRankerApi~attachProbabilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AdWithProbability>}
     */
    this.attachProbabilities = function(authToken, namespace, body, callback) {
      var postBody = body;

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling attachProbabilities");
      }

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling attachProbabilities");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling attachProbabilities");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Auth-token': authToken,
        'namespace': namespace
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [AdWithProbability];

      return this.apiClient.callApi(
        '/ranker', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));