import React from 'react';

const Visitors = () => {
  const [numVisitors, setNumVisitors] = React.useState(0);

  const handleClick = () => {
    setNumVisitors((prevNumVisitors) => {
      return prevNumVisitors + 1;
    });
    setNumVisitors((prevNumVisitors) => {
      return prevNumVisitors + 1;
    });
    setNumVisitors((prevNumVisitors) => {
      return prevNumVisitors + 1;
    });
  };

  return (
    <div className="visitors">
      <h3>Visitor Counter: {numVisitors}</h3>
      <button
        onClick={handleClick}
      >Record Visitor x3!</button>
    </div>
  );
};

export default Visitors;
