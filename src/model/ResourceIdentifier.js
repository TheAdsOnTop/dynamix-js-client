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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.ResourceIdentifier = factory(root.Dynamix.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceIdentifier model module.
   * @module model/ResourceIdentifier
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>ResourceIdentifier</code>.
   * @alias module:model/ResourceIdentifier
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ResourceIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceIdentifier} obj Optional instance to populate.
   * @return {module:model/ResourceIdentifier} The populated <code>ResourceIdentifier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('service')) {
        obj['service'] = ApiClient.convertToType(data['service'], 'String');
      }
      if (data.hasOwnProperty('instance')) {
        obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('locator')) {
        obj['locator'] = ApiClient.convertToType(data['locator'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} service
   */
  exports.prototype['service'] = undefined;
  /**
   * @member {String} instance
   */
  exports.prototype['instance'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} locator
   */
  exports.prototype['locator'] = undefined;



  return exports;
}));


