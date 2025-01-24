import React from 'react';

interface MenuItemProps {
  label: string;
  icon: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon }) => {
  return (
    <div className="menu-item d-flex align-items-center p-2">
      <i className={`bi ${icon} me-2`}></i>
      <span>{label}</span>
    </div>
  );
};

export default MenuItem;