import React, { useState } from 'react';
import { Box, Toolbar, useTheme as useMuiTheme } from '@mui/material';
import { Sidebar, SidebarItem } from './Sidebar';
import { TopBar } from './TopBar';

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  sidebarItems?: SidebarItem[];
  currentPath: string;
  onNavigate: (path: string) => void;
  themeMode: 'light' | 'dark';
  onThemeToggle: () => void;
}

const DRAWER_WIDTH = 240;
const DRAWER_WIDTH_COLLAPSED = 64;

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  title,
  sidebarItems,
  currentPath,
  onNavigate,
  themeMode,
  onThemeToggle,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = useMuiTheme();

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <TopBar
        title={title}
        themeMode={themeMode}
        onThemeToggle={onThemeToggle}
        onMenuClick={handleSidebarToggle}
      />
      <Sidebar
        open={sidebarOpen}
        onToggle={handleSidebarToggle}
        items={sidebarItems}
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sidebarOpen ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED}px)`,
          marginLeft: `${sidebarOpen ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
