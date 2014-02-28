/** modelDefinitions.js */
module.exports.salesRepAndTechInfo = function(repInfo) {
  expect(repInfo.UserID).toBeDefined("UserID must be defined.");
  expect(repInfo.UserID).not.toBeNull("UserID can not be null.");
  expect(repInfo.CompanyID).toBeDefined("CompanyID must be defined.");
  expect(repInfo.CompanyID).not.toBeNull("CompanyID can not be null.");
  expect(repInfo.TeamLocationId).toBeDefined("TeamLocationId must be defined.");
  expect(repInfo.TeamLocationId).not.toBeNull("TeamLocationId can not be null.");
  expect(repInfo.DefaultOfficeName).toBeDefined("DefaultOfficeName must be defined.");
  expect(repInfo.DefaultOfficeName).not.toBeNull("DefaultOfficeName can not be null.");
  expect(repInfo.FirstName).toBeDefined("FirstName must be defined.");
  expect(repInfo.FirstName).not.toBeNull("FirstName can not be null.");
  expect(repInfo.LastName).toBeDefined("LastName must be defined.");
  expect(repInfo.LastName).not.toBeNull("LastName can not be null.");
  expect(repInfo.CompanyName).toBeDefined("CompanyName must be defined.");
  expect(repInfo.CompanyName).not.toBeNull("CompanyName can not be null.");
  expect(repInfo.UserName).toBeDefined("UserName must be defined.");
  expect(repInfo.UserName).not.toBeNull("UserName can not be null.");
  expect(repInfo.BirthDate).toBeDefined("BirthDate must be defined.");
  expect(repInfo.BirthDate).not.toBeNull("BirthDate can not be null.");
  expect(repInfo.HomeTown).toBeDefined("HomeTown must be defined.");
  expect(repInfo.HomeTown).not.toBeNull("HomeTown can not be null.");
  expect(repInfo.Sex).toBeDefined("Sex must be defined.");
  expect(repInfo.Sex).not.toBeNull("Sex can not be null.");
  expect(repInfo.ShirtSize).toBeDefined("ShirtSize must be defined.");
  expect(repInfo.ShirtSize).not.toBeNull("ShirtSize can not be null.");
  expect(repInfo.HatSize).toBeDefined("HatSize must be defined.");
  expect(repInfo.HatSize).not.toBeNull("HatSize can not be null.");
  expect(repInfo.PhoneHome).toBeDefined("PhoneHome must be defined.");
  expect(repInfo.PhoneHome).not.toBeNull("PhoneHome can not be null.");
  expect(repInfo.PhoneCell).toBeDefined("PhoneCell must be defined.");
  expect(repInfo.PhoneCell).not.toBeNull("PhoneCell can not be null.");
  expect(repInfo.Email).toBeDefined("Email must be defined.");
  expect(repInfo.Email).not.toBeNull("Email can not be null.");
  expect(repInfo.SSN).toBeDefined("SSN must be defined.");
  expect(repInfo.SSN).not.toBeNull("SSN can not be null.");
  expect(repInfo.ImagePath).toBeDefined("ImagePath must be defined.");
  expect(repInfo.ImagePath).not.toBeNull("ImagePath can not be null.");
  expect(repInfo.Seasons).toBeDefined("Seasons must be defined.");
  expect(repInfo.Seasons.length).toBeDefined("Seasons is an array of seasons so it should be defined even if there are no seasons.");
};

module.exports.lead = function(leadData) {
  expect(leadData.LeadId).toBeDefined("LeadID must be defined.");
  expect(leadData.LeadId).not.toBeNull("LeadID can not be null.");

  expect(leadData.BureauId).toBeDefined("BureauId must be defined.");
  expect(leadData.BureauId).not.toBeNull("BureauId can not be null.");

  expect(leadData.SeasonId).toBeDefined("SeasonId must be defined.");
  expect(leadData.SeasonId).not.toBeNull("SeasonId can not be null.");

  expect(leadData.CreditReportVendorid).toBeDefined("CreditReportVendorid must be defined.");
  expect(leadData.CreditReportVendorid).not.toBeNull("CreditReportVendorid can not be null.");

  expect(leadData.CreditReportVendorAbaraId).toBeDefined("CreditReportVendorAbaraId must be defined.");

  expect(leadData.CreditReportVendorMicrobiltId).toBeDefined("CreditReportVendorMicrobiltId must be defined.");

  expect(leadData.CreditVendorEasyAccessId).toBeDefined("CreditVendorEasyAccessId must be defined.");

  expect(leadData.CreditReportVendorManualId).toBeDefined("CreditReportVendorManualId must be defined.");

  expect(leadData.Score).toBeDefined("Score must be defined.");
  expect(leadData.Score).not.toBeNull("Score can not be null.");

  expect(leadData.IsScored).toBeDefined("IsScored must be defined.");
  expect(leadData.IsScored).not.toBeNull("IsScored can not be null.");

  expect(leadData.IsHit).toBeDefined("IsHit must be defined.");
  expect(leadData.IsHit).not.toBeNull("IsHit can not be null.");

  expect(leadData.CreditGroup).toBeDefined("CreditGroup must be defined.");
  expect(leadData.CreditGroup).not.toBeNull("CreditGroup can not be null.");
};

