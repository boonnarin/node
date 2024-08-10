// services/locationService.js
const provinceModel = require('../models/provinceModel');
const districtModel = require('../models/districtModel');
const subdistrictModel = require('../models/subdistrictModel');

// ดึงข้อมูลจังหวัดทั้งหมด
exports.getProvinces = (callback) => {
  provinceModel.getAllProvinces(callback);
};

// ดึงข้อมูลอำเภอทั้งหมดตาม ProvinceID
exports.getDistrictsByProvince = (provinceId, callback) => {
  districtModel.getDistrictsByProvince(provinceId, callback);
};

// ดึงข้อมูลตำบลทั้งหมดตาม DistrictID
exports.getSubdistrictsByDistrict = (districtId, callback) => {
  subdistrictModel.getSubdistrictsByDistrict(districtId, callback);
};
