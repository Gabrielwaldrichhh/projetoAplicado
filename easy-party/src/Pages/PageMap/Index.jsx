import  React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Index = () => {
  useEffect(() => {
    const mymap = L.map('map').setView([-26.9212, -49.0395], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap);
  }, []);

  return <div id="map" style={{ height: '100vh' }}></div>;
};

export default Index;
