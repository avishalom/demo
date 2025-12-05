import { createTheme, Theme } from '@mui/material/styles';

export type ThemeMode = 'light' | 'dark';

const commonSettings = {
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as const,
          fontWeight: 500,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none',
        },
      },
    },
  },
};

export const lightTheme: Theme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
});

export const darkTheme: Theme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
});

export const getTheme = (mode: ThemeMode): Theme => {
  return mode === 'light' ? lightTheme : darkTheme;
};

// AG Grid theme CSS variables
export const getAGGridThemeVars = (mode: ThemeMode) => {
  if (mode === 'light') {
    return {
      '--ag-background-color': '#ffffff',
      '--ag-header-background-color': '#f5f5f5',
      '--ag-odd-row-background-color': '#fcfcfc',
      '--ag-row-hover-color': '#e3f2fd',
      '--ag-border-color': '#e0e0e0',
      '--ag-header-foreground-color': 'rgba(0, 0, 0, 0.87)',
      '--ag-foreground-color': 'rgba(0, 0, 0, 0.87)',
      '--ag-secondary-foreground-color': 'rgba(0, 0, 0, 0.6)',
    };
  } else {
    return {
      '--ag-background-color': '#1e1e1e',
      '--ag-header-background-color': '#2d2d2d',
      '--ag-odd-row-background-color': '#252525',
      '--ag-row-hover-color': '#333333',
      '--ag-border-color': '#3d3d3d',
      '--ag-header-foreground-color': '#ffffff',
      '--ag-foreground-color': '#ffffff',
      '--ag-secondary-foreground-color': 'rgba(255, 255, 255, 0.7)',
    };
  }
};
