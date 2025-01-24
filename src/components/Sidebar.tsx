import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar bg-sidebar text-white p-3">
      <h4 className="sidebar-brand mb-4"> Music</h4>

      <div className="search-section mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca"
          aria-label="Search"
        />
      </div>
      <ul className="list-unstyled">
        <li className="mb-2">
          <i className="bi bi-house me-2"></i> Home
        </li>
        <li className="mb-2">
          <i className="bi bi-stars me-2"></i> Novità
        </li>
        <li className="mb-2">
          <i className="bi bi-broadcast me-2"></i> Radio
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;