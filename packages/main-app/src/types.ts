export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  createdAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
}
