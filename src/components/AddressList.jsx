import React from 'react';
import { Card, CardContent, Button, Typography, Grid } from '@mui/material';

function AddressList({ addresses }) {
  return (
    <Grid container spacing={2}>
      {addresses.map((addr, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{addr.house}, {addr.road}</Typography>
              <Typography variant="body2" color="textSecondary">{addr.category}</Typography>
              <Button
                color="secondary"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default AddressList;
