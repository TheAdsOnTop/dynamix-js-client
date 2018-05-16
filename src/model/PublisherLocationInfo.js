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
    define(['ApiClient', 'model/Address', 'model/DemographicVector'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./DemographicVector'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.PublisherLocationInfo = factory(root.Dynamix.ApiClient, root.Dynamix.Address, root.Dynamix.DemographicVector);
  }
}(this, function(ApiClient, Address, DemographicVector) {
  'use strict';




  /**
   * The PublisherLocationInfo model module.
   * @module model/PublisherLocationInfo
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>PublisherLocationInfo</code>.
   * @alias module:model/PublisherLocationInfo
   * @class
   * @param latitude {Number} 
   * @param longitude {Number} 
   */
  var exports = function(latitude, longitude) {
    var _this = this;

    _this['latitude'] = latitude;
    _this['longitude'] = longitude;


  };

  /**
   * Constructs a <code>PublisherLocationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublisherLocationInfo} obj Optional instance to populate.
   * @return {module:model/PublisherLocationInfo} The populated <code>PublisherLocationInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = Address.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('demographicVector')) {
        obj['demographicVector'] = DemographicVector.constructFromObject(data['demographicVector']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * @member {module:model/Address} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {module:model/DemographicVector} demographicVector
   */
  exports.prototype['demographicVector'] = undefined;



  return exports;
}));


