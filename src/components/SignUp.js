import React,{useState,useEffect} from 'react'
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';





const SignUp = () => {


  const initialValues = {
    username:'',
    email:'',
    password:'',
}

  const [user,setUser] = useState (initialValues);
  const [register, setRegister] = useState([]);

  

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    return user;
  };

 // useEffect(() => {
    
    //  localStorage.setItem("user",JSON.stringify(user))

  //},[user]);

  
  
  const handleSubmit = (handleChange) => {
    handleChange.preventDefault();
    setRegister([
      ...register,
      { username: user.username, email: user.email, password: user.password },
    ]);
    fetch('../User.json', {
      method: 'GET/HEAD',
      body: register,
    });
  };
  console.log(register);
  return (
    
    <div style={{marginTop:'75px',width:'400px',height:'70vh',margin:'0 auto',border:'5px solid pink',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'50px'}}>
    <Typography variant="h3" textAlign={'center'} component="div" gutterBottom sx={{color:'pink'}}>
    Üye Ol
    </Typography>
    <form onSubmit={handleSubmit}  style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px'}}>
    <TextField 
    
     
    type="text" 
    label="Kullanıcı Adı" 
    variant="outlined"
    name="username"
    value={user.value} 
    onChange={HandleInputChange}
    />
      <TextField 
       
      
      type="email" 
      label="Email" 
      variant="outlined"
      name='email' 
      value={user.email}
      onChange={HandleInputChange}
    />
      <TextField 
      
       
      type="password" 
      label="Şifre" 
      variant="outlined" 
      name='password'
      value={user.password}
      onChange={HandleInputChange}
    />

    <Button type="submit"  variant="outlined" sx={{color:'Purple',backgroundColor:'pink'}}>Üye Ol</Button>
    </form>
    </div>
  )
}

export default SignUp;
