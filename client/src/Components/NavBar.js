import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', backgroundColor:'#423ABA'}}>
            <img src={require(`../assets/logo.png`)} alt='Better Business Logo' />

            <div>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Log In</NavLink>
            </div>

            <div>
                <NavLink to='/listings'>Your Biz</NavLink>
                <NavLink to='/login'>Log Out</NavLink>
            </div>
        </div>
    )
}

export default NavBar