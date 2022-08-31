/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import SIDEBARLIST__SCHEMA from './sidebarList.json';

function Dashboard() {
  return (
    <div className="dashboard py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 ">
            <Sidebar />
          </div>
          <div className="col-md-9 content text-center pl-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
