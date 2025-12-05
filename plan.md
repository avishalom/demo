# Demo Application Implementation Plan

## Overview
This is a React 19 TypeScript application with a semi-micro-frontend architecture, featuring a collapsible navigation sidebar, Material UI components, and theming support for both MUI and AG Grid.

## Architecture

### Monorepo Structure
We'll use a monorepo approach with npm workspaces:

```
demo/
├── package.json (root workspace config)
├── packages/
│   ├── shared-ui/          # Shared NPM package with common components & utilities
│   │   ├── src/
│   │   │   ├── components/  # Reusable MUI-based components
│   │   │   ├── theme/       # Theme configuration (MUI + AG Grid)
│   │   │   ├── hooks/       # Custom React hooks
│   │   │   └── utils/       # Utility functions
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── main-app/           # Main React application
│       ├── public/
│       │   └── index.html
│       ├── src/
│       │   ├── components/  # App-specific components
│       │   │   ├── Layout/  # AppLayout, Sidebar, TopBar
│       │   │   ├── ContactModal/
│       │   │   └── UsersList/
│       │   ├── pages/
│       │   │   ├── Home.tsx
│       │   │   └── Users.tsx
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── types.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
```

### Technology Stack

**Core:**
- React 19 with TypeScript
- Vite (build tool & dev server)
- React Router DOM v6 (routing)

**UI & Styling:**
- Material UI (MUI) v6
- AG Grid (future integration ready)
- AG Charts (future integration ready)
- Emotion (CSS-in-JS, comes with MUI)

**State Management:**
- React Context API for theme
- React hooks (useState, useReducer) for local state

**Future Considerations:**
- Can be extended to Module Federation for true micro-FE
- Shared package can be published to NPM registry

## Features

### 1. Layout Components
- **TopBar**: Header with app title, theme toggle (dark/light mode)
- **Sidebar**: Collapsible navigation menu with sections
  - Home
  - Users
  - Settings (placeholder)
- **AppLayout**: Main layout wrapper combining TopBar + Sidebar + content area

### 2. Pages

**Home Page:**
- "Hello World" message
- Button to open contact form modal
- Clean, centered layout

**Users Page:**
- Display all registered users in a table/list
- Uses MUI DataGrid or custom table component
- Shows: Name, Email, Phone, Company

### 3. Contact Modal
- Form fields:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Company (optional)
- Form validation
- Saves to frontend state (JSON object in context/state)
- Success notification after save

### 4. Theming System
- Support for dark/light mode toggle
- Theme configuration compatible with:
  - Material UI
  - AG Grid (via CSS variables)
  - AG Charts (via theme objects)
- Persisted theme preference (localStorage)

### 5. Shared UI Package
- Reusable components: Button wrappers, Form inputs, Modal base
- Theme provider and hooks (useTheme)
- Utility functions (form validation, data formatting)
- Type definitions

## Implementation Steps

### Phase 1: Project Setup
1. Initialize root package.json with workspace configuration
2. Create shared-ui package structure
3. Create main-app package structure
4. Install dependencies
5. Configure TypeScript for both packages
6. Configure Vite for main-app

### Phase 2: Shared UI Package
1. Set up theme system (MUI theme + AG Grid theme variables)
2. Create ThemeProvider component
3. Create reusable components:
   - AppLayout, Sidebar, TopBar
   - Modal wrapper
   - Form components
4. Create custom hooks (useLocalStorage, useTheme)
5. Export all components and utilities

### Phase 3: Main Application
1. Set up routing with React Router DOM
2. Create Home page
3. Create Users page
4. Implement ContactModal component
5. Set up global state for user data (Context API)
6. Wire up all navigation

### Phase 4: Theming Integration
1. Implement theme toggle button
2. Apply theme to all components
3. Test dark/light mode switching
4. Add AG Grid theme compatibility (CSS variables)

### Phase 5: Testing & Polish
1. Test all user flows
2. Ensure responsive design
3. Add loading states
4. Add error handling

## How to Install and Run

### Prerequisites: Installing Node.js and npm

**On macOS (your current system):**

Option 1: Using Homebrew (recommended)
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js (includes npm)
brew install node
```

Option 2: Download from nodejs.org
1. Go to https://nodejs.org/
2. Download the LTS version (Long Term Support)
3. Run the installer
4. Follow the installation wizard

**Verify installation:**
```bash
node --version   # Should show v20.x.x or higher
npm --version    # Should show v10.x.x or higher
```

### Running the Application

1. **Install dependencies:**
```bash
cd /Users/vishshalit/claude-repos/demo
npm install
```

This will install dependencies for all packages in the workspace.

2. **Start the development server:**
```bash
npm run dev
```

This will:
- Start Vite dev server
- Open the app at http://localhost:5173
- Enable hot module replacement (changes reflect instantly)

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

### Development Workflow

**Working on shared-ui package:**
- Make changes in `packages/shared-ui/src/`
- Changes are automatically reflected in main-app (linked via workspace)
- Can be published to npm later: `cd packages/shared-ui && npm publish`

**Working on main-app:**
- Make changes in `packages/main-app/src/`
- Import from shared-ui: `import { Button } from '@demo/shared-ui'`
- Hot reload works automatically

**Adding other micro-frontends:**
1. Create new package in `packages/` folder
2. Add to root package.json workspaces
3. Import shared-ui components
4. Can be deployed independently

## Key Technical Decisions

1. **Vite over Create React App**: Faster build times, better DX, native ESM
2. **Monorepo with npm workspaces**: Simpler than Lerna/Turborepo for demo, easy to split later
3. **Context API over Redux**: Sufficient for simple user data management
4. **MUI v6**: Latest version with full React 19 support
5. **Function components + hooks**: Modern React patterns, no classes
6. **TypeScript strict mode**: Better type safety

## Future Enhancements

1. **Module Federation**: For true micro-FE runtime integration
2. **Backend Integration**: Replace frontend JSON with API calls
3. **Form Library**: React Hook Form for complex forms
4. **Testing**: Vitest + React Testing Library
5. **Storybook**: Component documentation
6. **AG Grid Integration**: Add data grid to Users page
7. **AG Charts Integration**: Add analytics dashboard
8. **Authentication**: Add login/logout flow
9. **State Management**: Zustand or Redux Toolkit if needed
10. **CI/CD**: GitHub Actions for automated builds

## Development Tips

- Use `npm run dev` during development for instant feedback
- MUI provides excellent documentation at https://mui.com/
- React Router DOM v6 docs: https://reactrouter.com/
- Check browser console for errors
- Use React DevTools browser extension for debugging

## File Structure Details

After implementation, you'll have:
- `~150-200` TypeScript files (components, pages, utilities)
- `~10-15` configuration files (package.json, tsconfig, vite.config)
- Total project size: ~150MB (mostly node_modules)
- Source code: ~5-10MB

## Timeline Estimate

- Phase 1: 10 minutes (setup)
- Phase 2: 20 minutes (shared-ui)
- Phase 3: 30 minutes (main-app)
- Phase 4: 10 minutes (theming)
- Phase 5: 10 minutes (polish)

Total: ~80 minutes for full implementation
