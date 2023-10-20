import React from 'react'
import "./testimonials.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Box, Container } from "@mui/material"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImageIcon from '@mui/icons-material/Image';


function Testimonials() {


    return (
        <Container>
            <Box className="main-one" mb={6}>
                <Box>
                    <h4 className='text-center client-says'>What our clients say about us</h4>
                </Box>
                <Swiper
                    spaceBetween={50}
                    // slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {
                        [{ name: "Aaron Boby", date: "2 November 2021" }, { name: "Daren Axell", date: "29 August 2021" }, { name: "Dion Channing", date: "23 August 2021" }, { name: "Dion Channing", date: "23 August 2021" }].map((list, index) => (
                            <SwiperSlide> <Box p={3} className="slider-box" my={3}>
                                <p className='para-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alipua. Ut enim ad minim veniam, </p>
                                <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} mt={2}>
                                    <Box className="icon_wrapper">
                                        <ImageIcon sx={{ color: "#fff" }} />
                                    </Box>
                                    <Box pl={2}>
                                        <p className='testi-name'>{list.name}</p>
                                        <p className='testi-date'>{list.date}</p>
                                    </Box>
                                </Box>
                            </Box></SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Container>
    )
}

export default Testimonials
