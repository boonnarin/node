// models/subdistrictModel.js
const connection = require('../models/db');

// ฟังก์ชันสำหรับดึงข้อมูลตำบลโดย DistrictID
const getSubdistrictsByDistrict = (districtId, callback) => {
  connection.query('SELECT * FROM subdistrict WHERE DistrictID = ?', [districtId], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results);
  });
};

module.exports = {
  getSubdistrictsByDistrict,
};
