const express = require('express');
const router = express.Router();
const db =  require('../models/db');

// ดึงข้อมูลจังหวัด
router.get('/provinces', (req, res) => {
    const query = 'SELECT * FROM province';
    db.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
});

// ดึงข้อมูลโรงพยาบาลตาม ProvinceID
router.get('/hospitals/:provinceId', (req, res) => {
    const provinceId = req.params.provinceId;
    const query = 'SELECT * FROM hospital WHERE ProvinceID = ?';
    db.query(query, [provinceId], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
});

module.exports = router;
