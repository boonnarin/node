const fs = require('fs');
const path = require('path');

exports.renderDashboard = (req, res) => {
    const dataPath = path.join(__dirname, '../data/healthData.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const healthData = JSON.parse(data);
        res.render('dashboards', { healthData });
    });
};
