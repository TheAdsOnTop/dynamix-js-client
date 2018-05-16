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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Dynamix);
  }
}(this, function(expect, Dynamix) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Dynamix.Ad();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Ad', function() {
    it('should create an instance of Ad', function() {
      // uncomment below and update the code to test Ad
      //var instane = new Dynamix.Ad();
      //expect(instance).to.be.a(Dynamix.Ad);
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instane = new Dynamix.Ad();
      //expect(instance).to.be();
    });

    it('should have the property adSourceStreamRid (base name: "adSourceStreamRid")', function() {
      // uncomment below and update the code to test the property adSourceStreamRid
      //var instane = new Dynamix.Ad();
      //expect(instance).to.be();
    });

    it('should have the property adMetadata (base name: "adMetadata")', function() {
      // uncomment below and update the code to test the property adMetadata
      //var instane = new Dynamix.Ad();
      //expect(instance).to.be();
    });

    it('should have the property playbackPriceInCents (base name: "playbackPriceInCents")', function() {
      // uncomment below and update the code to test the property playbackPriceInCents
      //var instane = new Dynamix.Ad();
      //expect(instance).to.be();
    });

    it('should have the property customProperties (base name: "customProperties")', function() {
      // uncomment below and update the code to test the property customProperties
      //var instane = new Dynamix.Ad();
      //expect(instance).to.be();
    });

  });

}));
