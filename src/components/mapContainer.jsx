import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../../src/styles/map-container.scss";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div className="container">
      <div className="map__container m-4">
        <MapContainer center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};
export default Map;
