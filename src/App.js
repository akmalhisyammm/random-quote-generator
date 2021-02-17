import React, { useState } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}));

const App = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  });

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <header>
            <Header 
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </header>
          <main>
            <Content />
          </main>
          <footer>
            <Footer />
          </footer>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
