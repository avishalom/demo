import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme, AppLayout } from '@demo/shared-ui';
import { UserProvider } from './contexts/UserContext';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Settings } from './pages/Settings';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, toggleTheme } = useTheme();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <AppLayout
      title="Demo Application"
      currentPath={location.pathname}
      onNavigate={handleNavigate}
      themeMode={mode}
      onThemeToggle={toggleTheme}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppLayout>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <AppContent />
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
