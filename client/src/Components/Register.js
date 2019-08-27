import React, { useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions'

const Register = (props) => {
    const [creds, setCreds] = useState({username: '', password: '', email: ''})

    const onSubmit = (e) => {
        e.preventDefault();
        props.register(creds, props.history)
    }

    const handleChange = event => {
        setCreds({...creds, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='email' placeholder='Email' onChange={handleChange}/>
                <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
                <input type='password' name='password'  placeholder='Password' onChange={handleChange}/>
                <button>Register</button>
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
    { register }
)(Register);