const fs = require('fs');

// Load data from JSON file
const locations = JSON.parse(fs.readFileSync('data/locations.json', 'utf8'));

// Helper functions to get unique values
const getProvinces = () => {
    const provinces = {};
    locations.forEach(location => {
        if (!provinces[location.province_code]) {
            provinces[location.province_code] = location.province;
        }
    });
    return Object.entries(provinces).map(([code, name]) => ({ code: parseInt(code), name }));
};

const getDistrictsByProvince = (provinceCode) => {
    const districts = {};
    locations.forEach(location => {
        if (location.province_code === provinceCode) {
            if (!districts[location.amphoe_code]) {
                districts[location.amphoe_code] = location.amphoe;
            }
        }
    });
    return Object.entries(districts).map(([code, name]) => ({ code: parseInt(code), name }));
};

const getSubdistrictsByDistrict = (districtCode) => {
    const subdistricts = locations.filter(location => location.amphoe_code === districtCode)
                                  .map(location => ({
                                      code: location.district_code,
                                      name: location.district
                                  }));
    return subdistricts;
};

module.exports = {
    getProvinces,
    getDistrictsByProvince,
    getSubdistrictsByDistrict
};
