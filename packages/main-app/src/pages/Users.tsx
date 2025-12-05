import React from 'react';
import { Box, Typography } from '@mui/material';
import { UsersList } from '../components/UsersList';
import { useUsers } from '../contexts/UserContext';

export const Users: React.FC = () => {
  const { users } = useUsers();

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Registered Users
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Here are all the users who have signed up through the contact form.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <UsersList users={users} />
      </Box>
    </Box>
  );
};
