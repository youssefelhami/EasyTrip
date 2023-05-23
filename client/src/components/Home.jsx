import React from 'react';
// import { makeStyles } from '@mui/styles';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   header: {
//     marginBottom: theme.spacing(4),
//   },
//   heroImage: {
//     height: '400px',
//     backgroundSize: 'cover',
//   },
//   card: {
//     display: 'flex',
//   },
//   cardMedia: {
//     width: 160,
//   },
//   cardContent: {
//     flex: 1,
//   },
//   exploreButton: {
//     marginTop: theme.spacing(2),
//   },
// }));

const HomePage = () => {
//   const classes = useStyles();

  return (
    <div >
      <Container maxWidth="lg">
        <header sx={{
            paddingTop: "40px",
        }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{
                fontWeight: "bold",
                marginTop: "20px",
          }}>
            Discover Your Next Adventure
          </Typography>
          <Typography variant="subtitle1" component="p">
            Explore new destinations and plan your perfect trip with our traveling app.
          </Typography>
        </header>

        <div style={{ backgroundImage: 'url("/images/hero-image.jpg")' }}>
          {/* Placeholder for a stunning hero image */}
        </div>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  image="/images/beach-thumbnail.jpg"
                  title="Beach Destination"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Beach Getaways
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Relax on the sandy beaches of exotic locations with crystal clear waters.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  image="/images/mountain-thumbnail.jpg"
                  title="Mountain Destination"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Mountain Adventures
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Experience thrilling hikes and breathtaking views in stunning mountain ranges.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  image="/images/city-thumbnail.jpg"
                  title="City Destination"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Vibrant Cities
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Immerse yourself in the rich culture and exciting city life of various urban destinations.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" size="large" sx={{
            marginTop: "20px",
        }}>
          Explore More
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;