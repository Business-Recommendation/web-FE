import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

const Login = (props) => {
    const [creds, setCreds] = useState({username: '', password: ''})

    const onSubmit = (e) => {
        e.preventDefault();
        props.login(creds, props.history)
    }

    const handleChange = event => {
        setCreds({...creds, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
                <input type='password' name='password'  placeholder='Password' onChange={handleChange}/>
                <button>Login</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login);