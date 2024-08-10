document.addEventListener('DOMContentLoaded', function () {
    // Ensure healthData is defined and correctly parsed
    if (typeof healthData !== 'undefined') {
        const dates = healthData.dates;
        const bloodPressure = healthData.bloodPressure;
        const bloodSugar = healthData.bloodSugar;

        // Define the background plugin with rounded corners and border
        const backgroundPlugin = {
            id: 'customCanvasBackgroundColor',
            beforeDraw: (chart, args, options) => {
                const {ctx, width, height} = chart;
                const radius = 20; // รัศมีของขอบมน
                const borderWidth = options.borderWidth || 15; // ความหนาของขอบ
                const borderColor = options.borderColor || '#CCCCCC'; // สีของขอบ
                
                ctx.save();
                ctx.globalCompositeOperation = 'destination-over';
                ctx.fillStyle = options.color || '#F0F0F0'; // สีพื้นหลัง
                ctx.beginPath();
                ctx.moveTo(radius, 0);
                ctx.lineTo(width - radius, 0);
                ctx.quadraticCurveTo(width, 0, width, radius);
                ctx.lineTo(width, height - radius);
                ctx.quadraticCurveTo(width, height, width - radius, height);
                ctx.lineTo(radius, height);
                ctx.quadraticCurveTo(0, height, 0, height - radius);
                ctx.lineTo(0, radius);
                ctx.quadraticCurveTo(0, 0, radius, 0);
                ctx.closePath();
                ctx.fill();

                // Add border
                ctx.lineWidth = borderWidth;
                ctx.strokeStyle = borderColor;
                ctx.stroke();
                
                ctx.restore();
            }
        };

        // Pressure Chart
        var ctx = document.getElementById('pressureChart').getContext('2d');
        var pressureChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Blood Pressure',
                    data: bloodPressure,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    customCanvasBackgroundColor: {
                        color: 'rgba(240, 240, 240, 1)', // กำหนดสีพื้นหลังเป็นสีเทาอ่อน
                        borderWidth: 5, // ความหนาของขอบ
                        borderColor: '#CCCCCC' // สีของขอบ
                    }
                }
            },
            plugins: [backgroundPlugin]
        });

        var ctx2 = document.getElementById('sugarChart').getContext('2d');
        var pressureChart = new Chart(ctx2, {
            type: 'line', // เปลี่ยนจาก 'pie' เป็น 'line'
            data: {
                labels: dates, // วันที่หรือช่วงเวลาที่ต้องการแสดงในกราฟ
                datasets: [{
                    label: 'Blood Sugar Levels', // ป้ายชื่อข้อมูล
                    data: bloodSugar, // ข้อมูลระดับน้ำตาลในเลือด
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // สีพื้นหลังของกราฟ
                    borderColor: 'rgba(75, 192, 192, 1)', // สีขอบของกราฟ
                    borderWidth: 2, // ความหนาของขอบ
                    fill: false // ไม่เติมพื้นที่ใต้กราฟ
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    customCanvasBackgroundColor: {
                        color: 'rgba(240, 240, 240, 1)', // กำหนดสีพื้นหลังเป็นสีเทาอ่อน
                        borderWidth: 5, // ความหนาของขอบ
                        borderColor: '#CCCCCC' // สีของขอบ
                    }
                }
            },
            plugins: [backgroundPlugin]
        });
    } else {
        console.error('healthData is not defined');
    }
});
