/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './sidebar';

function Dashboard() {
  return (
    <div className="dashboard py-5 h-100">
      <div className="container py-5 h-100">
        <div className="row">
          <div className="col-md-3 ">
            <Sidebar />
          </div>
          <div className="col-md-9 content text-center pl-3 h-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
