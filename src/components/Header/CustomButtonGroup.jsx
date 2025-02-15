import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

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
    return(
        <CustomButtonGroupWrapper>
            <LoginWrapper>
                <AccountCircleOutlinedIcon/>
                <Typography style={{marginLeft: '3px'}} >Login</Typography></LoginWrapper>
            <CartWrapper>
                <ShoppingCartOutlinedIcon/>
                <Typography style={{marginLeft: '3px'}} >Cart</Typography>
            </CartWrapper>
            <CartWrapper color="black" ><StorefrontIcon/><Typography style={{marginLeft: '3px'}} > Become a Seller</Typography></CartWrapper>
            <MoreVertOutlinedIcon color="disabled" />
        </CustomButtonGroupWrapper>
    )
}

export default CustomButtonGroup;