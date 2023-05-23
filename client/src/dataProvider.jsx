import axios from 'axios'
import jsonServerProvider from 'ra-data-json-server'
import { fetchUtils } from 'react-admin';

const apiUrl = `${process.env.REACT_APP_BASE_URL}`

const fetchJ = async(url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'})
    }

    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/getkey`, {
        headers: {
            'Content-Type': 'application/json',
            'client_id': process.env.REACT_APP_CLIENT_ID,
            'secret': process.env.REACT_APP_CLIENT_SECRET
        },
        withCredentials: true
    })

    options.headers.set('key', `${response.data.key}`)
    return fetchUtils.fetchJson(url, options)
}

const dataProvider = jsonServerProvider(apiUrl, fetchJ)

export default dataProvider