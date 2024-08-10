// RiskChart.js
import React from 'react';
import '../styles/RiskChart.css';

const RiskChart = () => {
  return (
    <div className="risk-chart">
      <h3>Chartจำนวนคนที่มีความเสี่ยง</h3>
      <p>ตัวอย่างแผนภูมิ</p>
      {/* ตัวอย่างแผนภูมิ */}
      <div className="chart-placeholder">Chart</div>
    </div>
  );
};

export default RiskChart;
