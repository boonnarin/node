// routes/locationRoutes.js
const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationControllerDB');

// เส้นทาง API สำหรับดึงข้อมูลจังหวัด อำเภอ และตำบล
router.get('/provinces', locationController.getProvinces);
router.get('/provinces/:provinceId/districts', locationController.getDistrictsByProvince);
router.get('/districts/:districtId/subdistricts', locationController.getSubdistrictsByDistrict);

module.exports = router;
