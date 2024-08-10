// controllers/formController.js

const formController = {
    processForm: (req, res) => {
        // ดึงข้อมูลจาก query parameters
        const { gender, firstName, lastName, age, cvsmk, weight, height_cm, sbp1, sbp2 } = req.query;

        // การประมวลผลหรือการคำนวณต่างๆ สามารถเพิ่มได้ที่นี่
        const result = {
            gender,
            firstName,
            lastName,
            age,
            cvsmk,
            weight,
            height_cm,
            sbp1,
            sbp2,
            // เพิ่มการประมวลผลข้อมูลที่ต้องการ
        };

        // ส่งผลลัพธ์กลับไปที่ client ในรูปแบบ JSON
        res.json(result);
    }
};

module.exports = formController;
