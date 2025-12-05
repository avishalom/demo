import React, { useState } from 'react';
import {
  TextField,
  Button,
  Stack,
  Alert,
  Snackbar,
} from '@mui/material';
import { Modal } from '@demo/shared-ui';
import { validateContactForm } from '@demo/shared-ui/utils';
import { ContactFormData } from '../../types';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ContactFormData) => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
};

export const ContactModal: React.FC<ContactModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: keyof ContactFormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = () => {
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    onSubmit(formData);
    setFormData(initialFormData);
    setErrors({});
    setShowSuccess(true);
    onClose();
  };

  const handleClose = () => {
    setFormData(initialFormData);
    setErrors({});
    onClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        title="Contact Information"
        maxWidth="sm"
        actions={
          <>
            <Button onClick={handleClose} color="inherit">
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </>
        }
      >
        <Stack spacing={3} sx={{ mt: 2 }}>
          <TextField
            label="Name"
            required
            fullWidth
            value={formData.name}
            onChange={handleChange('name')}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            required
            fullWidth
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Phone"
            fullWidth
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            label="Company"
            fullWidth
            value={formData.company}
            onChange={handleChange('company')}
          />
        </Stack>
      </Modal>
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Contact information saved successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
