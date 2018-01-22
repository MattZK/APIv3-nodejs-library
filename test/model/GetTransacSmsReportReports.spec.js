/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    factory(root.expect, root.SibApiV3Sdk);
  }
}(this, function(expect, SibApiV3Sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SibApiV3Sdk.GetTransacSmsReportReports();
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

  describe('GetTransacSmsReportReports', function() {
    it('should create an instance of GetTransacSmsReportReports', function() {
      // uncomment below and update the code to test GetTransacSmsReportReports
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be.a(SibApiV3Sdk.GetTransacSmsReportReports);
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

    it('should have the property requests (base name: "requests")', function() {
      // uncomment below and update the code to test the property requests
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

    it('should have the property delivered (base name: "delivered")', function() {
      // uncomment below and update the code to test the property delivered
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

    it('should have the property hardBounces (base name: "hardBounces")', function() {
      // uncomment below and update the code to test the property hardBounces
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

    it('should have the property softBounces (base name: "softBounces")', function() {
      // uncomment below and update the code to test the property softBounces
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

    it('should have the property blocked (base name: "blocked")', function() {
      // uncomment below and update the code to test the property blocked
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribed (base name: "unsubscribed")', function() {
      // uncomment below and update the code to test the property unsubscribed
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

    it('should have the property replied (base name: "replied")', function() {
      // uncomment below and update the code to test the property replied
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

    it('should have the property accepted (base name: "accepted")', function() {
      // uncomment below and update the code to test the property accepted
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

    it('should have the property rejected (base name: "rejected")', function() {
      // uncomment below and update the code to test the property rejected
      //var instane = new SibApiV3Sdk.GetTransacSmsReportReports();
      //expect(instance).to.be();
    });

  });

}));
