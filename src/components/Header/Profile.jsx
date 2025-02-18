import { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { PowerSettingsNewOutlined } from "@mui/icons-material";

function Profile({account, setAccount}){
    const [open, setOpen] = useState(false);

    const handleClick = (event) =>{
        setOpen(event.currentTarget)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    const logoutUser = ()=>{
        setAccount('')
    }

    return(
        <>
            <Box onClick={handleClick}>
                <Typography style={{marginTop: 2, cursor: 'pointer'}} color="black">{account}</Typography>
            </Box>
            <Menu
                anchorEl={open}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'arai-labelledby': 'basic-button',
                }}
                style={{ marginTop: '5px' }}
            >
                <MenuItem onClick={()=>{handleClose(); logoutUser()}}>
                <PowerSettingsNewOutlined fontSize="small"/>
                    <Typography style={{ fontSize: '14px'}}>Logout</Typography>
                </MenuItem>
            </Menu>
            </>
    )
}

export default Profile;