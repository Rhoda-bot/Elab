import React from 'react';
import { Link } from 'react-router-dom';
import SIDEBARLIST__SCHEMA from './sidebarList.json';

  interface obj {
    id: number,
    title: string,
    icon: string,
    link: string
  }

function Sidebar() {
  const sidelist: obj[] = SIDEBARLIST__SCHEMA;
  return (
    <div className="sidebar">
      {
              sidelist?.sort().map(({
                id, title, icon, link,
              }) => (
                <div className={` ${window.location.pathname.includes(title.toLowerCase()) ? 'sidebar--changeColor' : 'white'} p-3`} key={id}>
                  <Link to={link} className="link">
                    <span className={`${icon} sidebar--title`} />
                    <span className="m-3 m-3 sidebar--title">{title}</span>
                  </Link>
                </div>
              ))
            }
    </div>
  );
}
export default Sidebar;
