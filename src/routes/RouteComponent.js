import React from 'react';

import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/home-page/HomePage';

function RouteComponent() {

  function renderHomePageRoute() {

    const homePageRouteAttributes = {
      path: '/',
      element: <HomePage />
    };

    return <Route {...homePageRouteAttributes} />;
  }

  return (
    <Routes>
      {renderHomePageRoute()}
    </Routes>
  );
}

export default RouteComponent;