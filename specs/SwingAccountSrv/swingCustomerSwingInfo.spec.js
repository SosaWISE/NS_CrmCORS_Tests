/** swingCustomerSwingInfo.spec.js. */
var request = require("request").defaults({
  jar: true
});
var auth = require("../auth");
var config = require("../config");
var sessionId;
var authBody;

describe("swingCustomerSwingInfo.spec tests | ", function() {
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

  //Primary customer
 it("Get Swing Account Customer 1 Info", function(done) {
	request.post({
		url: config.SseServicesCmsCORS + "SwingAccountSrv/CustomerSwingInfo",
		form: {
				InterimAccountId: '100000',
				CustomerType: 'PRI',
				SwingEquipment: '1'
			},
		json: true
		}, function(error, response, body) {
      console.log("Body: ", body);
      expect(error).toBeNull();
      expect(body.Code).toBe(0);
	  
      done();
    });
  });
  
  //Secondary customer
 it("Get Swing Account Customer 2 Info", function(done) {
	request.post({
		url: config.SseServicesCmsCORS + "SwingAccountSrv/CustomerSwingInfo",
		form: {
				InterimAccountId: '100000',
				CustomerType: 'SEC',
				SwingEquipment: '1'
			},
		json: true
		}, function(error, response, body) {
      console.log("Body: ", body);
      expect(error).toBeNull();
      expect(body.Code).toBe(0);
	  
      done();
    });
  });  
  
  
});