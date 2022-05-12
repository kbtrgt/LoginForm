import React from "react";
import Login from './components/Login';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}>

            </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
