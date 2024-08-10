document.addEventListener("DOMContentLoaded", function() {
    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');
    const subdistrictSelect = document.getElementById('subdistrict');

    fetch('/provinces')
        .then(response => response.json())
        .then(provinces => {
            provinces.forEach(province => {
                const option = document.createElement('option');
                option.value = province.code;
                option.text = `${province.code}: ${province.name}`; // แสดงรหัสและชื่อจังหวัด
                provinceSelect.appendChild(option);
            });
        });

    provinceSelect.addEventListener('change', function() {
        const provinceCode = this.value;
        fetch(`/provinces/${provinceCode}/districts`)
            .then(response => response.json())
            .then(districts => {
                districtSelect.innerHTML = '';
                subdistrictSelect.innerHTML = '';
                districts.forEach(district => {
                    const option = document.createElement('option');
                    option.value = district.code;
                    option.text = district.name;
                    districtSelect.appendChild(option);
                });
            });
    });

    districtSelect.addEventListener('change', function() {
        const districtCode = this.value;
        fetch(`/districts/${districtCode}/subdistricts`)
            .then(response => response.json())
            .then(subdistricts => {
                subdistrictSelect.innerHTML = '';
                subdistricts.forEach(subdistrict => {
                    const option = document.createElement('option');
                    option.value = subdistrict.code;
                    option.text = subdistrict.name;
                    subdistrictSelect.appendChild(option);
                });
            });
    });
});
