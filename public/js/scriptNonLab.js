// formHandler.js
$(document).ready(function() {
    $('#nonLabForm').submit(function(event) {
        event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

        // ดึงข้อมูลจากฟอร์ม
        var formData = {
            gender: $('#gender').val(),
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            age: $('#age').val(),
            cvsmk: $('#cvsmk').val(),
            weight: $('#weight').val(),
            height_cm: $('#height_cm').val(),
            sbp1: $('#sbp1').val(),
            sbp2: $('#sbp2').val()
        };

        // ส่งข้อมูลไปยังเซิร์ฟเวอร์ด้วย AJAX
        $.ajax({
            type: 'GET',
            url: '/nonLab',
            data: formData,
            dataType: 'json',
            success: function(response) {
                // แสดงข้อมูลที่ได้รับจากเซิร์ฟเวอร์ในหน้าเว็บ
                $('#result').html(`
                    <div class="card mt-4">
                        <div class="card-body">
                            <h4>ผลการประเมินความเสี่ยง</h4>
                            <p><strong>เพศ:</strong> ${response.gender == 1 ? 'ชาย' : 'หญิง'}</p>
                            <p><strong>ชื่อ:</strong> ${response.firstName} ${response.lastName}</p>
                            <p><strong>อายุ:</strong> ${response.age}</p>
                            <p><strong>สูบบุหรี่:</strong> ${response.cvsmk == 1 ? 'สูบ' : 'ไม่สูบ'}</p>
                            <p><strong>น้ำหนัก:</strong> ${response.weight} kg</p>
                            <p><strong>ส่วนสูง:</strong> ${response.height_cm} cm</p>
                            <p><strong>ความดันโลหิตค่าบน ครั้งที่ 1:</strong> ${response.sbp1} mmHg</p>
                            <p><strong>ความดันโลหิตค่าบน ครั้งที่ 2:</strong> ${response.sbp2} mmHg</p>
                        </div>
                    </div>
                `);
            },
            error: function(xhr, status, error) {
                // ทำงานเมื่อเกิดข้อผิดพลาด
                alert('เกิดข้อผิดพลาด: ' + error);
            }
        });
    });
});
