import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

interface TopBarProps {
  title: string;
  themeMode: 'light' | 'dark';
  onThemeToggle: () => void;
  onMenuClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  title,
  themeMode,
  onThemeToggle,
  onMenuClick,
}) => {
  const theme = useMuiTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: `0 1px 3px ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        {onMenuClick && (
          <IconButton
            color="inherit"
            aria-label="toggle menu"
            onClick={onMenuClick}
            edge="start"
            sx={{
              marginRight: 2,
              display: { sm: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            onClick={onThemeToggle}
            color="inherit"
            aria-label="toggle theme"
          >
            {themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
