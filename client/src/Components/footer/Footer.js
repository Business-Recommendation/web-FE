import React from 'react'
import { NavLink } from 'react-router-dom'

import { StyledFooter, StyledCopyright, StyledNavLink, StyledNavLinkContainer } from '../../StyledComps'

const Footer = () => {
    return (
        <StyledFooter>
            <StyledCopyright>ALL RIGHTS RESERVED ©</StyledCopyright>

            <StyledNavLinkContainer>
                <StyledNavLink to='disclaimer'>DISCLAIMER</StyledNavLink>
                <StyledNavLink to='terms-and-conditions'>TERMS & CONDITIONS</StyledNavLink>
            </StyledNavLinkContainer>
        </StyledFooter>
    )
}

export default Footer