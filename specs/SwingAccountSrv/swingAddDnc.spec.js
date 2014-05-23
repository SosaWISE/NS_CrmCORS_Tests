/** swingAddDnc.spec.js. */
var request = require("request").defaults({
  jar: true
});
var auth = require("../auth");
var config = require("../config");
var sessionId;
var authBody;

describe("swingAddDnc.spec tests | ", function() {
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

 it("Add to DNC list", function(done) {
    request.get({
      url: config.SseServicesCmsCORS + "SwingAccountSrv/CustomerSwingAddDnc/3854567898",
      json: true
    }, function(error, response, body) {
      console.log("Body: ", body);
      expect(error).toBeNull();
      expect(body.Code).toBe(0);
	  
      done();
    });
  });
});