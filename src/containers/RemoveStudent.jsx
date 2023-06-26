import React from 'react';
import { Typography, TextField, Button, Container, Grid, Paper } from '@mui/material';

const RemoveStudentPage = () => {
  const handleSearch = () => {
    // Perform search logic here
  };

  const handleConfirm = () => {
    // Perform removal confirmation logic here
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Remove Student
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <TextField label="Student ID" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={handleSearch} fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
          <Button variant="contained" onClick={handleConfirm}>
            Confirm Removal
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default RemoveStudentPage;
