document.addEventListener('DOMContentLoaded', (event) => {
    var ctx = document.getElementById('myChart').getContext('2d');

    // ข้อมูลสำหรับ scatter plot
    var scatterData = measurements.map(m => ({ x: new Date(m.time).getTime(), y: m.pressure }));

    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Pressure Measurements',
                data: scatterData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'hour'
                    },
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    beginAtZero: true,
                    min: 100,  // ตั้งค่าขั้นต่ำสำหรับแกน y เป็น 100
                    title: {
                        display: true,
                        text: 'Pressure'
                    }
                }
            }
        }
    });
});
