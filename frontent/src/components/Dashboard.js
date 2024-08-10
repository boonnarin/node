// Dashboard.js
import React from 'react';
import StatsCard from './StatsCard';
import RiskChart from './RiskChart';
import Feeds from './Feeds';
import ProjectListing from './ProjectListing';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="stats-cards">
        <StatsCard title="123" subtitle="เเสดงจำนวนช่องที่1" />
        <StatsCard title="224" subtitle="เเสดงจำนวนช่องที่2" />
        

      </div>
      <div className="chart-and-feeds">
        <RiskChart />
        <Feeds />
      </div>
      <ProjectListing />
    </main>
  );
};

export default Dashboard;
