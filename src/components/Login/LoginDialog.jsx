import { Box, Button, Dialog, styled, TextField, Typography } from "@mui/material";
import { useState, useContext } from "react";

import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from "../../context/DataProvider";

const RightDialog = styled(Box)`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 25px 35px;


    & > div, & > p, & > button {
        margin-top: 20px;
    }
`

const signupInitialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}


function LoginDialog({ open, setOpen }){
    
    const [toggle, setToggle] = useState(true)
    const [signup, setSignup] = useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues)

    const {setAccount} = useContext(DataContext)
    // console.log(toggle)
    
    const handleClose = () => {
        console.log('Reached')
        setOpen(false)
        setToggle(true)
    }

    const handleSignUp = async() => {
        let response = await authenticateSignup(signup)
        // console.log(response)
        if (!response) return;
        handleClose();

        setAccount(signup.username)
    }

    const handleToggle = () =>{
        setToggle(false)
    }

    const onInputChange = (e)=>{
        setSignup({...signup, [e.target.name]: e.target.value})
    }

    const onValueChange = (e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const loginUser = async() =>{
        let response = await authenticateLogin(login);
        console.log(response)
        if(response.status === 200){
            handleClose()
            setAccount(response.data.data.username)
        }
    }

    return(
        <Dialog open={open} PaperProps={{ sx: {maxWidth: 'unset'} }} onClose={handleClose}>
            {
                toggle ? 
                <Box style={{display: 'flex', height: '70vh', width: '90vh'}}>
                    <Box style={{ height: '82.4%', width: '40%', padding:'45px 35px' ,background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat' }}>
                        <Typography>Login</Typography>
                        <Typography>Get access to your Orders, Wishlist and Recommendations</Typography>
                    </Box>
                    <RightDialog>
                        <TextField placeholder="Enter username" onChange={(e)=> onValueChange(e)} name="username"/>
                        <TextField placeholder="Password" onChange={(e)=> onValueChange(e)} name="password"/>
                        <Typography style={{fontSize: '12px'}}>By continuing, you agree to Flipkart's <span style={{color:"#2478f0"}}>Terms of Use</span> and <span style={{color:"#2478f0"}}>Privacy Policy</span>.</Typography>
                        <Button style={{textTransform: 'none', color:'#fff', backgroundColor:'#FB641B '}} onClick={()=>loginUser()}>Login</Button>
                        <Button style={{ color:"#2478f0" }} onClick={handleToggle}>New to Flipkart? Create an account</Button>
                    </RightDialog>
                </Box>                
                :
                <Box style={{display: 'flex', height: '70vh', width: '90vh'}}>
                    <Box style={{ height: '82.4%', width: '40%', padding:'45px 35px' ,background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat' }}>
                        <Typography>Looks like you're new here!</Typography>
                        <Typography>Sign up to get started</Typography>
                    </Box>
                    <RightDialog>
                        <TextField placeholder="Enter Name" onChange={(e)=> onInputChange(e)} name="name"/>
                        {/* <TextField placeholder="Enter Lastname"/> */}
                        <TextField placeholder="Enter Username" onChange={(e)=> onInputChange(e)} name="username"/>
                        <TextField placeholder="Enter Email" onChange={(e)=> onInputChange(e)} name="email"/>
                        <TextField placeholder="Enter Mobile number" onChange={(e)=> onInputChange(e)} name="phone" />
                        <TextField placeholder="Password" onChange={(e)=> onInputChange(e)} name="password" />
                        {/* <Typography style={{fontSize: '12px'}}>By continuing, you agree to Flipkart's <span style={{color:"#2478f0"}}>Terms of Use</span> and <span style={{color:"#2478f0"}}>Privacy Policy</span>.</Typography> */}
                        <Button style={{textTransform: 'none', color:'#fff', backgroundColor:'#FB641B '}} onClick={handleSignUp} >Sign Up</Button>
                    </RightDialog>
                </Box>
            }

        </Dialog>
    )
}

export default LoginDialog;