import React, { useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const Register = ({ errors, touched, register, history, error }) => {
    return (
        <div>
            {error === 'User already exist, User/Pass is too long, or database connection has failed' && <h1>{error}</h1>}
            <Form className='registerForm'>
                <Field type='email' name='email' placeholder='Email' className='registerFormField' />
                {touched.email && errors.email && (
                    <p className='errorMessage'>{errors.email}</p>
                )}
                <Field type='text' name='username' placeholder='Username' className='registerFormField' />
                {touched.username && errors.username && (
                    <p className='errorMessage'>{errors.username}</p>
                )}
                <Field type='password' name='password' placeholder='Password' className='registerFormField' />
                {touched.password && errors.password && (
                    <p className='errorMessage'>{errors.password}</p>
                )}
                <button type='submit'>Login</button>
            </Form>
        </div>
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
        email: Yup.string().email().required('Email is a required field'),
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