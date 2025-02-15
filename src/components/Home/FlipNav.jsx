import { Box } from "@mui/material";
import { navData } from "../../constants/data";

function FlipNav(){
    return(
        <Box style={{ backgroundColor: '#fff', display: 'flex', textAlign: 'center', justifyContent:'space-between',margin: '55px 130px 0 130px'}}>
            {
                navData.map((data)=>(
                    <Box style={{padding:'12px 8px'}}>
                        <img src={data.url} style={{width: '60px'}}/>
                        <p style={{fontSize: '14px', fontWeight: '600', fontFamily:'inherit'}}>{data.text}</p>
                    </Box>
                ))
            }
        </Box>
    )
}

export default FlipNav;