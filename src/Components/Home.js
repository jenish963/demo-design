import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import plant from '../Assets/plant.png'
import plant2 from '../Assets/plant2.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Home() {
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', gap: '120px', background: 'whitesmoke' }}>
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 0px' }}>
                <Box style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar src={plant} />
                    <Typography style={{ color: 'green', fontSize: '24px' }}>Planity</Typography>
                </Box>
                <Box style={{ display: 'flex', gap: '24px', alignItems: 'center', color: 'green' }}>
                    <Typography style={{ textDecoration: 'underline' }}>Home</Typography>
                    <Typography>Shop</Typography>
                    <Typography>About us</Typography>
                    <Typography>Contact</Typography>
                </Box>
                <Button style={{ background: 'green', borderRadius: '50px', maxWidth: '156px', width: '100%', color: 'white', fontWeight: 600 }}>Sign In</Button>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <Typography style={{ fontSize: '64px', color: 'lightgreen' }}>Make your home <span style={{ color: '#bd0000' }}>beautiful</span> with plants</Typography>
                    <Box style={{ display: 'flex', gap: '40px', flexDirection: 'column' }}>
                        <Typography style={{ fontSize: '18px', color: 'gray' }}>Albizia julibrissin Leaf Plant Philodendron bipinnatifidum Silk, Potted plants, potted green leafed plant, artificial Flower, plant Stem, flower png</Typography>
                        <Button style={{ background: '#bd0000', borderRadius: '50px', maxWidth: '156px', width: '100%', color: 'white', fontWeight: 600 }}>Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={8} style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', background: 'antiquewhite', padding: '5% 0%', borderRadius: '20%' }}>
                    <img src={plant} />
                    <Box style={{ position: 'absolute', right: '5%', bottom: '5%', display: 'flex', alignItems: 'center' }}>
                        <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Typography>Pisum Sativam</Typography>
                                <Typography>Monsera</Typography>
                            </Box>
                            <Typography>Learn More</Typography>
                        </Box>
                        <img src={plant} style={{ width: '100%', maxWidth: '100px' }} />
                    </Box>
                </Grid>
            </Grid>
            <Typography style={{ fontSize: '64px', color: 'lightgreen', textAlign: 'center' }}>New arrivals in this week</Typography>
            <Grid container spacing={2}>
                <Grid item xs={8} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position: 'relative', height: '400px', background: 'azure', borderRadius: '50px', padding: '20px' }}>
                    <Typography style={{ fontSize: '24px', color: 'gray' }}>Big Sale Product</Typography>
                    <Typography style={{ fontSize: '48px', color: 'cadetblue', width: '50%' }}>Plant For Interior Decoration</Typography>
                    <Typography style={{ fontSize: '24px', width: 'fit-content', background: 'cadetblue', color: 'white', fontWeight: 500, borderRadius: '16px', padding: '6px' }}>Start From $320</Typography>
                    <Typography style={{ fontSize: '24px', color: 'gray', textDecoration: 'underline' }}>shop now</Typography>
                    <img src={plant} style={{ width: '100%', maxWidth: '300px', position: 'absolute', right: 0, bottom: 0 }} />
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '0px' }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position: 'relative', height: '150px', background: 'antiquewhite', borderRadius: '50px', padding: '20px' }}>
                        <Typography style={{ fontSize: '18px', color: 'gray' }}>Big Sale Product</Typography>
                        <Typography style={{ fontSize: '24px', color: '#bd0000', width: '50%' }}>Plant For Interior Decoration</Typography>
                        <Typography style={{ fontSize: '18px', color: 'gray', textDecoration: 'underline' }}>shop now</Typography>
                        <img src={plant} style={{ width: '100%', maxWidth: '130px', position: 'absolute', right: 0, bottom: 0 }} />
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position: 'relative', height: '150px', background: 'azure', borderRadius: '50px', padding: '20px' }}>
                        <Typography style={{ fontSize: '18px', color: 'gray' }}>Big Sale Product</Typography>
                        <Typography style={{ fontSize: '24px', color: 'cadetblue', width: '50%' }}>Plant For Interior Decoration</Typography>
                        <Typography style={{ fontSize: '18px', color: 'gray', textDecoration: 'underline' }}>shop now</Typography>
                        <img src={plant} style={{ width: '100%', maxWidth: '130px', position: 'absolute', right: 0, bottom: 0 }} />
                    </Box>
                </Grid>
            </Grid>

            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    <Typography style={{ fontSize: '64px', color: 'lightgreen', maxWidth: '580px' }}>Make your home beautiful with plants</Typography>
                    <Box style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <Box style={{ fontSize: '24px', borderRadius: '16px', padding: '0px 8px', border: '1px solid black', color: 'white', background: 'green' }}>All</Box>
                        <Box style={{ fontSize: '24px', borderRadius: '16px', padding: '0px 8px', border: '1px solid black' }}>Cactus</Box>
                        <Box style={{ fontSize: '24px', borderRadius: '16px', padding: '0px 8px', border: '1px solid black' }}>Rose</Box>
                        <Box style={{ fontSize: '24px', borderRadius: '16px', padding: '0px 8px', border: '1px solid black' }}>Lily</Box>
                        <Box style={{ fontSize: '24px', borderRadius: '16px', padding: '0px 8px', border: '1px solid black', position: 'relative' }}>Monsera <Typography style={{ position: 'absolute', top: -12, right: -12, background: 'pink', border: '1px solid black', borderRadius: '8px' }}>new</Typography></Box>
                    </Box>
                </Box>
                <img src={plant2} style={{ width: '100%', maxWidth: '300px' }} />
            </Box>

            <Grid container spacing={2}>
                {Array.from(Array(8)).map((_, index) => (
                    <Grid item xs={3} key={index} style={{ background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '24px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <img src={plant2} style={{ width: '100%', maxWidth: '130px' }} />
                        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <Box style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                                <Typography style={{ fontSize: '24px', color: 'slategray', fontWeight: 500 }}>Plant</Typography>
                                <Typography style={{ fontSize: '24px', color: 'sandybrown', fontWeight: 500 }}>$1000</Typography>
                            </Box>
                            <Box style={{ background: 'black', borderRadius: '50%', padding: '4px'}}>
                            <ShoppingBagIcon style={{ color: 'white'}}/>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Home
