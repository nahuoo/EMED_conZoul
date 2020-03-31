import React from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import '../assets/css/leaflet/leaflet.css';
import Data from '../assets/mapgeojson.js'

// Estilo del div principal del mapa, aca ajusta tamaño
const styles = {
  top:50%
  wrapper: { 
    height: 400, 
    width: '80%', 
    margin: '0 auto', 
    display: 'flex' 
  },
  map: {
    flex: 1
  } 
};
// Estilos del marcador, dibujalo como quieras mientras no la cagues
const geojsonMarkerOptions = {
  radius: 15,
  fillColor: "#EE4266",
  color: "#000",
  weight: 0,
  opacity: 1,
  fillOpacity: 0.7
}
// No toques esto que es necesario
function pointToLayer(feature, latlng) {
  return L.circleMarker(latlng, geojsonMarkerOptions);
}

const Mapa = props => {
  return (
    <div style={styles.wrapper}>
      <Map style={styles.map} center={[-37.982788, -57.559121]} zoom={18}>
        <TileLayer url={props.url} />
        <GeoJSON
        data={Data}
        pointToLayer={pointToLayer}
        />
      </Map>
    </div>
  );
}

// Aca cambias el mapita.
Mapa.defaultProps = {
  url: 'https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
};

export default Mapa;