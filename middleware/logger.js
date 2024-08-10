// middleware/logger.js
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };
  
  module.exports = logger; // ต้องมีการส่งออกฟังก์ชัน logger อย่างถูกต้อง
  