import React,{useState} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

const User = () => {
    return(
        <>
            <Grid contaniner justifyContent={'center'} sx={{border:'10px solid black',height:'85vh'}}>
            

                        
                
            </Grid>
        
            <Link to="/">
            <button>GERİ</button>
        </Link>
        </>
    )
}

export default User;