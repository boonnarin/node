const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// กำหนดเส้นทางสำหรับหน้าแดชบอร์ด
router.get('/', (req, res) => {
  // อ่านข้อมูลจากไฟล์ JSON
  const filePath = path.join(__dirname, '..', 'data', 'polt.json'); // ใช้ชื่อไฟล์ที่ถูกต้อง
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading polt.json:', err);
      res.status(500).send('Error reading data');
      return;
    }
    
    const measurements = JSON.parse(data);
    const pageData = {
      title: 'Dashboard',
      measurements: measurements
    };
    
    res.render('dashboard', pageData);
  });
});

module.exports = router;
