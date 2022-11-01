import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header';
import TravelList from './components/travelList';
import MapContainer from './components/mapContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      {/* <MapContainer /> */}
      <TravelList/>
    </div>
  </React.StrictMode>
);

