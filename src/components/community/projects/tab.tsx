import React from 'react';
import { Link } from 'react-router-dom';

function Tabs() {
  return (
    <div className="tab">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Active</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li>

      </ul>
    </div>
  );
}
export default Tabs;
