// models/hospitalModel.js
const connection = require('../models/db');

// ฟังก์ชันสำหรับดึงข้อมูลโรงพยาบาลทั้งหมด
const getAllHospitals = (callback) => {
  const query = `
    SELECT HospitalID, HospitalName, Affiliation, Organization_type, ministryID, ministry 
    FROM hospital
  `;
  db.query(query, (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results);
  });
};

module.exports = {
  getAllHospitals,
};
