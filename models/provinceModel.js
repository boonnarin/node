// models/provinceModel.js
const connection = require('../models/db');

// ฟังก์ชันสำหรับดึงข้อมูลจังหวัดทั้งหมด
const getAllProvinces = (callback) => {
  connection.query('SELECT * FROM province', (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results);
  });
};

// ฟังก์ชันสำหรับดึงข้อมูลจังหวัดโดย ID
const getProvinceById = (provinceId, callback) => {
  connection.query('SELECT * FROM province WHERE ProvinceID = ?', [provinceId], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results[0]);
  });
};

module.exports = {
  getAllProvinces,
  getProvinceById,
};
