import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import Spinner from 'components/generics/spinner/Spinner';

const HomePage = React.lazy(() => import('pages/home-page/HomePage'));
const AllContacts = React.lazy(() => import('pages/all-contacts/AllContacts'));
const USContacts = React.lazy(() => import('pages/us-contacts/USContacts'));

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

  function renderUSContactsPageRoute() {

    const usContactsPageRouteAttributes = {
      path: '/us-contacts',
      element: <USContacts />
    };

    return <Route {...usContactsPageRouteAttributes} />;

  }

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {renderHomePageRoute()}
        {renderAllContactsPageRoute()}
        {renderUSContactsPageRoute()}
      </Routes>
    </Suspense>
  );
}

export default RouteComponent;