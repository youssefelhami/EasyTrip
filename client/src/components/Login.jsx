import React, {useState, useEffect} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, FormControlLabel, Checkbox } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login= () => {
    const paperStyle={
        padding:20,
        width:'500px', 
        margin:"20px auto"
    }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         navigate('/admin');
    //     }
    // }, [])

    const handleSubmit = async() => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/getkey`, {
            headers: {
                'Content-Type': 'application/json',
                'client_id': process.env.REACT_APP_CLIENT_ID,
                'secret': process.env.REACT_APP_CLIENT_SECRET
            }
        }).then(async(response) => {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'key': response.data.key
                }
            }).then((response) => {
                localStorage.setItem('token', response.data.token);
                navigate('/admin');
            }).catch((error) => {
                setError(true);
                setErrorMessage(error.response.data.message);
            })
        }).catch((error) => {
            setError(true);
            setErrorMessage(error.response.data.message);
        })
    }

    return(
        <Grid>
            <Paper elevation={10} spacing={2} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>

                <TextField 
                    label='Username' 
                    placeholder='Enter username' 
                    variant="outlined" 
                    fullWidth 
                    required 
                    sx={{
                    marginBottom: "20px"
                    }}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <TextField 
                    label='Password' 
                    placeholder='Enter password' 
                    type='password' 
                    variant="outlined" 
                    fullWidth 
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    style={btnstyle} 
                    fullWidth
                    onClick={handleSubmit}
                >
                    Sign in
                </Button>

               {error && <Alert severity="error">{errorMessage}</Alert>}

            </Paper>
        </Grid>
    )
}

export default Login;
