const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.post('/', (req, res) => {
    const {
        firstName,
        lastName,
        dob,
        NationlID,
        PhoneNumber,
        address,
        district,
        subdistrict,
        provinceID,       // ProvinceID
        province,   // ProvinceName
        hospital        // HospitalID from the form
    } = req.body;



    const insertQuery = `
    INSERT INTO patient_new (
        NationalID, FirstName, LastName, BirthDate, Address, 
        ProvinceID, Province, District, Subdistrict, PhoneNumber, HospitalID, DateRegisteredDate, DateRegisteredTime
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURDATE(), CURTIME())
`;

    const values = [
        NationlID, firstName, lastName, dob, address,
        province, provinceID, district, subdistrict, PhoneNumber, hospital
    ];

    db.query(insertQuery, values, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.redirect('/login');
        // res.status(201).json({ message: 'Registration successful' });
    });
    
});
module.exports = router;
