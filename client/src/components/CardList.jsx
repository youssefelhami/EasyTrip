import React from "react";
import Grid from "@mui/material/Grid";
import CustomCard from "./Card";

const CardList = ({countries}) => {
    console.log("country data: ", countries)
    return (
        countries && countries.length > 0 &&
        <>
            
            <Grid container spacing={2} alignItems="center" justify="center" sx={{
                marginTop: "20px"
            }}>
                {/* ticket, daily_accommodation, daily_food, daily_miscellaneous, currency, exchange_rate */}
               {countries.map((trip) => (
                    <CustomCard
                        key={trip._id}
                        image={trip.image}
                        cost={trip.total_price}
                        days={trip.n_trip_days}
                        city={trip.city}
                        country={trip.country}
                        weather={trip.weather}
                        meals={trip.meals}
                        ticket={trip.ticket}
                        daily_accommodation={trip.daily_accommodation}
                        daily_food={trip.daily_food}
                        daily_miscellaneous={trip.daily_miscellaneous}
                        currency={trip.currency}
                        exchange_rate={trip.exchange_rate}
                    />
               ))}
            </Grid>   
        </>
    )
}

export default CardList