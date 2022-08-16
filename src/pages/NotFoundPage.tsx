/* eslint-disable react/jsx-filename-extension */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../resources/routes-constants';

function NotFoundPage() {
  const navigate = useNavigate();

  /**
     * Call this function to redirect the user to the homepage.
     */
  const redirectToHomePage = () => {
    navigate(ROUTES.HOMEPAGE_ROUTE);
  };

  return (
    <div style={{
      position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
    }}
    >
      <h1 style={{ fontSize: '4em' }}>Oops 404!</h1>

    </div>
  );
}

export default NotFoundPage;
