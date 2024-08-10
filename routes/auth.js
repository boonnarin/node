const express = require('express');
const router = express.Router();

// การจัดการเส้นทางสำหรับ /logout
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.redirect('/');
    }
    res.clearCookie('connect.sid'); // ลบคุกกี้ที่ใช้ในการจัดการ session
    res.redirect('/login');
  });
});

module.exports = router;