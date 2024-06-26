import React, { useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Avatar, Box, Button, Container, Typography, IconButton } from '@mui/material';
import plant from '../Assets/plant.png';
import plant2 from '../Assets/plant2.png';
import logo from '../Assets/logo.png';
import plant3 from '../Assets/plant3.png';
import testomonial from '../Assets/testomonial.png';
import testomonial2 from '../Assets/testomonial2.png';


function Home() {

    const testimonials = [
        {
            text: "Albizia julibrissin Leaf Plant Philodendron bipinnatifidum Silk, Potted plants, potted green leafed plant, artificial Flower, plant Stem, flower png",
            author: "Angelina Jolie",
            image: testomonial
        },
        {
            text: "Another testimonial text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "John Doe",
            image: testomonial2
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handlePrev = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: '60px', background: 'whitesmoke', py: 5 }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 4,
                flexWrap: 'wrap',
                gap: 2,
                '@media (max-width: 600px)': {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 0
                }
            }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar src={logo} />
                    <Typography sx={{ color: 'green', fontSize: { xs: '20px', md: '24px' } }}>Planity</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 3,
                    alignItems: 'center',
                    color: 'green',
                    flexWrap: 'wrap',
                    '@media (max-width: 600px)': {
                        order: 3,
                        width: '100%',
                        justifyContent: 'space-between',
                        mt: 2
                    }
                }}>
                    <Typography sx={{ textDecoration: 'underline' }}>Home</Typography>
                    <Typography>Shop</Typography>
                    <Typography>About us</Typography>
                    <Typography>Contact</Typography>
                </Box>
                <Button sx={{
                    background: 'green',
                    borderRadius: '50px',
                    maxWidth: '156px',
                    width: '100%',
                    color: 'white',
                    fontWeight: 600,
                    '@media (max-width: 600px)': {
                        order: 2,
                        mt: 2
                    }
                }}>Sign In</Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5 }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: { xs: '32px', md: '48px', lg: '64px' }, color: 'lightgreen', mb: 2 }}>Make your home <span style={{ color: '#bd0000' }}>beautiful</span> with plants</Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '18px', color: 'gray' }}>Albizia julibrissin Leaf Plant Philodendron bipinnatifidum Silk, Potted plants, potted green leafed plant, artificial Flower, plant Stem, flower png</Typography>
                        <Button sx={{ background: '#bd0000', borderRadius: '50px', maxWidth: '156px', width: '100%', color: 'white', fontWeight: 600 }}>Learn More</Button>
                    </Box>
                </Box>
                <Box sx={{ flex: 2, position: 'relative', display: 'flex', alignItems: 'flex-end', background: 'antiquewhite', p: 5, borderRadius: '16%' }}>
                    <img src={plant} alt="Plant" style={{ width: '100%' }} />
                    <Box sx={{ position: 'absolute', right: '5%', bottom: '5%', background: 'grey', borderRadius: '16px', padding: '12px', display: 'flex', alignItems: 'center', '@media only screen and (max-width: 743px)': { display: 'none' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography>Pisum Sativam</Typography>
                                <Typography>Monsera</Typography>
                            </Box>
                            <Typography>Learn More</Typography>
                        </Box>
                        <img src={plant} alt="Plant" style={{ width: '100%', maxWidth: '100px' }} />
                    </Box>
                </Box>
            </Box>

            <Typography sx={{ fontSize: { xs: '32px', md: '48px', lg: '64px' }, color: 'lightgreen', textAlign: 'center' }}>New arrivals this week</Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', height: '365px', background: 'azure', borderRadius: '50px', p: 3 }}>
                    <Typography sx={{ fontSize: '24px', color: 'gray', position: 'relative', zIndex: 2 }}>Big Sale Product</Typography>
                    <Typography sx={{ fontSize: { xs: '32px', md: '48px' }, color: 'cadetblue', position: 'relative', zIndex: 2, width: { xs: '100%', md: '50%' } }}>Plant For Interior Decoration</Typography>
                    <Typography sx={{ fontSize: '24px', width: 'fit-content', background: 'cadetblue', position: 'relative', zIndex: 2, color: 'white', fontWeight: 500, borderRadius: '16px', p: 1 }}>Start From $320</Typography>
                    <Typography sx={{ fontSize: '24px', color: 'gray', textDecoration: 'underline', position: 'relative', zIndex: 2 }}>Shop now</Typography>
                    <img src={plant} alt="Plant" style={{ width: '100%', maxWidth: '300px', position: 'absolute', right: 0, bottom: 0, zIndex: 1 }} />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', height: '150px', background: 'antiquewhite', borderRadius: '50px', p: 3 }}>
                        <Typography sx={{ fontSize: '18px', color: 'gray' }}>New category</Typography>
                        <Typography sx={{ fontSize: '24px', color: '#bd0000', width: '50%' }}>Monsera</Typography>
                        <Typography sx={{ fontSize: '18px', color: 'gray', textDecoration: 'underline' }}>Shop now</Typography>
                        <img src={plant} alt="Plant" style={{ width: '100%', maxWidth: '130px', position: 'absolute', right: 0, bottom: 0 }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', height: '150px', background: 'azure', borderRadius: '50px', p: 3 }}>
                        <Typography sx={{ fontSize: '18px', color: 'gray' }}>New Product</Typography>
                        <Typography sx={{ fontSize: '24px', color: 'cadetblue', width: '50%' }}>Plant for Garden</Typography>
                        <Typography sx={{ fontSize: '18px', color: 'gray', textDecoration: 'underline' }}>Shop now</Typography>
                        <img src={plant} alt="Plant" style={{ width: '100%', maxWidth: '130px', position: 'absolute', right: 0, bottom: 0 }} />
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Typography sx={{ fontSize: { xs: '32px', md: '48px', lg: '64px' }, color: 'lightgreen', maxWidth: '580px' }}>Make your home beautiful with plants</Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Box sx={{ fontSize: '24px', borderRadius: '16px', p: 1, border: '1px solid black', color: 'white', background: 'green' }}>All</Box>
                        <Box sx={{ fontSize: '24px', borderRadius: '16px', p: 1, border: '1px solid black', display: 'flex', alignItems: 'center', gap: '8px' }}><Avatar src={plant} />Cactus</Box>
                        <Box sx={{ fontSize: '24px', borderRadius: '16px', p: 1, border: '1px solid black', display: 'flex', alignItems: 'center', gap: '8px' }}><Avatar src={plant2} />Rose</Box>
                        <Box sx={{ fontSize: '24px', borderRadius: '16px', p: 1, border: '1px solid black', display: 'flex', alignItems: 'center', gap: '8px' }}><Avatar src={plant3} />Lily</Box>
                        <Box sx={{ fontSize: '24px', borderRadius: '16px', p: 1, border: '1px solid black', display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}><Avatar src={plant2} />Monsera
                            <Typography sx={{ position: 'absolute', top: -10, right: -10, background: 'pink', border: '1px solid black', borderRadius: '8px', fontSize: '12px', p: '2px 4px' }}>new</Typography>
                        </Box>
                    </Box>
                </Box>
                <img src={plant2} alt="Plant" style={{ width: '100%', maxWidth: '300px' }} />
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {Array.from(Array(8)).map((_, index) => (
                    <Box key={index} sx={{ flex: '1 1 calc(25% - 16px)', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '24px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', p: 2 }}>
                        <img src={plant2} alt="Plant" style={{ width: '100%', maxWidth: '130px' }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '24px', color: 'slategray', fontWeight: 500 }}>Plant</Typography>
                                <Typography sx={{ fontSize: '24px', color: 'sandybrown', fontWeight: 500 }}>$1000</Typography>
                            </Box>
                            <Box sx={{ background: 'black', borderRadius: '50%', p: '4px' }}>
                                <ShoppingBagIcon sx={{ color: 'white' }} />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'center' }}>
                <Box sx={{ background: 'blanchedalmond', borderRadius: '50%', maxWidth: '500px' }}>
                    <img src={plant3} alt="Plant" style={{ width: '100%' }} />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
                    <Typography sx={{ fontSize: { xs: '32px', md: '48px', lg: '64px' }, color: 'lightgreen', mb: 2 }}>We have made the beauty of plants one of the most beautiful feature of your home.</Typography>
                    <Typography sx={{ fontSize: '18px', color: 'gray' }}>Albizia julibrissin Leaf Plant Philodendron bipinnatifidum Silk, Potted plants, potted green leafed plant, artificial Flower, plant Stem, flower png</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'center' }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
                    <Typography sx={{ fontSize: { xs: '32px', md: '48px', lg: '64px' }, color: 'lightgreen', mb: 2 }}>Testomonial highlight</Typography>
                    <Typography sx={{ fontSize: '18px', color: 'gray' }}>{testimonials[currentTestimonial].text}</Typography>
                    <Typography sx={{ color: 'brown', fontWeight: 600 }}>{testimonials[currentTestimonial].author}</Typography>
                    <Box style={{ display: 'flex', gap: '12px' }}>
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                background: 'green',
                                color: 'white',
                                '&:hover': { background: 'darkgreen' },
                                '&.Mui-disabled': {
                                    background: 'lightgray',
                                    color: 'darkgray',
                                    cursor: 'not-allowed'
                                }
                            }}
                            disabled={currentTestimonial === 0}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                background: 'green',
                                color: 'white',
                                '&:hover': { background: 'darkgreen' },
                                '&.Mui-disabled': {
                                    background: 'lightgray',
                                    color: 'darkgray',
                                    cursor: 'not-allowed'
                                }
                            }}
                            disabled={currentTestimonial === testimonials.length - 1}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ background: 'cadetblue', borderRadius: '50%' }}>
                    <img src={testimonials[currentTestimonial].image} alt="Testimonial" style={{ width: '100%' }} />
                </Box>
            </Box>
        </Container>
    );
}

export default Home;