module.exports.localization = function(localData) {
  expect(localData.LocalizationID).toBeDefined("LocalizationID must be defined.");
  expect(localData.LocalizationID).not.toBeNull("LocalizationID can not be null.");

  expect(localData.MSLocalId).toBeDefined("MSLocalId must be defined.");
  expect(localData.MSLocalId).not.toBeNull("MSLocalId can not be null.");

  expect(localData.LocalizationName).toBeDefined("LocalizationName must be defined.");
  expect(localData.LocalizationName).not.toBeNull("LocalizationName can not be null.");
};

module.exports.address = function(addrData) {
  expect(addrData.AddressID).toBeDefined("AddressID must be defined.");
  expect(addrData.AddressID).not.toBeNull("AddressID can not be null.");

  expect(addrData.DealerId).toBeDefined("DealerId must be defined.");
  expect(addrData.DealerId).not.toBeNull("DealerId can not be null.");
  expect(addrData.DealerId).toBeGreaterThan(0, "DealerId must have a value greater than 0.");

  expect(addrData.TimeZoneId).toBeDefined("TimeZoneId must be defined.");
  expect(addrData.TimeZoneId).not.toBeNull("TimeZoneId can not be null.");
  expect(addrData.TimeZoneId).toBeGreaterThan(0, "TimeZoneId must have a value greater than 0.");

  expect(addrData.StreetAddress).toBeDefined("StreetAddress must be defined.");
  expect(addrData.StreetAddress).not.toBeNull("StreetAddress can not be null.");

  expect(addrData.StreetAddress2).toBeDefined("StreetAddress2 must be defined.");

  expect(addrData.City).toBeDefined("City must be defined.");
  expect(addrData.City).not.toBeNull("City can not be null.");

  expect(addrData.StateId).toBeDefined("StateId must be defined.");
  expect(addrData.StateId).not.toBeNull("StateId can not be null.");

  expect(addrData.PostalCode).toBeDefined("PostalCode must be defined.");
  expect(addrData.PostalCode).not.toBeNull("PostalCode can not be null.");

  expect(addrData.PlusFour).toBeDefined("PlusFour must be defined.");

  expect(addrData.County).toBeDefined("County must be defined.");
  expect(addrData.County).not.toBeNull("County can not be null.");

  expect(addrData.PhoneNumber).toBeDefined("PhoneNumber must be defined.");
  expect(addrData.PhoneNumber).not.toBeNull("PhoneNumber can not be null.");

  expect(addrData.Latitude).toBeDefined("Latitude must be defined.");

  expect(addrData.Longitude).toBeDefined("Longitude must be defined.");

  expect(addrData.Validated).toBeDefined("Validated must be defined.");

  expect(addrData.SalesRepId).toBeDefined("SalesRepId must be defined.");
  expect(addrData.SalesRepId).not.toBeNull("SalesRepId can not be null.");

  expect(addrData.SeasonId).toBeDefined("SeasonId must be defined.");
  expect(addrData.SeasonId).not.toBeNull("SeasonId can not be null.");

  expect(addrData.TeamLocationId).toBeDefined("TeamLocationId must be defined.");
  expect(addrData.TeamLocationId).not.toBeNull("TeamLocationId can not be null.");
};

module.exports.msAccountLeadInfos = function(data) {
  expect(data.AccountID).toBeDefined("AccountID must be defined.");
  expect(data.AccountID).not.toBeNull("AccountID can not be null.");

  expect(data.LeadId).toBeDefined("LeadId must be defined.");
  expect(data.LeadId).not.toBeNull("LeadId can not be null.");

  expect(data.CustomerId).toBeDefined("CustomerId must be defined.");
  expect(data.CustomerId).not.toBeNull("CustomerId can not be null.");

  expect(data.CustomerMasterFileId).toBeDefined("CustomerMasterFileId must be defined.");
  expect(data.CustomerMasterFileId).not.toBeNull("CustomerMasterFileId can not be null.");

  expect(data.IndustryAccountId).toBeDefined("IndustryAccountId must be defined.");

  expect(data.SystemTypeId).toBeDefined("SystemTypeId must be defined.");

  expect(data.CellularTypeId).toBeDefined("CellularTypeId must be defined.");

  expect(data.PanelTypeId).toBeDefined("PanelTypeId must be defined.");

  expect(data.PanelItemId).toBeDefined("PanelItemId must be defined.");

  expect(data.CellPackageItemId).toBeDefined("CellPackageItemId must be defined.");

  expect(data.ContractTemplateId).toBeDefined("ContractTemplateId must be defined.");
};

