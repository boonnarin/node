// middleware/authentication.js
const authentication = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    // ตรวจสอบ token ที่นี่
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authentication; // ต้องส่งออกฟังก์ชัน middleware อย่างถูกต้อง
