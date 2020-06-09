import React from 'react';

const Header = (props) => {
  const { heading } = props;

  return (
    <div className="header">
      <h1>{ heading }</h1>
    </div>
  );
};

export default Header;
