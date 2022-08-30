/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Outlet, Route, Routes, useNavigate,
} from 'react-router';
import { Link } from 'react-router-dom';
import SIDEBARLIST__SCHEMA from './sidebarList.json';

interface obj {
  id: number,
  title: string,
  icon: string,
  link: string
}

function Dashboard() {
  const sidelist: obj[] = SIDEBARLIST__SCHEMA;
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dashboard py-5">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-3 col-sm-4">

            {
              sidelist?.map(({
                id, title, icon, link,
              }) => (
                <div className={` ${active ? 'dashboard--changeColor' : 'white'} p-2`} key={id}>
                  <Link to={link} className="link">
                    <span className={`${icon} dashboard--title`} />
                    <span className="m-3 m-3 dashboard--title">{title}</span>
                  </Link>
                </div>
              ))
            }
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
