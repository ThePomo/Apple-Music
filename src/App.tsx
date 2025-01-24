import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Sidebar from './components/Sidebar';
import RadioStations from './components/RadioStations';
import Episodes from './components/Episodes';
import NewReleases from './components/NewReleases';
import ExploreMore from './components/ExploreMore';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './app.css';

const App: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12 col-md-2 bg-sidebar">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">
          <NavbarComponent />
          <div className="container mt-3">
            <h1 className="text-white">Novità</h1>
            <RadioStations />
            <Episodes />
            <NewReleases />
            <ExploreMore />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;