module.exports.msEmergencyContact = function(emcData) {
  expect(emcData.EmergencyContactID).toBeGreaterThan(0, "The EmergencyContactID must be returned.");
  expect(emcData.CustomerId).toBeDefined("The CustomerId must be defined.");
  expect(emcData.AccountId).toBeGreaterThan(0, "The AccountId must be returned.");
  expect(emcData.RelationshipId).toBeGreaterThan(0, "The RelationshipId must be returned.");
  expect(emcData.OrderNumber).toBeGreaterThan(0, "The OrderNumber must be returned.");
  expect(emcData.Allergies).toBeDefined("This can be null");
  expect(emcData.MedicalConditions).toBeDefined("This can be null");
  expect(emcData.HasKey).not.toBeNull("This is a boolean field.");
  expect(emcData.DOB).toBeDefined("This can be null.");
  expect(emcData.Prefix).toBeDefined("This can be null.");
  expect(emcData.FirstName).not.toBeNull("This is a required field");
  expect(emcData.MiddleName).toBeDefined("This can be null.");
  expect(emcData.LastName).not.toBeNull("This is a required field");
  expect(emcData.Postfix).toBeDefined("This can be null.");
  expect(emcData.Email).toBeDefined("This can be null.");
  expect(emcData.Password).toBeDefined("This can be null.");
  expect(emcData.Phone1).not.toBeNull("This is a required field");
  expect(emcData.Phone1TypeId).not.toBeNull("This is a required field");
  expect(emcData.Phone2).toBeDefined("This can be null.");
  expect(emcData.Phone2TypeId).toBeDefined("This can be null.");
  expect(emcData.Phone3).toBeDefined("This can be null.");
  expect(emcData.Phone3TypeId).toBeDefined("This can be null.");
  expect(emcData.Comment1).toBeDefined("This can be null.");
};

module.exports.msEmergencyContactPhoneType = function(phoneType) {
  expect(phoneType.PhoneTypeID).toBeDefined("PhoneTypeID must be defined.");
  expect(phoneType.PhoneTypeID).not.toBeNull("PhoneTypeID can not be null.");

  expect(phoneType.MonitoringStationOSId).toBeDefined("MonitoringStationOSId must be defined.");
  expect(phoneType.MonitoringStationOSId).not.toBeNull("MonitoringStationOSId can not be null.");

  expect(phoneType.MsPhoneTypeId).toBeDefined("MsPhoneTypeId must be defined.");
  expect(phoneType.MsPhoneTypeId).not.toBeNull("MsPhoneTypeId can not be null.");

  expect(phoneType.PhoneTypeDescription).toBeDefined("PhoneTypeDescription must be defined.");
  expect(phoneType.PhoneTypeDescription).not.toBeNull("PhoneTypeDescription can not be null.");
};

module.exports.msEmergencyContactRelationship = function(relationship) {
  expect(relationship.RelationshipID).toBeDefined("RelationshipID must be defined.");
  expect(relationship.RelationshipID).not.toBeNull("RelationshipID can not be null.");

  expect(relationship.MonitoringStationOSId).toBeDefined("MonitoringStationOSId must be defined.");
  expect(relationship.MonitoringStationOSId).not.toBeNull("MonitoringStationOSId can not be null.");

  expect(relationship.MsRelationshipId).toBeDefined("MsRelationshipId must be defined.");
  expect(relationship.MsRelationshipId).not.toBeNull("MsRelationshipId can not be null.");

  expect(relationship.RelationshipDescription).toBeDefined("RelationshipDescription must be defined.");
  expect(relationship.RelationshipDescription).not.toBeNull("RelationshipDescription can not be null.");

  expect(relationship.IsEVC).toBeDefined("IsEVC must be defined.");
  expect(relationship.IsEVC).not.toBeNull("IsEVC can not be null.");

  expect(relationship.IsActive).toBeDefined("IsActive must be defined.");
  expect(relationship.IsActive).not.toBeNull("IsActive can not be null.");

  expect(relationship.IsDeleted).toBeDefined("IsDeleted must be defined.");
  expect(relationship.IsDeleted).not.toBeNull("IsDeleted can not be null.");

  expect(relationship.CreatedOn).toBeDefined("CreatedOn must be defined.");
  expect(relationship.CreatedOn).not.toBeNull("CreatedOn can not be null.");

  expect(relationship.CreatedBy).toBeDefined("CreatedBy must be defined.");
  expect(relationship.CreatedBy).not.toBeNull("CreatedBy can not be null.");

  expect(relationship.ModifiedOn).toBeDefined("ModifiedOn must be defined.");
  expect(relationship.ModifiedOn).not.toBeNull("ModifiedOn can not be null.");

  expect(relationship.ModifiedBy).toBeDefined("ModifiedBy must be defined.");
  expect(relationship.ModifiedBy).not.toBeNull("ModifiedBy can not be null.");
};

