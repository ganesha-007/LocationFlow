import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

function LocationModal({ onEnableLocation, onSearchManually }) {
  return (
    <Dialog open={true} maxWidth="xs" fullWidth>
      <DialogTitle align="center">Location Permission Required</DialogTitle>
      <DialogContent>
        <Button
          onClick={onEnableLocation}
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            padding: '12px',
            marginBottom: '10px',
            borderRadius: '8px',
            boxShadow: 2,
          }}
        >
          Enable Location
        </Button>
        <Button
          onClick={onSearchManually}
          fullWidth
          variant="contained"
          color="secondary"
          sx={{
            padding: '12px',
            borderRadius: '8px',
            boxShadow: 2,
          }}
        >
          Search Manually
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default LocationModal;
