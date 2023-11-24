import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Sidebar from '../../Components/SideBar/SideBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import AddEvent from '../../Components/AddEvent/AddEvent';

import "./Index.css"

const Index = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Verifica se o mapa já foi inicializado
    if (!mapRef.current) {
      // Inicializa o mapa
      const mymap = L.map('map', { zoomControl: false }).setView([-26.9212, -49.0395], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap);

      // Atualiza a referência do mapa
      mapRef.current = mymap;
    }
  }, []);

  return (
    <main>
      <div className='components'>
        <Sidebar />
        <SearchBar />
        <AddEvent/>
      </div>
      <div id="map" style={{ height: '100vh' }}></div>
    </main>

  );
};

export default Index;
