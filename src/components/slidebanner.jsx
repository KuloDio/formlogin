import React from 'react'
import { Box, Fade } from "@mui/material";
import { useState, useEffect } from "react";
import banner1 from '../assets/image/banner1.png'
import banner2 from '../assets/image/banner2.png'
import banner3 from '../assets/image/banner3.png'
import banner4 from '../assets/image/banner4.png'

const SlideBanner = () => {
    const images = [banner1, banner2, banner3, banner4];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(id);
    }, [images.length]);

    return (
        <Box sx={{
             position: "absolute", 
             width: "100%", 
             minHeight: {xs: 320, md: 500},
             }}>
            {images.map((src, i) => (
                <Fade in={i === index} timeout={5} key={i}>
                    <Box
                        component="img"
                        src={src}
                        sx={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            zIndex: 0,
                        }}
                    />
                </Fade>
            ))}
        </Box>
    )
}

export default SlideBanner