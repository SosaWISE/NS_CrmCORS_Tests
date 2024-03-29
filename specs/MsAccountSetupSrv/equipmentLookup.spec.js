/** EquipmentLookup.spec.js */
var request = require("request").defaults({
  jar: true
});
var auth = require("../auth");
var config = require("../config");
var dataSource = require("../dataSource");
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

  /** Initialize. */
  var equipment1 = 'GEC-TX1510011', // RECESSED DOOR/WINDOW 
    equipment2 = 'GEC-60362N103195'; // DOOR/WINDOW 

  /** Lookup by Part Number. */
  it("Validate getting EquipmentLookup by PartNumber", function(done) {
    dataSource.createMsAccountScratch(request, {
      DealerId: 5001,
      SeasonId: 1,
      TeamLocationId: 1,
      SalesRepId: 'SOSA001',
      StreetAddress: '1128 E 3300 S',
      City: 'Salt Lake City',
      StateId: 'UT',
      PostalCode: '84106',
      PhoneNumber: '(801) 486-8251',
      LocalizationId: 'en-us', // *REQUIRED:  This is the default language that they speak.
      LeadSourceId: '7', // *REQUIRED:  This is the web.
      LeadDispositionId: 9, // *REQUIRED:  This is in what state is the lead.  9: Means "Ran Credit"
      Salutation: 'Mr.', // *OPTIONAL
      FirstName: 'Kirby', // *REQUIRED
      MiddleName: null, // *OPTIONAL
      LastName: 'Vacuum', // *REQUIRED
      Suffix: 'II', // *OPTIONAL
      Gender: 'Male', // *REQUIORED
      SSN: '333-33-3333', // *CONDITIONAL:  Either SSN or DOB has to be present or both.
      DOB: '12/14/1968', // *CONDITIONAL:  Either SSN or DOB has to be present or both.
      Dl: '2342423423', // *OPTIONAL
      DlStateId: 'UT', // *OPTIONAL
      Email: 'sammy@sam.com', // *REQUIORED
      PhoneHome: '(801) 654-9877', // *OPTIONAL
      PhoneWork: null, // *OPTIONAL
      PhoneMobile: '(909) 987-6790' // *OPTIONAL

    }, function(accountValue) {
      request.get({
          url: config.SseServicesCmsCORS + "MsAccountSetupSrv/Equipments/" + equipment1 + "/ByPartNumber?id=" + accountValue.AccountID +
            "&tid=SOSA001",
          json: true
        },
        function(error, response, body) {
          console.log("Body: ", body);
          expect(error).toBeNull();
          expect(body).not.toBeNull();
          expect(body.Code).toBe(0, "Error on call.  Message: " + body.Message);

          modelDef.msAccountEquipment(body.Value);
          done();
        });
    });
  });

  /** Lookup by Barcode. */
  // it("Validate getting EquipmentLookup by barcode", function(done) {
  //   dataSource.createMsAccountScratch(request, {
  //     DealerId: 5001,
  //     SeasonId: 1,
  //     TeamLocationId: 1,
  //     SalesRepId: 'SOSA001',
  //     StreetAddress: '1128 E 3300 S',
  //     City: 'Salt Lake City',
  //     StateId: 'UT',
  //     PostalCode: '84106',
  //     PhoneNumber: '(801) 486-8251',
  //     LocalizationId: 'en-us', // *REQUIRED:  This is the default language that they speak.
  //     LeadSourceId: '7', // *REQUIRED:  This is the web.
  //     LeadDispositionId: 9, // *REQUIRED:  This is in what state is the lead.  9: Means "Ran Credit"
  //     Salutation: 'Mr.', // *OPTIONAL
  //     FirstName: 'Kirby', // *REQUIRED
  //     MiddleName: null, // *OPTIONAL
  //     LastName: 'Vacuum', // *REQUIRED
  //     Suffix: 'II', // *OPTIONAL
  //     Gender: 'Male', // *REQUIORED
  //     SSN: '333-33-3333', // *CONDITIONAL:  Either SSN or DOB has to be present or both.
  //     DOB: '12/14/1968', // *CONDITIONAL:  Either SSN or DOB has to be present or both.
  //     Dl: '2342423423', // *OPTIONAL
  //     DlStateId: 'UT', // *OPTIONAL
  //     Email: 'sammy@sam.com', // *REQUIORED
  //     PhoneHome: '(801) 654-9877', // *OPTIONAL
  //     PhoneWork: null, // *OPTIONAL
  //     PhoneMobile: '(909) 987-6790' // *OPTIONAL

  //   }, function(accountValue) {
  //     request.get({
  //         url: config.SseServicesCmsCORS + "MsAccountSetupSrv/Equipments/" + equipment2 + "/ByBarcode?accountId=" + accountValue.AccountID +
  //           "&tid=SOSA001",
  //         json: true
  //       },
  //       function(error, response, body) {
  //         console.log("Body: ", body);
  //         expect(error).toBeNull();
  //         expect(body).not.toBeNull();
  //         expect(body.Code).toBe(0, "Error on call.  Message: " + body.Message);

  //         modelDef.zoneEventType(body.Value);
  //         done();

  //       });
  //   });
  // });
});