import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { ContactModal } from '../components/ContactModal';
import { useUsers } from '../contexts/UserContext';

export const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { addUser } = useUsers();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (data: any) => {
    addUser(data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 200px)',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: 'center',
          maxWidth: 600,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Hello World
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Welcome to the Demo Application! Click the button below to enter your
          contact information and get started.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleOpenModal}
          sx={{ mt: 2 }}
        >
          Enter Contact Information
        </Button>
      </Paper>

      <ContactModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};
