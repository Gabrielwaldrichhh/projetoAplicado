import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Sidebar from '../../Components/SideBar/SideBar';

const Index = () => {
  const mapRef = useRef(null);
  const markers = useRef([]); // Armazena os marcadores

  useEffect(() => {
    if (!mapRef.current) {
      // Inicializa o mapa
      const mymap = L.map('map',{zoomControl:false}).setView([-26.9212, -49.0395], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap);

      mymap.on('click', function (e) {
        console.log('Clicou no mapa!');
        const customIcon = L.icon({ iconUrl, iconSize: [65, 65], iconAnchor: [30, 30] });

        const marker = L.marker(e.latlng, { icon: customIcon }).addTo(mymap);
        markers.current.push(marker); // Adiciona o marcador à lista

        marker.on('click', function () {
          console.log('Clicou no marcador!');
          const portal = document.getElementById('portal-root');
          if (portal) {
            console.log('Renderizando AddEventPage no portal!');
            createPortal(<AddEventPage />, portal);
          }
        });        
      });

      mymap.on('contextmenu', function () {
        console.log('Clicou com o botão direito!');
        // Remove o último marcador adicionado ao clicar com o botão direito
        const lastMarker = markers.current.pop();
        if (lastMarker) {
          mymap.removeLayer(lastMarker);
        }
      });

      mapRef.current = mymap;
    }
  }, []);

  return (
    <main>
       <Sidebar/>
       <div id="map" style={{ height: '100vh' }}></div>
    </main>
  );
};

export default Index;
