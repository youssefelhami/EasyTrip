import React, {useState} from 'react';
import { CardActionArea, Grid, Typography, CardMedia, CardContent, Card, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';


const CustomCard = ({image, cost, days, city, country, weather, meals, ticket, daily_accommodation, daily_food, daily_miscellaneous, currency, exchange_rate}) => {
    const [open, setOpen] = useState(false);
    console.log("weather: ", weather)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const firstThreeDishes = meals.slice(0, 3);

    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleClickOpen}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="country image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {capitalize(city)} <strong>{capitalize(country)}</strong>
                        </Typography>
                        {/* Create a box that contains the total trip price */}
                        <Typography variant="h6" color="text.secondary">
                            <strong>Cost:</strong> {cost} EGP
                            <br/>
                            <strong>Days:</strong> {days}
                        </Typography>                        
                    </CardContent>
                </CardActionArea>
            </Card>   
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Weather Information</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {weather && weather.length > 0 ? weather.map((day, index) => (
                            <div>
                                <div key={index}>
                                    Day <strong>{index + 1}</strong>: <strong>{parseInt(day.day - 273.15)}°</strong> {parseInt(day.night - 273.15)}°
                                </div>
                            </div>
                        )): <div>Weather information is not available for this period.</div>}
                        <br/>
                        { meals && meals.length > 0 && <Typography gutterBottom variant='h6' component="div" >
                            Popular Dishes:
                        </Typography> 
                        }
                        <ul>
                            {firstThreeDishes.map((meal, index) => (
                                <li key={index}>{meal}</li>
                            ))}
                        </ul>
                        <Typography gutterBottom variant='h6' component="div" >
                            More information:
                        </Typography>
                        
                        Ticket price: {ticket} EGP
                        <br/>
                        Daily accommodation: {daily_accommodation} EGP
                        <br/>
                        Daily food: {daily_food} EGP
                        <br/>
                        Daily miscellaneous: {daily_miscellaneous} EGP
                        <br/>
                        Exchange rate: 1 EGP = {exchange_rate} {currency}
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

        </Grid>
    )
}

export default CustomCard