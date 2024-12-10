import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function AddressForm({ onSave }) {
  const [form, setForm] = useState({
    house: '',
    road: '',
    category: 'Home',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSave function passed from App.js to save the new address
    onSave(form);
    setForm({ house: '', road: '', category: 'Home' }); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            name="house"
            label="House/Flat No"
            value={form.house}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="road"
            label="Road/Area"
            value={form.road}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            name="category"
            label="Category"
            value={form.category}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              native: true,
            }}
          >
            <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Friends & Family">Friends & Family</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save Address
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddressForm;
