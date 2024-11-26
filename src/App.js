import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/exercise/:id" element={<ExerciseDetail/>} />
        </Routes>              
        <Footer/>
      </Box>
    </Router>
  );
};

export default App;
