import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {useFormik} from "formik";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));






const Login = () => {

    const Formik = useFormik({
        initialValues: {
          email:"",
          password:""
        },
        enableReinitialize:true,
        onSubmit:(values,{setSubmitting}) => {
          alert(JSON.stringify(values))
        }
      })
    
  return (
    <Grid container justifyContent={'center'} sx={{height:'100vh'}} alignItems={'center'} spacing={0}>
      
        
          <Box component="span" sx={{border:'5px solid green',padding:'25px',borderRadius:'25px'}}>
          <Grid xs={12} spacing={4}>
            <Typography style={{fontWeight:'bold',textTransform:'uppercase',color:'green',marginBottom:'20px'}} variant="h6" component="div" gutterBottom>
            lütfen giriş yapınız
            </Typography>
            </Grid>
            <form onSubmit={Formik.handleSubmit}>
            <Grid xs={12} justifyContent={'center'}>
            <TextField 
                id="outlined-basic"  
                label="email" 
                variant="outlined" 
                type="email"
                name="email"
                value={Formik.values.email}
                onChange={Formik.handleChange}
            />
            </Grid>
            <Grid xs={12} justifyContent={'center'}>
            
            <TextField 
                sx={{marginTop:'20px'}} 
                id="outlined-basic" 
                type="password" 
                label="Şifre" 
                variant="outlined" 
                name="password"
                value={Formik.values.password}
                onChange={Formik.handleChange}
            />
            </Grid>
            <Grid xs={4} justifyContent={'center'}>
            <Button 
            style={{backgroundColor:'green',marginTop:'20px'}} 
            variant="contained"
            type="submit"
            >
            Giriş</Button>
            </Grid>
            </form>
          </Box>
        

    </Grid>
  );
};

export default Login;
