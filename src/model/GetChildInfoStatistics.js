/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
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
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetChildInfoStatistics = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetChildInfoStatistics model module.
   * @module model/GetChildInfoStatistics
   * @version 7.2.4
   */

  /**
   * Constructs a new <code>GetChildInfoStatistics</code>.
   * Statistics about your child account activity
   * @alias module:model/GetChildInfoStatistics
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetChildInfoStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetChildInfoStatistics} obj Optional instance to populate.
   * @return {module:model/GetChildInfoStatistics} The populated <code>GetChildInfoStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('previousMonthTotalSent')) {
        obj['previousMonthTotalSent'] = ApiClient.convertToType(data['previousMonthTotalSent'], 'Number');
      }
      if (data.hasOwnProperty('currentMonthTotalSent')) {
        obj['currentMonthTotalSent'] = ApiClient.convertToType(data['currentMonthTotalSent'], 'Number');
      }
      if (data.hasOwnProperty('totalSent')) {
        obj['totalSent'] = ApiClient.convertToType(data['totalSent'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Overall emails sent for the previous month
   * @member {Number} previousMonthTotalSent
   */
  exports.prototype['previousMonthTotalSent'] = undefined;
  /**
   * Overall emails sent for current month
   * @member {Number} currentMonthTotalSent
   */
  exports.prototype['currentMonthTotalSent'] = undefined;
  /**
   * Overall emails sent for since the account exists
   * @member {Number} totalSent
   */
  exports.prototype['totalSent'] = undefined;



  return exports;
}));


