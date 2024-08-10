const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const { compareNonLabCVD } = require('./services/flaskAPI');
const bodyParser = require('body-parser'); // นำเข้า body-parser
const db = require('./models/db'); // นำเข้าการเชื่อมต่อฐานข้อมูล


const app = express();
app.use(express.static('public'));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


// Set engine
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Other configurations and middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(expressSession({
    secret: "node secret",
    resave: false,
    saveUninitialized: false
}));

// Define routes

const indexController = require('./controllers/indexController');
const loginController = require('./controllers/loginController');
const singupController = require('./controllers/singupController');
const locationController = require('./controllers/locationController');
const nonLabController = require('./controllers/nonLabController');

const dashboardRouter = require('./controllers/dashboardController');

const dashboardController = require('./controllers/dashboardControllers');

const locationRoutes = require('./routes/locationRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');
const apiRoutes = require('./routes/apiprovincesH');
const patientRegistrationRoute = require('./routes/patientRegistration');
const loginUserRoute = require('./routes/loginUser'); // เปลี่ยนเส้นทางใหม่
const authRoutes = require('./routes/auth');

const logger = require('./middleware/logger'); // นำเข้า logger middleware
const authentication = require('./middleware/authentication'); // ต้องเป็น middleware function ที่ถูกต้อง


// Routes
app.get('/', indexController);
app.get('/login', loginController);
app.get('/singup', singupController);
app.get('/nonLab',nonLabController  )
app.use('/api', locationRoutes);
app.use('/api', hospitalRoutes);
app.use('/api', apiRoutes);
app.use('/signup', patientRegistrationRoute);
app.use('/login', loginUserRoute); // ใช้เส้นทางใหม่
app.use(authRoutes);
// ใช้ body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger);
app.use('/protected', authentication); // ตรวจสอบว่า authentication เป็นฟังก์ชัน




app.use('/dashboard', dashboardRouter);

app.get('/dashboards', dashboardController.renderDashboard);
// Example route using Flask API service
app.get('/compareNonLabCVD', async (req, res) => {
    try {
        const { sex, smk, sbp, bmi, age } = req.query;
        const result = await compareNonLabCVD(sex, smk, sbp, bmi, age);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from Flask API' });
    }
});

app.get('/nonLab', (req, res) => {
    const data = req.query;
    // ประมวลผลข้อมูลตามที่ต้องการ
    // ส่งข้อมูลกลับมาในรูปแบบ JSON
    res.json(data);
});

// Endpoint to get all provinces
app.get('/provinces', locationController.getProvinces);

// Endpoint to get districts by province code
app.get('/provinces/:provinceCode/districts', locationController.getDistrictsByProvince);

// Endpoint to get subdistricts by district code
app.get('/districts/:districtCode/subdistricts', locationController.getSubdistrictsByDistrict);

/*
// middleware สำหรับใช้ session
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

// เส้นทางที่ต้องการให้มีการรับรองตัวตน
app.get('/protected-route', authenticateUser, (req, res) => {
    // หากผ่านการตรวจสอบการรับรองตัวตน
    res.send('Authorized! You can access this route.');
});

// เส้นทางสำหรับการเข้าสู่ระบบ
app.post('/login', (req, res) => {
    // ตรวจสอบการเข้าสู่ระบบ และเซซชัน
    req.session.user = { username: 'exampleUser' }; // ตั้งค่าข้อมูลผู้ใช้ในเซสชัน

    res.send('Login successful!');
});

// เส้นทางสำหรับการออกจากระบบ
app.get('/logout', (req, res) => {
    // ลบข้อมูลผู้ใช้งานออกจากเซสชัน
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login'); // หลังจากลบเซสชันให้ redirect ไปยังหน้า login
        }
    });
});
*/

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log("Listening on port " + port);
});
