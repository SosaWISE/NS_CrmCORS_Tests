/** EquipmentLookup.spec.js */
var request = require("request").defaults({
  jar: true
});
var auth = require("../auth");
var config = require("../config");
var modelDef = require("../modelDefinitions");
var sessionId;
var authBody;

describe("EquipmentLookup.spec tests. | ", function() {
  // ** START BEFORE EACH.
  beforeEach(function(done) {
    auth.authScript(request, function(aSessionId, aBody) {
      sessionId = aSessionId;
      authBody = aBody;
      expect(authBody).toBeDefined("AuthBody is not defined.");
      expect(authBody.Code).toBe(0);
      done();
    });
  });
  // **   END BEFORE EACH.

  /** Lookup by Part Number. */
  it("Validate getting EquipmentLookup by PartNumber", function(done) {
    request.get({
        url: config.SseServicesCmsCORS + "MsAccountSetupSrv/Equipments/GEC-TX1510011/ByPartNumber?accountId=1000",
        json: true
      },
      function(error, response, body) {
        console.log("Body: ", body);
        expect(error).toBeNull();
        expect(body).not.toBeNull();
        expect(body.Code).toBe(0, "Error on call.  Message: " + body.Message);

        modelDef.zoneEventType(body.Value);
        done();

      });
  });

  /** Lookup by Barcode. */
  it("Validate getting EquipmentLookup by barcode", function(done) {
    request.get({
        url: config.SseServicesCmsCORS + "MsAccountSetupSrv/Equipments/23423sdsf23/ByBarcode?accountId=1000",
        json: true
      },
      function(error, response, body) {
        console.log("Body: ", body);
        expect(error).toBeNull();
        expect(body).not.toBeNull();
        expect(body.Code).toBe(0, "Error on call.  Message: " + body.Message);

        modelDef.zoneEventType(body.Value);
        done();

      });
  });

});