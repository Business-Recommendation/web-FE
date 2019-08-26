import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
            <Link to='/'>
                <img src={require(`../assets/logo.png`)} alt='Better Business Logo'  />
            </Link>

            {!isLoggedIn ? (
                <div>
                    <NavLink to='/register'>REGISTER</NavLink>
                    <NavLink to='/login'>LOG IN</NavLink>
                </div>
                ) : (
                <div>
                    <NavLink to='/listings'>YOUR BIZ</NavLink>
                    <NavLink to='/login' onClick={() => logoutUser()}>LOG OUT</NavLink>
                </div>
                )
            }
        </div>
    )
}

export default connect(null, { logout })(NavBar)