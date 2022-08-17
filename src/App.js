import React from 'react';

import RouteComponent from 'routes/RouteComponent';

import styles from './App.module.scss';

function App() {

  return (
    <div id={styles.pastorApplicationMain}>
      <RouteComponent />
    </div>
  );

}

export default App;