module.exports.aeInvoice = function(invModule, invoiceId, conditionalArgs) {
  expect(invModule.Header).not.toBeNull("Header was not returned.");
  expect(invModule.Header.InvoiceID).toBe(invoiceId, "The invoice id returned did not match the passed invoiceID.");
  expect(invModule.Items).not.toBeNull("There are no invoice items associated with this invoice.");
  expect(invModule.Items.length).toBeGreaterThan(0, "The invoice items list should at least have one item.");
  // console.log("Items: ", invModule.Items);

  /** Check items returned. */
  if (invModule.Items.length > 0) {
    var item = invModule.Items[0];
    // console.log("AeInvoice Items: ", item);
    expect(item.InvoiceItemID).not.toBeNull("Should not be null");
    expect(item.InvoiceId).toBe(invoiceId, "Invoice ID should match the item");
    expect(item.ItemId).not.toBeNull("Should not be null.");
    expect(item.ItemSKU).not.toBeNull("The ItemSKU should not be null.");
    expect(item.ItemDesc).not.toBeNull("The ItemDesc should not be null.");
    expect(item.TaxOptionId).toBe("TAX");
    expect(item.Qty).toBe(1);
    expect(item.Cost).toBeGreaterThan(0);
    expect(item.RetailPrice).toBeGreaterThan(0);
    expect(item.SalesmanID).toBeDefined("SalesmanID should be defined in the object.");
    expect(item.TechnicianID).toBeDefined("TechnicianID should be defined in the object.");
    if (conditionalArgs && conditionalArgs.salesmanIdIsRequired) {
      expect(item.SalesmanID).toBe(conditionalArgs.salesmanId, "TechnicianID should have been passed as " + conditionalArgs.salesmanId);
    }
    if (conditionalArgs && conditionalArgs.salesmanIdIsRequired === false) {
      expect(item.SalesmanID).toBeNull("This should be null since it is not passed on Create Invoice Item call.");
    }
    if (conditionalArgs && conditionalArgs.technicianIdIsRequired) {
      expect(item.TechnicianID).toBe(conditionalArgs.technicianId, "TechnicianID should have been passed as " + conditionalArgs.technicianId);
    }
    if (conditionalArgs && conditionalArgs.technicianIdIsRequired === false) {
      expect(item.TechnicianID).toBeNull("This should be null since it is not passed on Create Invoice Item call.");
    }
  }
};

module.exports.aeInvoiceItem = function(invItem, invoiceId, itemId, itemSku, qty) {
  expect(invItem.InvoiceItemID).toBeGreaterThan(0, "The InvoiceItemID should be greater than zero.");
  expect(invItem.InvoiceId).toBe(invoiceId, "The InvoiceID's should match.");
  if (itemId) {
    expect(invItem.ItemId).toBe(itemId, "The ItemId should be " + itemId + ".");
  }
  expect(invItem.ItemSKU).not.toBeNull("The ItemSKU should not be null.");
  if (itemSku) {
    expect(invItem.ItemSKU).toBe(itemSku, "The ItemSku should be " + itemSku + ".");
  }
  expect(invItem.ItemDesc).not.toBeNull("The ItemDesc should not be null.");
  expect(invItem.TaxOptionId).toBe("TAX", "The TaxOptionId should be , in this case, 'TAX'.");
  expect(invItem.Qty).toBe(qty, "The Qty field should have returned 1.");
  expect(invItem.Cost).toBeGreaterThan(0, "The Cost field should greater than zero.");
  expect(invItem.RetailPrice).toBeGreaterThan(0, "The RetailPrice field should greater than zero.");
  expect(invItem.PriceWithTax).toBeGreaterThan(0, "The PriceWithTax field should greater than zero.");
};

