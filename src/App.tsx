import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import Sidebar from "./components/Sidebar";
import RadioStations from "./components/RadioStations";
import Episodes from "./components/Episodes";
import NewReleases from "./components/NewReleases";
import ExploreMore from "./components/ExploreMore";
import Footer from "./components/Footer";
import Player from "./components/Player";
import "bootstrap/dist/css/bootstrap.min.css";

import "./app.css";

const App: React.FC = () => {
  return (
    <div className="container-fluid p-0 d-flex">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container d-flex flex-column flex-grow-1">
        <div className="main-content flex-grow-1">
          <NavbarComponent />
          <div className="content-wrapper">
            <RadioStations />
            <Episodes />
            <NewReleases />
            <ExploreMore />
            <Player />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
