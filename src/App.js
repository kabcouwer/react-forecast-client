import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./styles/theme";
import Home from "./views/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Define your routes */}
          <Route path="/" exact element={ <Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
