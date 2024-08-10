// routes/hospitalRoutes.js
const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');

// เส้นทาง API สำหรับดึงข้อมูลโรงพยาบาล
router.get('/hospitals', hospitalController.getHospitals);

module.exports = router;
