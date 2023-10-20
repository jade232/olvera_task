import React from 'react'
import "./footer.css"
import { Box, Grid, Container, Button, Divider } from "@mui/material"
import Img1 from "../../assets/Olvera-Capital-300x49 1.png"
import Img2 from "../../assets/Olvera-First-Logo-BGY-1 2.svg"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function FooterSection() {
    return (
        <Box bgcolor={"#000"} color={"#fff"} py={5}>

            <h4 className='text-center main-header'>We are open and accepting to all.<br />
                Come work with us</h4>
            <p className='text-center para' style={{ margin: "2% 0" }}>Experts teach you everything from the comfort of your own home. Improve your career <br /> today by enrolling in excellent courses at affordable prices.</p>
            <Box className="text-center">
                <Button sx={{
                    color: "#000", bgcolor: "#C2278E", borderRadius: "30px", p: 1, mt: 2, fontSize: "12px", "&:hover": {
                        color: "#000", bgcolor: "#C2278E",
                    },
                    fontWeight: "bold"
                }}>
                    Get Started
                </Button>
            </Box>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box>
                            <div className='footer-img-wrapper'>
                                <img src={Img1} alt='' width={"100%"} height={"100%"} />
                            </div>
                            <div className='footer-img-wrapper'>
                                <img src={Img2} alt='' width={"100%"} height={"100%"} />
                            </div>
                            <p className='para'>Turning Uncertainty Into Your Advantage</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box mt={6}>
                            <h4 className='header'>Resources</h4>
                            <p className='para'>Home</p>
                            <p className='para'>Articles</p>
                            <p className='para'>Videos & Guides</p>
                            <p className='para'>About Us</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box mt={6}>
                            <h4 className='header'>Careers</h4>
                            <p className='para'>Olevera academy</p>
                            <p className='para'>Privacy Policy</p>
                            <p className='para'>Cookies</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box mt={6}>
                            <p className='para'>Liability Limited By A Scheme Approved Under Professional Services Scheme
                                <br />
                                <br />
                                Phone: (64) 09 973 4905
                                <br />
                                <br />
                                Email: ezibuyenquiries@olveraadvisors.com
                                <br />
                                <br />
                                Website: olvera.co.nz/ezibuy
                            </p>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ backgroundColor: "#fff", my: 2 }} />
            <Container>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <h4 className='copyRights'>©2023 olevra advisors. All rights reserved</h4>
                    <Box display={"flex"} gap={3}>
                        <FacebookOutlinedIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default FooterSection