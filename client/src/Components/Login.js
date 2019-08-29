import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

import { StyledLoginContainer, StyledLoginFormContainer, StyledLoginImg, StyledLoginForm, StyledLoginLabel, StyledLoginFieldError, StyledLoginField, StyledLoginButton, StyledLoginError, StyledLoginBurger, StyledLoginCone, StyledLoginCupcake } from '../StyledComps'

const Login = ({ errors, touched, login, history, error }) => {
    console.log('Error from redux', error)

    return (
        <StyledLoginContainer>
            <StyledLoginBurger src={require(`../assets/login-burger.png`)} alt='burger' />
            <StyledLoginFormContainer>
            <StyledLoginCone src={require(`../assets/login-cone.png`)} alt='cone' />
                <StyledLoginForm>
                {error === 'Invalid username or password, please try again with a new one' && <StyledLoginError>{error}</StyledLoginError>}
                    <StyledLoginLabel>Username:</StyledLoginLabel>
                    {touched.username && errors.username && (
                        <StyledLoginFieldError>{errors.username}</StyledLoginFieldError>
                    )}
                    <StyledLoginField type='text' name='username' placeholder='Username' className='registerFormField' />
                    <StyledLoginLabel>Password:</StyledLoginLabel>
                    {touched.password && errors.password && (
                        <StyledLoginFieldError>{errors.password}</StyledLoginFieldError>
                    )}
                    <StyledLoginField type='password' name='password' placeholder='Password' className='registerFormField' />
                    <StyledLoginButton type='submit'>Login</StyledLoginButton>
                </StyledLoginForm>
            </StyledLoginFormContainer>
            <StyledLoginCupcake src={require(`../assets/login-cupcake.png`)} alt='cupcake' />
        </StyledLoginContainer>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().min(3, 'Username must be 6 characters or longer').max(24, 'Username must be 24 characters or shorter').required('Username is a required field'),
        password: Yup.string().min(3, 'Password must be 6 characters or longer').max(24, 'Password must be 24 characters or shorter').required('Password is a required field'),
    }),

    handleSubmit(values, { props }) {
        props.login(values, props.history)
    }
})(Login)

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { login }
)(FormikLoginForm);