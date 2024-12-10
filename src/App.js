import React, { useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import LocationModal from './components/LocationModal';
import MapComponent from './components/MapComponent';
import AddressForm from './components/AddressForm';
import AddressList from './components/AddressList';

function App() {
  const [location, setLocation] = useState({ lat: 12.9716, lng: 77.5946 }); // Default location (Bangalore)
  const [addresses, setAddresses] = useState([]); // Store addresses
  const [showLocationModal, setShowLocationModal] = useState(true);

  // Enable location functionality
  const enableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          setShowLocationModal(false);
        },
        (error) => {
          console.error('Error getting location', error);
          alert('Location access denied or unavailable.');
          setShowLocationModal(false);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setShowLocationModal(false);
    }
  };

  // Handle manual search functionality
  const searchManually = () => {
    console.log('Manual Search Mode');
    setShowLocationModal(false);
  };

  // Handle saving the address
  const handleSaveAddress = (newAddress) => {
    // Add the new address to the addresses state
    setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Location Flow App
      </Typography>

      {showLocationModal && (
        <LocationModal
          onEnableLocation={enableLocation}
          onSearchManually={searchManually}
        />
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <MapComponent location={location} onLocationChange={setLocation} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ padding: 2, borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <AddressForm onSave={handleSaveAddress} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '40px' }}>
        <AddressList addresses={addresses} />
      </Box>
    </Container>
  );
}

export default App;
