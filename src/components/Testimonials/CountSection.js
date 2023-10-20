import React from 'react'
import { Box, Grid, Container } from "@mui/material"
import "./testimonials.css"

function CountSection() {

    const List = [{
        count: "150",
        name: "Projects"
    },
    {
        count: "80",
        name: "Clients"
    }, {
        count: "200",
        name: "Professionals"
    }, {
        count: "97",
        name: "Clients"
    },]


    return (
        <Container sx={{ my: 3 }}>
            <Grid container>
                {
                    List.map((list, index) => (
                        <Grid item xs={6} sm={6} md={3} key={index}>
                            <Box>
                                <h4 className='main-count'>{list.count} +</h4>
                                <h4 className='count-header'>{list.name}</h4>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>

        </Container>
    )
}

export default CountSection