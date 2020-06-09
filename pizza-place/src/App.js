import React from 'react';
import Header from './components/Header';
// import Visitors from './components/Visitors';
import Pizza from './components/Pizza';

import './App.css';

const App = () => {
  const [heading] = React.useState(`Pat's Pizza Place`);

  return (
    <div className="App">
      <Header heading={heading}/>
      {/* <Visitors/> */}
      <Pizza />
    </div>
  );
};

export default App;
