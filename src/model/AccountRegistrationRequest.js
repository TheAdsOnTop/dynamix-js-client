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
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.AccountRegistrationRequest = factory(root.Dynamix.ApiClient, root.Dynamix.User);
  }
}(this, function(ApiClient, User) {
  'use strict';




  /**
   * The AccountRegistrationRequest model module.
   * @module model/AccountRegistrationRequest
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>AccountRegistrationRequest</code>.
   * @alias module:model/AccountRegistrationRequest
   * @class
   * @param newUser {module:model/User} 
   */
  var exports = function(newUser) {
    var _this = this;

    _this['newUser'] = newUser;
  };

  /**
   * Constructs a <code>AccountRegistrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountRegistrationRequest} obj Optional instance to populate.
   * @return {module:model/AccountRegistrationRequest} The populated <code>AccountRegistrationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('newUser')) {
        obj['newUser'] = User.constructFromObject(data['newUser']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/User} newUser
   */
  exports.prototype['newUser'] = undefined;



  return exports;
}));


