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
    define(['ApiClient', 'model/AdRequestWeights'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdRequestWeights'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.ContentProviderRegistration = factory(root.Dynamix.ApiClient, root.Dynamix.AdRequestWeights);
  }
}(this, function(ApiClient, AdRequestWeights) {
  'use strict';




  /**
   * The ContentProviderRegistration model module.
   * @module model/ContentProviderRegistration
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>ContentProviderRegistration</code>.
   * @alias module:model/ContentProviderRegistration
   * @class
   * @param catalogItemRid {String} 
   * @param weightVector {module:model/AdRequestWeights} 
   */
  var exports = function(catalogItemRid, weightVector) {
    var _this = this;

    _this['catalogItemRid'] = catalogItemRid;
    _this['weightVector'] = weightVector;
  };

  /**
   * Constructs a <code>ContentProviderRegistration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentProviderRegistration} obj Optional instance to populate.
   * @return {module:model/ContentProviderRegistration} The populated <code>ContentProviderRegistration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('catalogItemRid')) {
        obj['catalogItemRid'] = ApiClient.convertToType(data['catalogItemRid'], 'String');
      }
      if (data.hasOwnProperty('weightVector')) {
        obj['weightVector'] = AdRequestWeights.constructFromObject(data['weightVector']);
      }
    }
    return obj;
  }

  /**
   * @member {String} catalogItemRid
   */
  exports.prototype['catalogItemRid'] = undefined;
  /**
   * @member {module:model/AdRequestWeights} weightVector
   */
  exports.prototype['weightVector'] = undefined;



  return exports;
}));


