import React from 'react'
import { Box, Container } from "@mui/material"
import playImg from "../../assets/play.svg"


function VideoSection() {



    return (
        <Container>
            <Box width={"100%"} height={"75vh"} position={"relative"}>
                <img src={"https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?size=626&ext=jpg&ga=GA1.1.630789492.1697763205&semt=sph"} alt="" width={"100%"} height="100%" className='dwnld-img' />
                <img className='playImg' src={playImg} alt='' width={"100%"} height="100%" />
            </Box>
        </Container>
    )
}

export default VideoSection