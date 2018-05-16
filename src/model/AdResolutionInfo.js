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
    define(['ApiClient', 'model/AspectRatio', 'model/Resolution', 'model/ScreenDimensions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AspectRatio'), require('./Resolution'), require('./ScreenDimensions'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.AdResolutionInfo = factory(root.Dynamix.ApiClient, root.Dynamix.AspectRatio, root.Dynamix.Resolution, root.Dynamix.ScreenDimensions);
  }
}(this, function(ApiClient, AspectRatio, Resolution, ScreenDimensions) {
  'use strict';




  /**
   * The AdResolutionInfo model module.
   * @module model/AdResolutionInfo
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>AdResolutionInfo</code>.
   * @alias module:model/AdResolutionInfo
   * @class
   * @param aspectRatio {module:model/AspectRatio} 
   * @param resolution {module:model/Resolution} 
   * @param screenDimensions {module:model/ScreenDimensions} 
   */
  var exports = function(aspectRatio, resolution, screenDimensions) {
    var _this = this;

    _this['aspectRatio'] = aspectRatio;
    _this['resolution'] = resolution;
    _this['screenDimensions'] = screenDimensions;
  };

  /**
   * Constructs a <code>AdResolutionInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdResolutionInfo} obj Optional instance to populate.
   * @return {module:model/AdResolutionInfo} The populated <code>AdResolutionInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aspectRatio')) {
        obj['aspectRatio'] = AspectRatio.constructFromObject(data['aspectRatio']);
      }
      if (data.hasOwnProperty('resolution')) {
        obj['resolution'] = Resolution.constructFromObject(data['resolution']);
      }
      if (data.hasOwnProperty('screenDimensions')) {
        obj['screenDimensions'] = ScreenDimensions.constructFromObject(data['screenDimensions']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AspectRatio} aspectRatio
   */
  exports.prototype['aspectRatio'] = undefined;
  /**
   * @member {module:model/Resolution} resolution
   */
  exports.prototype['resolution'] = undefined;
  /**
   * @member {module:model/ScreenDimensions} screenDimensions
   */
  exports.prototype['screenDimensions'] = undefined;



  return exports;
}));


