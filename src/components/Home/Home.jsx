import { Box } from "@mui/material";
import Banner from "./Banner";
import FlipNav from "./FlipNav";

function Home() {
    return(
        <>
            <FlipNav/>
            <Box style={{padding: '20px 10px', background: '#F2F2F2'}}>
                <Banner/>
            </Box>
        </>
    )
}

export default Home;