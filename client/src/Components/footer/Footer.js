import React from 'react'
import { connect, useSelector } from 'react-redux'

import { logout } from '../../actions'

import { StyledFooter, StyledCopyright, StyledFooterNavLink, StyledFooterNavLinkContainer, StyledMobileNav } from '../../StyledComps'

const Footer = ({ logout }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    const logoutUser = () => {
        localStorage.removeItem('token')
        logout()
    }
    
    return (
        <StyledFooter>
            <StyledCopyright>ALL RIGHTS RESERVED ©</StyledCopyright>

            <StyledFooterNavLinkContainer>
                <StyledFooterNavLink to='disclaimer'>DISCLAIMER</StyledFooterNavLink>
                <StyledFooterNavLink to='terms-and-conditions'>TERMS & CONDITIONS</StyledFooterNavLink>
            </StyledFooterNavLinkContainer>

            {!isLoggedIn ? (
                <StyledMobileNav>
                    <StyledFooterNavLink to='/register'>REGISTER</StyledFooterNavLink>
                    <i className='inav'/>
                    <StyledFooterNavLink to='/login'>LOG IN</StyledFooterNavLink>
                </StyledMobileNav>
                ) : (
                <StyledMobileNav>
                    <StyledFooterNavLink to='/listings'>YOUR BIZ</StyledFooterNavLink>
                    <i className='inav'/>
                    <StyledFooterNavLink to='/login' onClick={() => logoutUser()}>LOG OUT</StyledFooterNavLink>
                </StyledMobileNav>
                )
            }
        </StyledFooter>
    )
}

export default connect(null, { logout })(Footer)