import React from 'react'
import { Box, Button, Grid } from "@mui/material"
import colorBg from "../../assets/color_bg.png"
import "./testimonials.css"

function Careers() {
    return (
        <Box mt={3}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} display={"grid"} sx={{ placeItems: "center" }}>
                    <Box p={5}>
                        <h4 className='pink-header'>Careers</h4>
                        <h4 className='big_header'>Careers at Olvera</h4>
                        <p className='sub-header'>Navigate change, develop on-demand skills. Your turnaround journey starts with Olvera.</p>
                        <Button sx={{
                            color: "#000", bgcolor: "#C2278E", borderRadius: "30px", p: 1, mt: 2, fontSize: "12px", "&:hover": {
                                color: "#000", bgcolor: "#C2278E",
                            },
                            fontWeight: "bold"
                        }}>Search Careers</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} display={"grid"} sx={{ placeItems: "center" }}>
                    <Box width={"70%"} height={"70%"}>
                        <img src={colorBg} alt="" width={"100%"} height="100%" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Careers