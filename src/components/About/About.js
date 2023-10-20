import React from 'react'
import { Box, Container, Grid } from "@mui/material"
import "./about.css"
import Image1 from "../../assets/image1.png"
import Image2 from "../../assets/image2.png"
import Image3 from "../../assets/image3.png"
import Image4 from "../../assets/image4.png"

function About() {

    const List = [
        Image1, Image2, Image3, Image4
    ]

    return (
        <Box className="main_about_section">
            <Container>
                <Box className="shadow-box"></Box>
                <h4 style={{ color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, letterSpacing: "1.2px" }}>About Olvera</h4>
                <Grid container>
                    <Grid item xs={12} sm={12} md={8}></Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box>
                            <p style={{ color: "#fff", zIndex: 3, fontFamily: "'Archivo', sans-serif", fontWeight: 400, letterSpacing: "1.2px", lineHeight: "1.5em" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container my={4}>
                    {
                        List.map((list, index) => (
                            <Grid xs={6} sm={6} md={3} key={index} display={"grid"} sx={{ placeItems: "center" }}>
                                <Box width={"100px"} height={"100px"}>
                                    <img src={list} alt="" width={"100%"} height={"100%"} className='about-img' />
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default About