const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  name: { type: String, required: true },
  organizationNumber: { type: Number, required: false },
  organizationType: { type: String, required: false },
  organizationStatus: { type: String, required: false },
  yearOfEstablishment: { type: Number, required: false },
  officialOrganizationGoals: { type: String, required: false },
  branchActivityClassification: { type: [String], required: false },
  subActivitySubdomain: { type: [String], required: false },
  reportingInLastThreeYears: { type: Boolean, required: false },
  currentProperManagement: { type: Boolean, required: false },
  yearOfLastProperManagement: { type: Number, required: false },
  approvalOfDocumentSubmission: { type: Boolean, required: false },
  activityAreas: { type: [String], required: false },
  cityOfRegistration: { type: String, required: false },
  registrationAddress: { type: String, required: false },
  supportsAccordingToClause3A: { type: Boolean, required: false },
  foreignGovernmentGrants: { type: Boolean, required: false },
  yearOfLastFinancialReport: { type: Number, required: false },
  yearOfLastVerbalReport: { type: Number, required: false },
  organizationMembersVerbalReport: { type: Number, required: false },
  employeesVerbalReport: { type: Number, required: false },
  volunteersVerbalReport: { type: Number, required: false },
  targetAudienceVerbalReport: { type: String, required: false },
  annualTurnover: { type: Number, required: false },
  financialDataForYear: { type: Number, required: false },
  governmentGrantsAndSupport: { type: Number, required: false },
  supportFromLocalAuthorities: { type: Number, required: false },
  otherGrantsAndSupport: { type: Number, required: false },
  servicesToTheState: { type: Number, required: false },
  servicesToLocalAuthorities: { type: Number, required: false },
  generalServices: { type: Number, required: false },
  donationsFromIsrael: { type: Number, required: false },
  donationsFromAbroad: { type: Number, required: false },
  monetaryValueDonations: { type: Number, required: false },
  membershipFees: { type: Number, required: false },
  otherSources: { type: Number, required: false },
  totalExpenses: { type: Number, required: false },
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
