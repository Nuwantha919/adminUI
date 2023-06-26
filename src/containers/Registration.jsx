{/* Show Registration */}
import React from 'react';
import { Typography, TextField, Button, Container, Grid, Paper } from '@mui/material';

const ClassRegistrationPage = () => {
  const handleSearch = () => {
    // Perform search logic here
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Class Registration
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField label="Class" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleSearch} fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>

      <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
        {/* Content inside the Paper component */}
      </Paper>
    </Container>
  );
};

export default ClassRegistrationPage;
