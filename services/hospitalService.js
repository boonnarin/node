// services/hospitalService.js
const hospitalModel = require('../models/hospitalModel');

exports.getHospitals = (callback) => {
  hospitalModel.getAllHospitals(callback);
};
