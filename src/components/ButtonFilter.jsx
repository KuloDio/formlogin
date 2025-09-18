import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import food from '../assets/image/food.png'
import drink from '../assets/image/drink.png'
import snack from '../assets/image/snack.png'
import sambal from '../assets/image/sambal.png'

const ButtonFilter = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            flexWrap: 'wrap',
            height: 'auto',
        }}>
            <Button sx={{
                backgroundColor: '#A5BB86',
                width: { xs: '20%', md: '10%' },
                height: { xs: '5vh', md: '20vh' },
                borderRadius: 5,
                padding: 1,
                justifyItems: 'center',
                textAlign: 'center',
            }}>
                <Box >
                    <img
                        src={food}
                        alt="food"
                        style={{
                            width: "70%",
                        }}
                    />
                    <Typography sx={{
                        fontWeight: '800',
                        fontSize: { xs: 12, md: 18 },
                        color: '#12372A',
                        fontFamily: 'Poppins',
                    }}>
                        FOOD
                    </Typography>
                </Box>
            </Button>
            <Button sx={{
                backgroundColor: '#A5BB86',
                width: { xs: '20%', md: '10%' },
                height: { xs: '5vh', md: '20vh' },
                borderRadius: 5,
                padding: 1,
                justifyItems: 'center',
                textAlign: 'center',
            }}>
                <Box>
                    <img
                        src={drink}
                        alt="drink"
                        style={{
                            width: "45%",
                        }}
                    />
                    <Typography sx={{
                        fontWeight: '800',
                        fontSize: { xs: 12, md: 18 },
                        color: '#12372A',
                        fontFamily: 'Poppins',
                    }}>
                        DRINK
                    </Typography>
                </Box>
            </Button>
            <Button sx={{
                backgroundColor: '#A5BB86',
                width: { xs: '20%', md: '10%' },
                height: { xs: '5vh', md: '20vh' },
                borderRadius: 5,
                padding: 1,
                justifyItems: 'center',
                textAlign: 'center',
            }}>
                <Box>
                    <img
                        src={snack}
                        alt="snack"
                        style={{
                            width: "70%",
                        }}
                    />
                    <Typography sx={{
                        fontWeight: '800',
                        fontSize: { xs: 12, md: 18 },
                        color: '#12372A',
                        fontFamily: 'Poppins',
                    }}>
                        SNACK
                    </Typography>
                </Box>
            </Button>
            <Button sx={{
                backgroundColor: '#A5BB86',
                width: { xs: '20%', md: '10%' },
                height: { xs: '5vh', md: '20vh' },
                borderRadius: 5,
                padding: 1,
                justifyItems: 'center',
                textAlign: 'center',
            }}>
                <Box>
                    <img
                        src={sambal}
                        alt="sambal"
                        style={{
                            width: "70%",
                        }}
                    />
                    <Typography sx={{
                        fontWeight: '800',
                        fontSize: { xs: 12, md: 18 },
                        color: '#12372A',
                        fontFamily: 'Poppins',
                    }}>
                        SAMBAL
                    </Typography>
                </Box>
            </Button>
        </Box>
    )
}

export default ButtonFilter