import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { AuthenticIcon, CustomerServiceIcon, DeliveryIcon } from "../assets/svg";
import BeautifulClock from '../assets/images/collections/image_one.png';
import BeautifulSofa from '../assets/images/collections/image_two.png';
import BeautifulLamp from '../assets/images/collections/image_three.png';
import BeautifyImage from '../assets/images/beautify-image.png';
import Bedroom from '../assets/images/range/bedroom.png';
import Dining from '../assets/images/range/dining.png';
import LivingRoom from '../assets/images/range/living-room.png';
import Image1 from '../assets/images/others/image1.png';
import Image2 from '../assets/images/others/image2.png';
import Image3 from '../assets/images/others/image3.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflowX: "hidden"
    },
    container: {
        backgroundColor: "white",
        color: "black",
        padding: "0 7.5rem"
    },
    iconContain: {
        width: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
}));


export default function Project() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.container} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Box className="wordmark">Furniture</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box display="flex" justifyContent="space-between">
                        <li className="nav-link">Home</li>
                        <li className="nav-link">Services</li>
                        <li className="nav-link">Doctors</li>
                        <li className="nav-link">Products</li>
                        <li className="nav-link">Gallery</li>
                    </Box>
                </Grid>
            </Grid>
            <Grid className="main-section">
                <Box display="inline-block" className="overlay">
                    <p className="overlay-title">New Arrival</p>
                    <p className="overlay-header">Discover Our New Collection</p>
                    <p className="overlay-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <Button className="overlay-button">BUY NOW</Button>
                </Box>
            </Grid>
            <Grid className="icon-container" container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="center">
                        <Box className={classes.iconContain}>
                            <DeliveryIcon />
                        </Box>
                        <Box ml={3}>
                            <p className="icon-title">Free Delivery</p>
                            <p className="icon-text">Lorem ipsum dolor sit amet.</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="center">
                        <Box className={classes.iconContain}>
                            <CustomerServiceIcon />
                        </Box>
                        <Box ml={3}>
                            <p className="icon-title">Support 24/7</p>
                            <p className="icon-text">Lorem ipsum dolor sit amet.</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="center">
                        <Box className={classes.iconContain}>
                            <AuthenticIcon />
                        </Box>
                        <Box ml={3}>
                            <p className="icon-title">100% Authentic</p>
                            <p className="icon-text">Lorem ipsum dolor sit amet.</p>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid className="container">
                <p className="title">Inspiration Collection</p>
                <p className="subTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Grid container justifyContent="space-evenly" mb={3}>
                    <Box mt={5}>
                        <img src={BeautifulClock} alt="beautifulclock" />
                    </Box>
                    <Box>
                        <img src={BeautifulSofa} alt="beautifulSofa" />
                    </Box>
                    <Box mt={5}>
                        <img src={BeautifulLamp} alt="beautifulLamp" />
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className="beautify-container">
                    <Box sx={{ width: 514 }} className="beautify-contain">
                        <h2>Beautify Your Space</h2>
                        <p className="beautify-text">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <Button className="beautify-button">Learn More</Button>
                    </Box>
                    <Box>
                        <img src={BeautifyImage} alt="beautifyImage" />
                    </Box>
                </Grid>
            </Grid>
            <Grid className="container">
                <p className="title">Browse The Range</p>
                <p className="subTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Grid container justifyContent="space-evenly" mb={3}>
                    <Box>
                        <img src={Dining} alt="dining" />
                        <p className="caption">Dining</p>
                    </Box>
                    <Box>
                        <img src={LivingRoom} alt="living-room" />
                        <p className="caption">Living</p>
                    </Box>
                    <Box>
                        <img src={Bedroom} alt="bedroom" />
                        <p className="caption">Bedroom</p>
                    </Box>
                </Grid>
            </Grid>
            <hr />
            <Grid className="container">
                <p className="title">How It Works</p>
                <p className="subTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Grid container justifyContent="space-evenly" mb={3}>
                    <Box>
                        <img src={Image1} alt="purchase-sincerly image" />
                        <p className="caption-title">Purchase Sincerly</p>
                        <p className="caption-text">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </Box>
                    <Box>
                        <img src={Image2} alt="warehouse" />
                        <p className="caption-title">Ships From Warehouse</p>
                        <p className="caption-text">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </Box>
                    <Box>
                        <img src={Image3} alt="style your room" />
                        <p className="caption-title">Style Your Room</p>
                        <p className="caption-text">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className="newsletter-container">
                    <Box>
                        <p className="newsletter-title">Join Our Mailing List</p>
                        <p className="newsletter-subTitle">Sign up to receive inspiration, product updates, and special offers from our team.</p>
                        <Box className="mail-container">
                            <Box className="inputMail">
                                example@gmail.com
                            </Box>
                            <Box className="submit">
                                submit
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
