const mongoose = require("mongoose");
const Organization = require("./models/organizations.model");

async function uploadCompanies(companiesData, startIndex = 0) {
  try {
    await Promise.all(
      companiesData.slice(startIndex).map(async (companyData, index) => {
        try {
          const company = new Organization(companyData);
          await company.save();
          console.log(
            `Company ${startIndex + index + 1} uploaded successfully`
          );
        } catch (error) {
          console.error(
            `Error uploading company ${startIndex + index + 1}:`,
            error.message
          );
        }
      })
    );

    console.log("All companies uploaded successfully");
  } catch (err) {
    console.error("Error uploading companies:", err.message);
  } finally {
    mongoose.connection.close(); // Close the connection after all companies are uploaded
  }
}

module.exports = uploadCompanies;
