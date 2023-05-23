import axios from "axios"



const authProvider = {
    login: ({username, password}) => {
        const response = axios.get(`${process.env.REACT_APP_BASE_URL}/auth/getkey`, {
            headers: {
                'Content-Type': 'application/json',
                'client_id': process.env.REACT_APP_CLIENT_ID,
                'secret': process.env.REACT_APP_CLIENT_SECRET
            }, 
            withCredentials: true
        })

        return response.then((resp) => {
            const req = axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {username, password}, {
                headers: {
                    'Content-Type': 'application/json',
                    "key": resp.data.key
                },
                withCredentials: true
            })
            return req.then(response => {
                if(response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText)
                }
                localStorage.setItem("loggedIn", true)
                return response.data

            })    
        })
    },
    logout: () => {
        const response = axios.get(`${process.env.REACT_APP_BASE_URL}/auth/getkey`, {
            headers: {
                'Content-Type': 'application/json',
                'client_id': process.env.REACT_APP_CLIENT_ID,
                'secret': process.env.REACT_APP_CLIENT_SECRET
            },
            withCredentials: true
        })

        return response.then((resp) => {
            const req = axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
                headers: {
                    'Content-Type': 'application/json',
                    "key": resp.data.key
                },
                withCredentials: true
            })
            return req.then(response => {
                if(response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText)
                }
                Promise.resolve()
            })    
        })
    },
    checkAuth: () => {
        return localStorage.getItem('loggedIn') ? Promise.resolve() : Promise.reject()
    },
    checkError: ({ status }) => {
        if(status === 401 || status === 403) {
            return Promise.reject()
        }
        return Promise.resolve()
    },
    getPermissions: () => {
        return localStorage.getItem('loggedIn') ? Promise.resolve() : Promise.reject()
    }
}

export default authProvider