import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import { Container, Grid, TextField, Select, MenuItem, FormControl, InputLabel, Button, Alert } from '@mui/material'
import CardList from './CardList';
const Budget = () => {
  const [budget, setBudget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
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
      await axios.get(`${process.env.REACT_APP_BASE_URL}/trips/budget?startDate=${startDate}&endDate=${endDate}&budget=${budget}`, {
        headers: {
          'Content-Type': 'application/json',
          'key': response.data.key
        }, withCredentials: true
      })
      .then((response) => {
        if (response.data.length === 0) {
          setEmpty(true);
        }
        setCountries(response.data);
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
            <TextField
                type="number"
                id="number"
                label="Budget"
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={budget}
                onChange={handleBudgetChange}
            />
          </Grid>

          <Grid item xs={12} textAlign="center">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleSubmit}
              disabled={budget === '' || startDate === '' || endDate === ''}
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
              <CardList countries={countries} />
            </Grid>
          )}

          <Grid item xs={12}>
            {error && <Alert severity="error">{errorMessage}</Alert>}
          </Grid>
        </Grid>
      </Container>
  )
}

export default Budget