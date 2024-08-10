// models/districtModel.js
const connection = require('../models/db');

// ฟังก์ชันสำหรับดึงข้อมูลอำเภอโดย ProvinceID
const getDistrictsByProvince = (provinceId, callback) => {
  connection.query('SELECT * FROM district WHERE ProvinceID = ?', [provinceId], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results);
  });
};

module.exports = {
  getDistrictsByProvince,
};
