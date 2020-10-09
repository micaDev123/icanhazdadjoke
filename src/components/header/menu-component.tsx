import React from 'react';
import './styles.scss';

const MenuItem = ({ name }: { name: string }) => {
  return (
    <div className="menu-section">
      <div className="menu-item">{name}</div>
    </div>
  );
};

export default MenuItem;