module.exports.serviceType = function(item) {
  expect(item.SystemTypeID).toBeDefined("SystemTypeID has to be defined.");
  expect(item.SystemTypeID).not.toBeNull("SystemTypeID can not be null.");

  expect(item.SystemTypeName).toBeDefined("SystemTypeName has to be defined.");
  expect(item.SystemTypeName).not.toBeNull("SystemTypeName can not be null.");
};

module.exports.panelType = function(item) {
  expect(item.PanelTypeID).toBeDefined("PanelTypeID has to be defined.");
  expect(item.PanelTypeID).not.toBeNull("PanelTypeID can not be null.");

  expect(item.PanelTypeName).toBeDefined("PanelTypeName has to be defined.");
  expect(item.PanelTypeName).not.toBeNull("PanelTypeName can not be null.");
};

module.exports.dslSeizureType = function(item) {
  expect(item.DslSeizureID).toBeDefined("DslSeizureID has to be defined.");
  expect(item.DslSeizureID).not.toBeNull("DslSeizureID can not be null.");

  expect(item.DslSeizure).toBeDefined("DslSeizure has to be defined.");
  expect(item.DslSeizure).not.toBeNull("DslSeizure can not be null.");
};

module.exports.zoneEventType = function(item) {
  expect(item.ZoneEventTypeID).toBeDefined("ZoneEventTypeID has to be defined.");
  expect(item.ZoneEventTypeID).not.toBeNull("ZoneEventTypeID can not be null.");

  expect(item.MonitoringStationOSID).toBeDefined("MonitoringStationOSID has to be defined.");
  expect(item.MonitoringStationOSID).not.toBeNull("MonitoringStationOSID can not be null.");

  expect(item.Descrption).toBeDefined("Descrption has to be defined.");
  expect(item.Descrption).not.toBeNull("Descrption can not be null.");
};

module.exports.equipmentLocation = function(item) {
  expect(item.EquipmentLocaitonID).toBeDefined("EquipmentLocaitonID has to be defined.");
  expect(item.EquipmentLocaitonID).not.toBeNull("EquipmentLocaitonID can not be null.");

  expect(item.EquipmentLocationDesc).toBeDefined("EquipmentLocationDesc has to be defined.");
  expect(item.EquipmentLocationDesc).not.toBeNull("EquipmentLocationDesc can not be null.");

  expect(item.MonitronicsCode).toBeDefined("MonitronicsCode has to be defined.");

  expect(item.CriticomCode).toBeDefined("CriticomCode has to be defined.");

  expect(item.AvantGuardCode).toBeDefined("AvantGuardCode has to be defined.");

  expect(item.LocationCode).toBeDefined("LocationCode has to be defined.");
};

module.exports.accountZoneType = function(item) {
  expect(item.AccountZoneTypeID).toBeDefined("AccountZoneTypeID has to be defined.");
  expect(item.AccountZoneTypeID).not.toBeNull("AccountZoneTypeID can not be null.");

  expect(item.AccountZoneType).toBeDefined("AccountZoneType has to be defined.");
  expect(item.AccountZoneType).not.toBeNull("AccountZoneType can not be null.");
};

module.exports.industryAccountNumber = function(item) {
  expect(item.IndustryAccountID).toBeDefined("IndustryAccountID has to be defined.");
  expect(item.IndustryAccountID).not.toBeNull("IndustryAccountID can not be null.");

  expect(item.AccountId).toBeDefined("AccountId has to be defined.");
  expect(item.AccountId).not.toBeNull("AccountId can not be null.");

  expect(item.ReceiverLineId).toBeDefined("ReceiverLineId has to be defined.");
  expect(item.ReceiverLineId).not.toBeNull("ReceiverLineId can not be null.");

  expect(item.ReceiverLineBlockId).toBeDefined("ReceiverLineBlockId has to be defined.");
  expect(item.ReceiverLineBlockId).not.toBeNull("ReceiverLineBlockId can not be null.");

  expect(item.IndustryAccount).toBeDefined("IndustryAccount has to be defined.");
  expect(item.IndustryAccount).not.toBeNull("IndustryAccount can not be null.");

  expect(item.Designator).toBeDefined("Designator has to be defined.");
  expect(item.Designator).not.toBeNull("Designator can not be null.");

  expect(item.SubscriberNumber).toBeDefined("SubscriberNumber has to be defined.");
  expect(item.SubscriberNumber).not.toBeNull("SubscriberNumber can not be null.");

  expect(item.ReceiverNumber).toBeDefined("ReceiverNumber has to be defined.");
  expect(item.ReceiverNumber).not.toBeNull("ReceiverNumber can not be null.");
};