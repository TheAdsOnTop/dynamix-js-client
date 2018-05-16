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
    instance = new Dynamix.ContentProviderRegistrationApi();
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

  describe('ContentProviderRegistrationApi', function() {
    describe('bulkGetAuthorizedRegistrations', function() {
      it('should call bulkGetAuthorizedRegistrations successfully', function(done) {
        //uncomment below and update the code to test bulkGetAuthorizedRegistrations
        //instance.bulkGetAuthorizedRegistrations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkResolveContentProviderRegistrations', function() {
      it('should call bulkResolveContentProviderRegistrations successfully', function(done) {
        //uncomment below and update the code to test bulkResolveContentProviderRegistrations
        //instance.bulkResolveContentProviderRegistrations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createContentProviderRegistration', function() {
      it('should call createContentProviderRegistration successfully', function(done) {
        //uncomment below and update the code to test createContentProviderRegistration
        //instance.createContentProviderRegistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteContentProviderRegistration', function() {
      it('should call deleteContentProviderRegistration successfully', function(done) {
        //uncomment below and update the code to test deleteContentProviderRegistration
        //instance.deleteContentProviderRegistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllContentProviderRegistrations', function() {
      it('should call getAllContentProviderRegistrations successfully', function(done) {
        //uncomment below and update the code to test getAllContentProviderRegistrations
        //instance.getAllContentProviderRegistrations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateContentProviderRegistration', function() {
      it('should call updateContentProviderRegistration successfully', function(done) {
        //uncomment below and update the code to test updateContentProviderRegistration
        //instance.updateContentProviderRegistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
