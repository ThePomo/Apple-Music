import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="d-flex flex-column bg-sidebar d-none d-md-block vh-100 p-3">
      <h4 className="sidebar-brand mb-4 mx-3 d-flex align-items-center">
        <img
          src="/music.svg"
          alt="Apple Music Logo"
          style={{ filter: "invert(1)" }}
        />
      </h4>
      <div className="search-section d-flex flex-column gap-3 mb-4 mx-2">
        <div className="search-container d-flex align-items-center rounded px-2">
          <i className="bi bi-search sideBarIcons"></i>
          <input
            type="text"
            className="form-control border-0 bg-transparent text-white"
            placeholder="Cerca"
            aria-label="Search"
          />
        </div>
      </div>
      <ul className="nav flex-column gap-2">
        <li className="nav-item">
          <a href="#" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-house-door me-2 sideBarIcons"></i> Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-stars me-2 sideBarIcons"></i> Novità
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-broadcast me-2 sideBarIcons"></i> Radio
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
