const express = require("express");
const app = express();
const uploadCompanies = require("./uploadCompanies");

const XLSX = require("xlsx");
const path = require("path");

// Path to your Excel file
const excelFilePath = path.join(__dirname, "example.xlsx");

// Load the Excel file
const workbook = XLSX.readFile(excelFilePath);

// Choose the first sheet in the workbook
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert the sheet to JSON object
const data = XLSX.utils.sheet_to_json(sheet);
console.log(data);

// Export the app
module.exports = app;

// Wait for 'appStarted' event before uploading companies
app.on("appStarted", () => {
  if (!data) {
    throw new Error("Error uploading");
  }
  uploadCompanies(data);
});
