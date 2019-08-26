import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

import { logout } from '../actions'

import { StyledLogo, StyledNavLink, StyledNavLinkContainer } from '../StyledComps'

const NavBar = ({ logout }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    const logoutUser = () => {
        localStorage.removeItem('token')
        logout()
    }

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', backgroundColor:'#423ABA'}}>
            <Link to='/'>
                <StyledLogo src={require(`../assets/logo.png`)} alt='Better Business Logo'  />
            </Link>

            {!isLoggedIn ? (
                <StyledNavLinkContainer>
                    <StyledNavLink to='/register'>REGISTER</StyledNavLink>
                    <StyledNavLink to='/login'>LOG IN</StyledNavLink>
                </StyledNavLinkContainer>
                ) : (
                <StyledNavLinkContainer>
                    <StyledNavLink to='/listings'>YOUR BIZ</StyledNavLink>
                    <StyledNavLink to='/login' onClick={() => logoutUser()}>LOG OUT</StyledNavLink>
                </StyledNavLinkContainer>
                )
            }
        </div>
    )
}

export default connect(null, { logout })(NavBar)