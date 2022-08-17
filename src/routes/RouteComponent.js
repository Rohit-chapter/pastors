import React from 'react';

import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/home-page/HomePage';
import AllContacts from 'pages/all-contacts/AllContacts';

function RouteComponent() {

  function renderHomePageRoute() {

    const homePageRouteAttributes = {
      path: '/',
      element: <HomePage />
    };

    return <Route {...homePageRouteAttributes} />;
  }

  function renderAllContactsPageRoute() {

    const allContactsPageRouteAttributes = {
      path: '/all-contacts',
      element: <AllContacts />
    };

    return <Route {...allContactsPageRouteAttributes} />;
  }

  return (
    <Routes>
      {renderHomePageRoute()}
      {renderAllContactsPageRoute()}
    </Routes>
  );
}

export default RouteComponent;