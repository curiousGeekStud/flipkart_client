import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material"
import SearchBar from "./SearchBar";
import CustomButtonGroup from "./CustomButtonGroup";

const HeaderWrapper = styled(AppBar)`
    background: #fff;
    `

const BoxWrapper = styled(Box)`
    margin-left: 5%;
`

const LogoWrapper = styled(Typography)`
    line-height: 0;
    font-size: 10px;
    color: grey;
`

const FlipWrapper = styled(Typography)`
    color: #2874f0;
    font-size: 27px;
`

const  Header = ()=> {
    return(
        <HeaderWrapper>
            <Toolbar>
            <BoxWrapper>
                <FlipWrapper>Flipkart</FlipWrapper>
                <LogoWrapper>Explore<span style={{color: 'orange', marginLeft: '3px'}}>Plus</span></LogoWrapper>
            </BoxWrapper>
            <SearchBar/>
            <CustomButtonGroup/>
            </Toolbar>
        </HeaderWrapper>
    )
};

export default Header;