import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export const Settings: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" color="text.secondary">
          Settings page coming soon...
        </Typography>
      </Paper>
    </Box>
  );
};
