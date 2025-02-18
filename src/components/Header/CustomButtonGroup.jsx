import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LoginDialog from "../Login/LoginDialog";

import Profile from "./Profile";

import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const CustomButtonGroupWrapper = styled(Box)`
    display: flex;
    margin-left: 60px; 
    & > div, & > p, & > button {
        margin: 3px 40px 0 0;
    }
    align-items: center;

`

const LoginWrapper = styled(Button)`
    background: #fff;
    color: black;
    text-transform: none;
`

const CartWrapper = styled(Box)`
    display: flex;
    color: black;
`

function CustomButtonGroup() {

    const [open, setOpen] = useState(false)
    const {account, setAccount} = useContext(DataContext) 

    const handleClick = ()=>{
        setOpen(true)
    }

    return(
        <CustomButtonGroupWrapper>
            {
                account ? <Profile account= {account} setAccount={setAccount}/>
                    :
            <LoginWrapper onClick={handleClick}>
                <AccountCircleOutlinedIcon/>
            <Typography style={{marginLeft: '3px'}} >Login</Typography></LoginWrapper>
            }
            <CartWrapper>
                <ShoppingCartOutlinedIcon/>
                <Typography style={{marginLeft: '3px'}} >Cart</Typography>
            </CartWrapper>
            <CartWrapper color="black" ><StorefrontIcon/><Typography style={{marginLeft: '3px'}} > Become a Seller</Typography></CartWrapper>
            <MoreVertOutlinedIcon color="disabled" />
            <LoginDialog open={open} setOpen={setOpen}/>
        </CustomButtonGroupWrapper>
    )
}

export default CustomButtonGroup;