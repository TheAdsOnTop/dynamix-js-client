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
    root.Dynamix.TimeRange = factory(root.Dynamix.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TimeRange model module.
   * @module model/TimeRange
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>TimeRange</code>.
   * @alias module:model/TimeRange
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TimeRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeRange} obj Optional instance to populate.
   * @return {module:model/TimeRange} The populated <code>TimeRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startHour')) {
        obj['startHour'] = ApiClient.convertToType(data['startHour'], 'Number');
      }
      if (data.hasOwnProperty('startMinute')) {
        obj['startMinute'] = ApiClient.convertToType(data['startMinute'], 'Number');
      }
      if (data.hasOwnProperty('endHour')) {
        obj['endHour'] = ApiClient.convertToType(data['endHour'], 'Number');
      }
      if (data.hasOwnProperty('endMinute')) {
        obj['endMinute'] = ApiClient.convertToType(data['endMinute'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} startHour
   */
  exports.prototype['startHour'] = undefined;
  /**
   * @member {Number} startMinute
   */
  exports.prototype['startMinute'] = undefined;
  /**
   * @member {Number} endHour
   */
  exports.prototype['endHour'] = undefined;
  /**
   * @member {Number} endMinute
   */
  exports.prototype['endMinute'] = undefined;



  return exports;
}));


