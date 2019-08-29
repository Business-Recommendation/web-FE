import React, { useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

import { StyledRegisterContainer, StyledRegisterFormContainer, StyledRegisterImg, StyledRegisterForm, StyledRegisterLabel, StyledRegisterFieldError, StyledRegisterError, StyledRegisterField, StyledRegisterButton, StyledRegisterBurger, StyledRegisterCone, StyledRegisterCupcake } from '../StyledComps'

const Register = ({ errors, touched, register, history, error }) => {
    return (
        <StyledRegisterContainer>
            <StyledRegisterBurger src={require(`../assets/login-burger.png`)} alt='burger' />
            <StyledRegisterFormContainer>
            <StyledRegisterCone src={require(`../assets/login-cone.png`)} alt='cone' />
                <StyledRegisterForm>
                {error === 'User already exist, User/Pass is too long, or database connection has failed' && <StyledRegisterError>{error}</StyledRegisterError>}
                    <StyledRegisterLabel>Email:</StyledRegisterLabel>
                    {touched.email && errors.email && (
                        <StyledRegisterFieldError className='errorMessage'>{errors.email}</StyledRegisterFieldError>
                    )}
                    <StyledRegisterField type='email' name='email' placeholder='Email' className='registerFormField' />
                    <StyledRegisterLabel>Username:</StyledRegisterLabel>
                    {touched.username && errors.username && (
                        <StyledRegisterFieldError className='errorMessage'>{errors.username}</StyledRegisterFieldError>
                    )}
                    <StyledRegisterField type='text' name='username' placeholder='Username' className='registerFormField' />
                    <StyledRegisterLabel>Password:</StyledRegisterLabel>
                    {touched.password && errors.password && (
                        <StyledRegisterFieldError className='errorMessage'>{errors.password}</StyledRegisterFieldError>
                    )}
                    <StyledRegisterField type='password' name='password' placeholder='Password' className='registerFormField' />
                    <StyledRegisterButton type='submit'>Register</StyledRegisterButton>
                </StyledRegisterForm>
            </StyledRegisterFormContainer>
            <StyledRegisterCupcake src={require(`../assets/login-cupcake.png`)} alt='cupcake' />
        </StyledRegisterContainer>
    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({ email, username, password }) {
        return {
            email: email || '',
            username: username || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email must be a valid email').required('Email is a required field'),
        username: Yup.string().min(3, 'Username must be 6 characters or longer').max(24, 'Username must be 24 characters or shorter').required('Username is a required field'),
        password: Yup.string().min(3, 'Password must be 6 characters or longer').max(24, 'Password must be 24 characters or shorter').required('Password is a required field'),
    }),

    handleSubmit(values, { props }) {
        props.register(values, props.history)
    }
})(Register)

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { register }
)(FormikRegisterForm);