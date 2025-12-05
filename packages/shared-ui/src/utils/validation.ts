export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone);
};

export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateContactForm = (data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
}): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!isNotEmpty(data.name)) {
    errors.name = 'Name is required';
  }

  if (!isNotEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Invalid phone number format';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
