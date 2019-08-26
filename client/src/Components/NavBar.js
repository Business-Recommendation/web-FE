import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

import { logout } from '../actions'

const NavBar = ({ logout }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    const logoutUser = () => {
        localStorage.removeItem('token')
        logout()
    }

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', backgroundColor:'#423ABA'}}>
            <img src={require(`../assets/logo.png`)} alt='Better Business Logo' />

            {!isLoggedIn ? (
                <div>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/login'>Log In</NavLink>
                </div>
                ) : (
                <div>
                    <NavLink to='/listings'>Your Biz</NavLink>
                    <NavLink to='/login' onClick={() => logoutUser()}>Log Out</NavLink>
                </div>
                )
            }
        </div>
    )
}

export default connect(null, { logout })(NavBar)