// routes/loginUser.js
const express = require('express');
const router = express.Router();
const db = require('../models/db'); // เชื่อมต่อกับฐานข้อมูล

router.post('/', (req, res) => {
    const { nationalID, phoneNumber } = req.body;

    // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
    if (!nationalID || !phoneNumber) {
        return res.status(400).json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }

    // ค้นหาผู้ใช้ในฐานข้อมูล
    const query = `SELECT * FROM patient_new WHERE NationalID = ? AND PhoneNumber = ?`;
    db.query(query, [nationalID, phoneNumber], (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            return res.status(500).json({ error: 'เกิดข้อผิดพลาดภายในระบบ' });
        }

        if (results.length === 0) {
            // หากไม่พบผู้ใช้
            return res.status(401).json({ error: 'National ID หรือ Phone Number ไม่ถูกต้อง' });
        }

         // หากพบผู้ใช้
         const user = results[0];
         res.render('profile', { user }); // เรนเดอร์หน้า profile.ejs และส่งข้อมูลผู้ใช้
    });
});

module.exports = router;
