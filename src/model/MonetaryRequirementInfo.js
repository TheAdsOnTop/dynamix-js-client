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
    define(['ApiClient', 'model/AotCreditCharge'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AotCreditCharge'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.MonetaryRequirementInfo = factory(root.Dynamix.ApiClient, root.Dynamix.AotCreditCharge);
  }
}(this, function(ApiClient, AotCreditCharge) {
  'use strict';




  /**
   * The MonetaryRequirementInfo model module.
   * @module model/MonetaryRequirementInfo
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>MonetaryRequirementInfo</code>.
   * @alias module:model/MonetaryRequirementInfo
   * @class
   * @param minimumCharge {module:model/AotCreditCharge} 
   */
  var exports = function(minimumCharge) {
    var _this = this;

    _this['minimumCharge'] = minimumCharge;
  };

  /**
   * Constructs a <code>MonetaryRequirementInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonetaryRequirementInfo} obj Optional instance to populate.
   * @return {module:model/MonetaryRequirementInfo} The populated <code>MonetaryRequirementInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('minimumCharge')) {
        obj['minimumCharge'] = AotCreditCharge.constructFromObject(data['minimumCharge']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AotCreditCharge} minimumCharge
   */
  exports.prototype['minimumCharge'] = undefined;



  return exports;
}));

