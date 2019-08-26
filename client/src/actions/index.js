import axios from 'axios'

export const POST_LOGIN_START = "POST_LOGIN_START"
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS"
export const POST_LOGIN_FAIL = "POST_LOGIN_FAIL"

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