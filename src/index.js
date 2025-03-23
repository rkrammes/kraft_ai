// @flow
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Root() {
  // handle local darkMode state here, pass it to <App>
  const [darkMode, setDarkMode] = useState(false);

  // pick which theme tokens to use
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