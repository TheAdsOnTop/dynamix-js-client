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
    root.Dynamix.ScreenDimensions = factory(root.Dynamix.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ScreenDimensions model module.
   * @module model/ScreenDimensions
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>ScreenDimensions</code>.
   * @alias module:model/ScreenDimensions
   * @class
   * @param heightInMeters {Number} 
   * @param widthInMeters {Number} 
   */
  var exports = function(heightInMeters, widthInMeters) {
    var _this = this;

    _this['heightInMeters'] = heightInMeters;
    _this['widthInMeters'] = widthInMeters;
  };

  /**
   * Constructs a <code>ScreenDimensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScreenDimensions} obj Optional instance to populate.
   * @return {module:model/ScreenDimensions} The populated <code>ScreenDimensions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('heightInMeters')) {
        obj['heightInMeters'] = ApiClient.convertToType(data['heightInMeters'], 'Number');
      }
      if (data.hasOwnProperty('widthInMeters')) {
        obj['widthInMeters'] = ApiClient.convertToType(data['widthInMeters'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} heightInMeters
   */
  exports.prototype['heightInMeters'] = undefined;
  /**
   * @member {Number} widthInMeters
   */
  exports.prototype['widthInMeters'] = undefined;



  return exports;
}));


