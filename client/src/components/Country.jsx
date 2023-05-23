import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import { Container, Grid, TextField, Button, Autocomplete, Box, Alert } from '@mui/material'
import CardList from './CardList';
import countries from '../fixtures/countries';

const Country = () => {
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleCountryChange = (event, value) => {
    setCountry(value);
   }

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true);
    setEmpty(false);
    setError(false);
    setErrorMessage('');

    await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/getkey`, {
      headers: {
          'Content-Type': 'application/json',
          'client_id': process.env.REACT_APP_CLIENT_ID,
          'secret': process.env.REACT_APP_CLIENT_SECRET
      }, withCredentials: true
    }).then(async(response) => {
      await axios.get(`${process.env.REACT_APP_BASE_URL}/trips/country?startDate=${startDate}&endDate=${endDate}&destCountry=${country.label?.toLowerCase()}`, {
        headers: {
          'Content-Type': 'application/json',
          'key': response.data.key
        }, withCredentials: true
      })
      .then((response) => {
        if (response.data.length === 0) {
          setEmpty(true);
        }
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setErrorMessage(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      })
    })

  }

  return (
    <Container sx={{
        padding: "10px",
        marginTop: "20px"
      }}>

      <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={4}>
            <TextField
              required
              type="date"
              id="startDate"
              label="Start Date"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: new Date().toISOString().split('T')[0],
              }}        
              value={startDate}
              onChange={handleStartDateChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              type="date"
              id="endDate"
              label="End Date"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: new Date().toISOString().split('T')[0],
              }}
              value={endDate}
              onChange={handleEndDateChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
                    options={countries}
                    autoHighlight
                    value={country === '' ? null : country}
                    onChange={handleCountryChange}
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {option.label}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a country"
                            inputProps={{
                                ...params.inputProps,
                            }}
                        />
                    )}
            />
          </Grid>

          <Grid item xs={12} textAlign="center">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleSubmit}
              disabled={country === '' || startDate === '' || endDate === ''}
            >
              Search
            </Button>
          </Grid>
          {loading ? (
            <Grid item xs={12} textAlign="center">
              <ClipLoader color="#3f51b5" loading={loading} size={150} />
            </Grid>
          ) : empty ? (
            <Grid item xs={12} textAlign="center">
              <h1>No countries found</h1>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <CardList countries={data} />
            </Grid>
          )}

          <Grid item xs={12}>
            {error && <Alert severity="error">{errorMessage}</Alert>}
          </Grid>
        </Grid>
      </Container>
  )
}

export default Country