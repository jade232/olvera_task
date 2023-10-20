import React from 'react'
import { Box, Button } from "@mui/material"
import "./heroSection.css"
import mainBg from "../../../assets/hero_bg.png"

function HeroSection() {
    return (
        // <Box className="main_hero_section" position={"relative"}>
        <Box className="main_hero_section" position={"relative"}>
            <Box width={"100%"} height={"82vh"}>
                <img src={mainBg} alt='' width={"100%"} height={"100%"} />
            </Box>
            <Box position={"absolute"} left={"5%"} top={"40%"}>
                <h4 className='hero_header'>Start your story </h4>
                <br />
                <h4 className='hero_header'>with Olvera</h4>
                <Button sx={{
                    color: "#000", bgcolor: "#C2278E", borderRadius: "30px", p: 1, mt: 2, fontSize: "12px", "&:hover": {
                        color: "#000", bgcolor: "#C2278E",
                    },
                    fontWeight: "bold"
                }}>
                    Contact us
                </Button>
            </Box>
        </Box>
        // </Box>
    )
}

export default HeroSection