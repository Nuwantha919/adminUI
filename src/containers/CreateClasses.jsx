import React from 'react';
import { Typography, TextField, Button, Container, Grid, Paper } from '@mui/material';

const ClassCreationPage = () => {
  const handleCreateClass = () => {
    // Perform class creation logic here
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Class Creation
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <TextField label="Class Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Class Teacher ID" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleCreateClass} fullWidth>
              Create Class
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ClassCreationPage;
