import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { AuthenticIcon, CustomerServiceIcon, DeliveryIcon } from "../assets/svg";
import BeautifulClock from '../assets/images/collections/image_one.png'
import BeautifulSofa from '../assets/images/collections/image_two.png'
import BeautifulLamp from '../assets/images/collections/image_three.png'


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
    }
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
                <p className="collection-title">Inspiration Collection</p>
                <p className="collection-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Grid container justifyContent="space-evenly" mb={3}>
                    <Box mt={5}>
                        <img src={BeautifulClock} alt="beautifulclock" />
                    </Box>
                    <Box>
                        <img src={BeautifulSofa} alt="beautifulSofa"/>
                    </Box>
                    <Box mt={5}>
                        <img src={BeautifulLamp} alt="beautifulLamp" />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
