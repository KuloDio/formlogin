import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import food from '../assets/image/food.png'
import drink from '../assets/image/drink.png'
import snack from '../assets/image/snack.png'
import cake from '../assets/image/cake.png'
import CancelPresentationSharpIcon from '@mui/icons-material/CancelPresentationSharp';

const ButtonFilter = ({ setFilter }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 2, md: 5 },
                flexWrap: 'wrap',
                height: 'auto',
            }}
        >
            {/* FOOD */}
            <Button
                onClick={() => setFilter('food')}
                sx={{
                    backgroundColor: '#A5BB86',
                    width: { xs: '20%', md: '10%' },
                    height: { xs: '13vh', md: '20vh' },
                    borderRadius: 5,
                    padding: 1,
                    textAlign: 'center',
                    '&:hover': { backgroundColor: '#8EA974' },
                }}
            >
                <Box>
                    <img src={food} alt="food" style={{ width: '70%' }} />
                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: 12, md: 18 },
                            color: '#12372A',
                            fontFamily: 'Poppins',
                        }}
                    >
                        FOOD
                    </Typography>
                </Box>
            </Button>

            {/* DRINK */}
            <Button
                onClick={() => setFilter('drink')}
                sx={{
                    backgroundColor: '#A5BB86',
                    width: { xs: '20%', md: '10%' },
                    height: { xs: '13vh', md: '20vh' },
                    borderRadius: 5,
                    padding: 1,
                    textAlign: 'center',
                    '&:hover': { backgroundColor: '#8EA974' },
                }}
            >
                <Box>
                    <img src={drink} alt="drink" style={{ width: '45%' }} />
                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: 12, md: 18 },
                            color: '#12372A',
                            fontFamily: 'Poppins',
                        }}
                    >
                        DRINK
                    </Typography>
                </Box>
            </Button>

            {/* SNACK */}
            <Button
                onClick={() => setFilter('snack')}
                sx={{
                    backgroundColor: '#A5BB86',
                    width: { xs: '20%', md: '10%' },
                    height: { xs: '13vh', md: '20vh' },
                    borderRadius: 5,
                    padding: 1,
                    textAlign: 'center',
                    '&:hover': { backgroundColor: '#8EA974' },
                }}
            >
                <Box>
                    <img src={snack} alt="snack" style={{ width: '70%' }} />
                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: 12, md: 18 },
                            color: '#12372A',
                            fontFamily: 'Poppins',
                        }}
                    >
                        SNACK
                    </Typography>
                </Box>
            </Button>

            {/* CAKE */}
            <Button
                onClick={() => setFilter('cake')}
                sx={{
                    backgroundColor: '#A5BB86',
                    width: { xs: '20%', md: '10%' },
                    height: { xs: '13vh', md: '20vh' },
                    borderRadius: 5,
                    padding: 1,
                    textAlign: 'center',
                    '&:hover': { backgroundColor: '#8EA974' },
                }}
            >
                <Box>
                    <img src={cake} alt="cake" style={{ width: '95%' }} />
                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: 12, md: 18 },
                            color: '#12372A',
                            fontFamily: 'Poppins',
                        }}
                    >
                        CAKE
                    </Typography>
                </Box>
            </Button>

            {/* SEMUA */}
            <Button
                onClick={() => setFilter('')}
                sx={{
                    backgroundColor: '#A5BB86',
                    width: { xs: '50%', md: '10%' },
                    height: { xs: 'vh', md: '20vh' },
                    borderRadius: 5,
                    padding: 1,
                    textAlign: 'center',
                    placeItems: "center",
                    '&:hover': { backgroundColor: '#8EA974' },
                }}
            >
                <Box>
                    <CancelPresentationSharpIcon sx={{
                        display: {xs: "none", md: "block"},

                    }}/>
                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: 12, md: 15 },
                            color: '#12372A',
                            fontFamily: 'Poppins',
                        }}
                    >
                        RESET FILTER
                    </Typography>
                </Box>
            </Button>
        </Box>
    )
}

export default ButtonFilter
