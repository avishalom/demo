import React, { createContext, useContext, useState, useCallback } from 'react';
import { User, ContactFormData } from '../types';

interface UserContextType {
  users: User[];
  addUser: (userData: ContactFormData) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = useCallback((userData: ContactFormData) => {
    const newUser: User = {
      id: crypto.randomUUID(),
      ...userData,
      createdAt: new Date().toISOString(),
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }, []);

  const value = {
    users,
    addUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
