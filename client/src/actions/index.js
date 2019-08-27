import axios from 'axios'

export const POST_LOGIN_START = "POST_LOGIN_START"
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS"
export const POST_LOGIN_FAIL = "POST_LOGIN_FAIL"

export const POST_REGISTER_START = 'POST_REGISTER_START'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAIL = 'POST_REGISTER_FAIL'

export const LOGOUT_USER = 'LOGOUT_USER'

//Specific to the getting and pushing of data. To be used on update and Add
export const GET = "GET"
export const PUSH = "PUSH"
export const FAILED="FAILED"

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
            // history.push('/listing')
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

export const pushData= (props) =>{
    return dispatch =>{
        dispatch ({type: GET });
        axios.post("N/A", props)
        .then(res =>{
            console.log("push", res)
            dispatch({type: GET, payload:res.data});
        })
        .catch(err => {
            dispatch({type: FAILED, payload: err.response})
        })
    }

}

export const grabData = () =>{
    return dispatch =>{
        dispatch ({type: PUSH });
        axios.get("N/A")
        .then(res =>{
            console.log("pull",res.data)
            dispatch({type: PUSH, payload:res.data});
        })
        .catch(err => {
            dispatch({type: FAILED, payload: err.response})
        })
    }
}

export const putData = (listing) => dispatch => {
    dispatch({ type: PUT_DATA_START })
    axios
        .put(`https://bizrecommendations.herokuapp.com/UPDATE/LINK/${listing.id}`, listing) //need to change url based on docs
        .then(res => dispatch({ type: PUT_DATA_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: PUT_DATA_FAIL, payload: err.response }))
}

export const deleteData = (listing) => dispatch => {
    dispatch({ type: DELETE_DATA_START })
    axios
        .put(`https://bizrecommendations.herokuapp.com/UPDATE/LINK/${listing.id}`) //need to change url based on docs
        .then(res => dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_DATA_FAIL, payload: err.response }))
}