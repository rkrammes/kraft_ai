import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import App from './App';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}
const root = ReactDOM.createRoot(container);

function Root(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

root.render(<Root />);