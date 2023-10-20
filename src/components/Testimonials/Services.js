import React from 'react'
import { Box, Grid } from "@mui/material"
import "./testimonials.css"
import LinearProgress from '@mui/material/LinearProgress';

function Services() {

    const List = [
        {
            name: "Sustainability",
            id: "02"
        },
        {
            name: "Small Business",
            id: "03"
        },
        {
            name: "Forensic Services",
            id: "04"
        },
        {
            name: "Risk Management",
            id: "05"
        },
        {
            name: "CFO Advisory",
            id: "06"
        },
    ]

    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Box p={5}>
                        <h4 className='pink-header'>Services</h4>
                        <h4 className='big_header'>Our services that can help your business</h4>
                        <p className='sub-header' style={{marginTop: "12px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    {
                        List.map((list, index) => (
                            <Box p={3} key={index}>
                                <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                                    <h4 className='progress-headers'>{list.name}</h4>
                                    <Box display={"flex"} alignItems={"center"} my={1}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="4" viewBox="0 0 48 4" fill="none">
                                            <path d="M1.00317 2.10125L46.9975 1.81603" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.93975 6.77299L2.02682 11.589L1.96762 2.04305L8.93975 6.77299Z" stroke="#0F0F0F" strokeWidth="2" />
                                        </svg>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress variant="determinate" value={10} sx={{
                                        bgcolor: "#bcbcbc", color: '#000'
                                    }} />
                                </Box>
                            </Box>
                        ))
                    }

                </Grid>
            </Grid>
        </Box>
    )
}

export default Services