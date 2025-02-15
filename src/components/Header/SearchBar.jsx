import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchWrapper = styled(Box)`
    background: #f0f1f5;
    width: 50%;
    display:flex;
    margin-left: 3%;
    border-radius: 5px;
`

const InputBaseWrapper = styled(InputBase)`
    width: 100%;
    margin-left: 10px;
`

const IconWrapper = styled(SearchIcon)`
    color: #2874f0;
    padding: 5px;
`

function SearchBar(){
    return(
        <SearchWrapper>
            <IconWrapper/>
            <InputBaseWrapper placeholder="Search for Products, Brands and more" />
        </SearchWrapper>
    )
}

export default SearchBar;