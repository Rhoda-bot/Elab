import React from 'react';
import { Route } from 'react-router';
import Dashboard from './dashboard';
import Sudo from './impart';

function MainRoute() {
  return (
    <Route path="/" element={<Dashboard />}>
      <Route path="sudo" element={<Sudo />} />
    </Route>
  );
}
export default MainRoute;
