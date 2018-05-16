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
    define(['ApiClient', 'model/KeyedAd'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./KeyedAd'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.AdWithProbability = factory(root.Dynamix.ApiClient, root.Dynamix.KeyedAd);
  }
}(this, function(ApiClient, KeyedAd) {
  'use strict';




  /**
   * The AdWithProbability model module.
   * @module model/AdWithProbability
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>AdWithProbability</code>.
   * @alias module:model/AdWithProbability
   * @class
   * @param ad {module:model/KeyedAd} 
   * @param probability {Number} 
   */
  var exports = function(ad, probability) {
    var _this = this;

    _this['ad'] = ad;
    _this['probability'] = probability;
  };

  /**
   * Constructs a <code>AdWithProbability</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdWithProbability} obj Optional instance to populate.
   * @return {module:model/AdWithProbability} The populated <code>AdWithProbability</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ad')) {
        obj['ad'] = KeyedAd.constructFromObject(data['ad']);
      }
      if (data.hasOwnProperty('probability')) {
        obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/KeyedAd} ad
   */
  exports.prototype['ad'] = undefined;
  /**
   * @member {Number} probability
   */
  exports.prototype['probability'] = undefined;



  return exports;
}));

