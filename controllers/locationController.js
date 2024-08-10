const fs = require('fs');
const path = require('path');

// Load locations data from JSON file
const locations = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/locations.json'), 'utf8'));

// Helper functions to get unique values
const getProvinces = () => {
    const provinces = {};
    locations.forEach(location => {
        if (!provinces[location.province_code]) {
            provinces[location.province_code] = location.province;
        }
    });
    return Object.entries(provinces)
        .map(([code, name]) => ({ code: parseInt(code), name }))
        .sort((a, b) => a.name.localeCompare(b.name));  // Sort by name
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
    return Object.entries(districts)
        .map(([code, name]) => ({ code: parseInt(code), name }))
        .sort((a, b) => a.name.localeCompare(b.name));  // Sort by name
};

const getSubdistrictsByDistrict = (districtCode) => {
    return locations.filter(location => location.amphoe_code === districtCode)
                    .map(location => ({
                        code: location.district_code,
                        name: location.district
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name));  // Sort by name
};

// Controller methods
exports.getProvinces = (req, res) => {
    const provinces = getProvinces();
    res.json(provinces);
};

exports.getDistrictsByProvince = (req, res) => {
    const provinceCode = parseInt(req.params.provinceCode);
    const districts = getDistrictsByProvince(provinceCode);
    res.json(districts);
};

exports.getSubdistrictsByDistrict = (req, res) => {
    const districtCode = parseInt(req.params.districtCode);
    const subdistricts = getSubdistrictsByDistrict(districtCode);
    res.json(subdistricts);
};
