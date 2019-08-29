import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const POST_LOGIN_START = "POST_LOGIN_START"
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS"
export const POST_LOGIN_FAIL = "POST_LOGIN_FAIL"

export const POST_REGISTER_START = 'POST_REGISTER_START'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAIL = 'POST_REGISTER_FAIL'

export const LOGOUT_USER = 'LOGOUT_USER'

//Specific to the getting and pushing of data. To be used on update and Add
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const PUSH_DATA_SUCCES = "PUSH_DATA_SUCCES"
export const DATA_FAILED="DATA_FAILED"

export const PUT_DATA_START = 'PUT_DATA_START'
export const PUT_DATA_SUCCESS = 'PUT_DATA_SUCCESS'
export const PUT_DATA_FAIL = 'PUT_DATA_FAIL'

export const DELETE_DATA_START = 'DELETE_DATA_START'
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS'
export const DELETE_DATA_FAIL = 'DELETE_DATA_FAIL'



export const login = (creds, history) => dispatch => {
    dispatch({ type: POST_LOGIN_START})
    axios
        .post(`https://bizrecommendations.herokuapp.com/api/auth/login`, creds)
        .then(res => {
            dispatch({ type: POST_LOGIN_SUCCESS })
            localStorage.setItem('token', res.data.token)
            history.push('/listings')
        })
        .catch(err => {
            dispatch({ type: POST_LOGIN_FAIL, payload: err.response.data.error})
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
            dispatch({ type: POST_REGISTER_FAIL, payload: err.response.data.error})
        })
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_USER })
}

export const pushData= (props) =>{
    return dispatch =>{
        dispatch ({type: PUSH_DATA_SUCCES });
        axiosWithAuth()
        .post("https://bizrecommendations.herokuapp.com/api/biz/listings", props)
        .then(res =>{
            console.log("push", res)
            dispatch({type: PUSH_DATA_SUCCES, payload:res.data});
        })
        .catch(err => {
            dispatch({type: DATA_FAILED, payload: err.response})
        })
    }

}

export const grabData = () =>{
    return dispatch =>{
        dispatch ({type: GET_DATA_SUCCESS });
        axiosWithAuth()
        .get("https://bizrecommendations.herokuapp.com/api/biz/listings")
        .then(res =>{
            console.log("get",res.data)
            dispatch({type: GET_DATA_SUCCESS, payload:res.data});
            
        })
        .catch(err => {
            dispatch({type: DATA_FAILED, payload: err.response})
        })
    }
}

export const putData = (listing) => dispatch => {
    dispatch({ type: PUT_DATA_START })
    axiosWithAuth()
        .put(`https://bizrecommendations.herokuapp.com/api/biz/listings/${listing.id}`, listing)
        .then(res => dispatch({ type: PUT_DATA_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: PUT_DATA_FAIL, payload: err.response }))
}

export const deleteData = (listing) => dispatch => {
    dispatch({ type: DELETE_DATA_START })
    axiosWithAuth()
        .delete(`https://bizrecommendations.herokuapp.com/api/biz/listings/${listing.id}`)
        .then(res => dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_DATA_FAIL, payload: err.response }))
}