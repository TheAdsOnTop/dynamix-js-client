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
    define(['ApiClient', 'model/TimeRange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TimeRange'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.DayBoundedTimeRange = factory(root.Dynamix.ApiClient, root.Dynamix.TimeRange);
  }
}(this, function(ApiClient, TimeRange) {
  'use strict';




  /**
   * The DayBoundedTimeRange model module.
   * @module model/DayBoundedTimeRange
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>DayBoundedTimeRange</code>.
   * @alias module:model/DayBoundedTimeRange
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DayBoundedTimeRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DayBoundedTimeRange} obj Optional instance to populate.
   * @return {module:model/DayBoundedTimeRange} The populated <code>DayBoundedTimeRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('daysOfWeek')) {
        obj['daysOfWeek'] = ApiClient.convertToType(data['daysOfWeek'], ['String']);
      }
      if (data.hasOwnProperty('timeRange')) {
        obj['timeRange'] = TimeRange.constructFromObject(data['timeRange']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DayBoundedTimeRange.DaysOfWeekEnum>} daysOfWeek
   */
  exports.prototype['daysOfWeek'] = undefined;
  /**
   * @member {module:model/TimeRange} timeRange
   */
  exports.prototype['timeRange'] = undefined;


  /**
   * Allowed values for the <code>daysOfWeek</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DaysOfWeekEnum = {
    /**
     * value: "MONDAY"
     * @const
     */
    "MONDAY": "MONDAY",
    /**
     * value: "TUESDAY"
     * @const
     */
    "TUESDAY": "TUESDAY",
    /**
     * value: "WEDNESDAY"
     * @const
     */
    "WEDNESDAY": "WEDNESDAY",
    /**
     * value: "THURSDAY"
     * @const
     */
    "THURSDAY": "THURSDAY",
    /**
     * value: "FRIDAY"
     * @const
     */
    "FRIDAY": "FRIDAY",
    /**
     * value: "SATURDAY"
     * @const
     */
    "SATURDAY": "SATURDAY",
    /**
     * value: "SUNDAY"
     * @const
     */
    "SUNDAY": "SUNDAY"  };


  return exports;
}));


