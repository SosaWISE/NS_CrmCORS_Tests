/** systemDetails.spec.js */
var request = require("request").defaults({
  jar: true
});
var auth = require("../auth");
var config = require("../config");
var modelDef = require("../modelDefinitions");
var sessionId;
var authBody;

describe("SystemDetails.spec tests. | ", function() {
  // ** START BEFORE EACH.
  beforeEach(function(done) {
    auth.authScript(request, function(aSessionId, aBody) {
      sessionId = aSessionId;
      authBody = aBody;
      expect(authBody.Code).toBe(0);
      done();
    });
  });
  // **   END BEFORE EACH.

  it("Validate getting System Details | ", function(done) {
    request.get({
      url: config.SseServicesCmsCORS + "MsAccountSetupSrv/SystemDetails/" + 100212,
      json: true
    }, function(error, response, body) {
      expect(error).toBeNull();
      expect(body).not.toBeNull();
      expect(body.Code).toBe(0, "Error on call.  Message: " + body.Message);
      // console.log("Body: ", body);

      /** Check for data elements. */
      var account = body.Value;
      expect(account.AccountID).not.toBeNull("The AccountID can not be null.");
      expect(account.SystemTypeId).toBeDefined("SystemTypeId can be null.");
      expect(account.CellularTypeId).toBeDefined("CellularTypeId can be null.");
      expect(account.AccountPassword).toBeDefined("AccountPassword can be null.");
      expect(account.DslSeizureId).toBeDefined("DslSeizureId can be null.");
      done();

    });
  });

  it("Get MetaData ServiceTypes | ", function(done) {
    request.get({
      url: config.SseServicesCmsCORS + "MsAccountSetupSrv/ServiceTypes",
      json: true
    }, function(error, response, body) {
      // console.log("Service Types body:", body);
      expect(error).toBeNull();
      expect(body).not.toBeNull();
      expect(body.Code).toBe(0, "Error on call.  Message: " + body.Message);

      /** Check length. */
      expect(body.Value.length).toBeGreaterThan(0, "There are no items returned.");
      body.Value.map(function(item) {
        modelDef.serviceType(item);
      });
      done();
    });
  });

  it("Get MetaData PanelTypes | ", function(done) {
    request.get({
      url: config.SseServicesCmsCORS + "MsAccountSetupSrv/PanelTypes",
      json: true
    }, function(error, response, body) {
      // console.log("Panel Types body:", body);
      expect(error).toBeNull();
      expect(body).not.toBeNull();
      expect(body.Code).toBe(0, "Error on call.  Message: " + body.Message);

      /** Check length. */
      expect(body.Value.length).toBeGreaterThan(0, "There are no items returned.");
      body.Value.map(function(item) {
        modelDef.panelType(item);
      });
      done();
    });
  });

  it("Get MetaData DslSeizureTypes | ", function(done) {
    request.get({
      url: config.SseServicesCmsCORS + "MsAccountSetupSrv/DslSeizureTypes",
      json: true
    }, function(error, response, body) {
      // console.log("Seizure Types body:", body);
      expect(error).toBeNull();
      expect(body).not.toBeNull();
      expect(body.Code).toBe(0, "Error on call.  Message: " + body.Message);

      /** Check length. */
      expect(body.Value.length).toBeGreaterThan(0, "There are no items returned.");
      body.Value.map(function(item) {
        modelDef.dslSeizureType(item);
      });
      done();
    });
  });
});