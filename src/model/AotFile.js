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
    define(['ApiClient', 'model/FileMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.AotFile = factory(root.Dynamix.ApiClient, root.Dynamix.FileMetadata);
  }
}(this, function(ApiClient, FileMetadata) {
  'use strict';




  /**
   * The AotFile model module.
   * @module model/AotFile
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>AotFile</code>.
   * @alias module:model/AotFile
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AotFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AotFile} obj Optional instance to populate.
   * @return {module:model/AotFile} The populated <code>AotFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fileLocation')) {
        obj['fileLocation'] = ApiClient.convertToType(data['fileLocation'], 'String');
      }
      if (data.hasOwnProperty('fileMetadata')) {
        obj['fileMetadata'] = FileMetadata.constructFromObject(data['fileMetadata']);
      }
    }
    return obj;
  }

  /**
   * @member {String} fileLocation
   */
  exports.prototype['fileLocation'] = undefined;
  /**
   * @member {module:model/FileMetadata} fileMetadata
   */
  exports.prototype['fileMetadata'] = undefined;



  return exports;
}));


