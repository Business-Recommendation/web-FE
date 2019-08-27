import axios from 'axios'

export const POST_LOGIN_START = "POST_LOGIN_START"
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS"
export const POST_LOGIN_FAIL = "POST_LOGIN_FAIL"

export const POST_REGISTER_START = 'POST_REGISTER_START'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAIL = 'POST_REGISTER_FAIL'

export const LOGOUT_USER = 'LOGOUT_USER'

export const login = (creds, history) => dispatch => {
    dispatch({ type: POST_LOGIN_START})
    axios
        .post(`https://bizrecommendations.herokuapp.com/api/auth/login`, creds)
        .then(res => {
            dispatch({ type: POST_LOGIN_SUCCESS })
            localStorage.setItem('token', res.data.token)
            // history.push('/listings')
        })
        .catch(err => {
            dispatch({ type: POST_LOGIN_FAIL, payload: err})
        })
}

export const register = (creds, history) => dispatch => {
    dispatch({ type: POST_LOGIN_START })
    axios
        .post('https://bizrecommendations.herokuapp.com/api/auth/register', creds)
        .then(res => {
            dispatch({ type: POST_REGISTER_SUCCESS })
            history.push('/login')
        })
        .catch(err => {
            dispatch({ type: POST_REGISTER_FAIL})
        })
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_USER })
}