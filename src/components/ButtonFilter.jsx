import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import food from '../assets/image/food.png'
import drink from '../assets/image/drink.png'
import snack from '../assets/image/snack.png'
import cake from '../assets/image/cake.png'

const ButtonFilter = () => {
    const filterFood = () => {
        alert('Fitur ini belum tersedia')
    }
    const filterDrink = () => {
        alert('Fitur ini belum tersedia')
    }
    const filterSnack = () => {
        alert('Fitur ini belum tersedia')
    }
    const filterCake = () => {
        alert('Fitur ini belum tersedia')
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 2, md: 5 },
            flexWrap: 'wrap',
            height: 'auto',
        }}>
            <Button onClick={filterFood}
                sx={{
                    backgroundColor: '#A5BB86',
                    width: { xs: '20%', sm: '20%', md: '10%' },
                    height: { xs: '13vh', md: '20vh' },
                    borderRadius: 5,
                    padding: 1,
                    justifyItems: 'center',
                    textAlign: 'center',
                }}>
                <Box>
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
            <Button onClick={filterDrink} sx={{
                backgroundColor: '#A5BB86',
                width: { xs: '20%', md: '10%' },
                height: { xs: '13vh', md: '20vh' },
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
            <Button onClick={filterSnack} sx={{
                backgroundColor: '#A5BB86',
                width: { xs: '20%', md: '10%' },
                height: { xs: '13vh', md: '20vh' },
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
            <Button onClick={filterCake} sx={{
                backgroundColor: '#A5BB86',
                width: { xs: '20%', md: '10%' },
                height: { xs: '13vh', md: '20vh' },
                borderRadius: 5,
                padding: 1,
                justifyItems: 'center',
                textAlign: 'center',
            }}>
                <Box>
                    <img
                        src={cake}
                        alt="cake"
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
                        CAKE
                    </Typography>
                </Box>
            </Button>
        </Box>
    )
}

export default ButtonFilter