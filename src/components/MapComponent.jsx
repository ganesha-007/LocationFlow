import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box } from '@mui/material';

// Marker component to display the red pin on the map
const Marker = ({ text }) => (
  <div style={{ color: 'red', fontSize: '30px', fontWeight: 'bold' }}>
    {text} {/* Red Pin (Marker) */}
  </div>
);

const MapComponent = ({ location, onLocationChange }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Function to update location when the map is clicked
  const handleMapClick = ({ lat, lng }) => {
    // Update the location state to reflect the new pin position
    onLocationChange({ lat, lng });
  };

  return (
    <Box sx={{ height: '450px', width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={location}  // Set initial map center
        defaultZoom={14}          // Set the initial zoom level
        center={location}         // Center map on the location
        onClick={handleMapClick}  // Update location on map click
      >
        {/* The marker will now dynamically update based on the `location` state */}
        <Marker lat={location.lat} lng={location.lng} text="📍" />
      </GoogleMapReact>
    </Box>
  );
};

export default MapComponent;
