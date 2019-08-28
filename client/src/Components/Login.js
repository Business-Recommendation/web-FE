import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const Login = ({ errors, touched, login, history, error }) => {
    console.log('Error from redux', error)

    return (
        <div>
            {/* <h1>Error: {error}</h1> */}
            {error === 'Invalid username or password, please try again with a new one' && <h1>{error}</h1>}
            <Form className='registerForm'>
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

const FormikLoginForm = withFormik({
    mapPropsToValues({username, password}) {
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