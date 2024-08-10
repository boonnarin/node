const axios = require('axios');

const flaskAPI = 'http://localhost:5000';  // URL ของ Flask API

async function compareNonLabCVD(sex, smk, sbp, bmi, age) {
    try {
        const response = await axios.post(`${flaskAPI}/compare_nonLab_CVD`, {
            sex: sex,
            smk: smk,
            sbp: sbp,
            bmi: bmi,
            age: age
        });

        return response.data;  // ส่งข้อมูลที่ได้รับจาก Flask API กลับไปยังโมดูลที่เรียกใช้งาน
    } catch (error) {
        console.error("Error calling Flask API:", error.message);
        throw error;  // ส่งข้อผิดพลาดไปยังโมดูลที่เรียกใช้งาน
    }
}

module.exports = {
    compareNonLabCVD
};
