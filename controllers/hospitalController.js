// controllers/hospitalController.js
const hospitalService = require('../services/hospitalService');

exports.getHospitals = (req, res) => {
  hospitalService.getHospitals((error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Error retrieving hospitals' });
    }
    res.json(results);
  });
};
// controllers/hospitalController.js
exports.getHospitalsByProvince = (req, res) => {
    const { provinceId } = req.params;
    hospitalService.getHospitalsByProvince(provinceId, (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Error retrieving hospitals' });
        }
        res.json(results);
    });
};
