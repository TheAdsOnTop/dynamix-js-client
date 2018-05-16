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
    instance = new Dynamix.PagedResponseContentRequest();
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

  describe('PagedResponseContentRequest', function() {
    it('should create an instance of PagedResponseContentRequest', function() {
      // uncomment below and update the code to test PagedResponseContentRequest
      //var instane = new Dynamix.PagedResponseContentRequest();
      //expect(instance).to.be.a(Dynamix.PagedResponseContentRequest);
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new Dynamix.PagedResponseContentRequest();
      //expect(instance).to.be();
    });

    it('should have the property nextStartIndex (base name: "nextStartIndex")', function() {
      // uncomment below and update the code to test the property nextStartIndex
      //var instane = new Dynamix.PagedResponseContentRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestPageSize (base name: "requestPageSize")', function() {
      // uncomment below and update the code to test the property requestPageSize
      //var instane = new Dynamix.PagedResponseContentRequest();
      //expect(instance).to.be();
    });

  });

}));
