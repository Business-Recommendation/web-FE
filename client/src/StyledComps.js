import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// @@@@@@@@@@@@@@@@@@@@ NavBar @@@@@@@@@@@@@@@@@@@@

export const StyledLogo = styled.img`
    margin: 5px 0 5px 10px;
    height: 85%;
    width: 85%;
`

export const StyledNavLink = styled(NavLink)`
    font-family: 'Sansation';
    font-size: 1.4rem;
    color: white;
    text-decoration: none;
    padding: 1px;
    margin-left: 30px;
`

export const StyledNavLinkContainer = styled.div`
    margin-right: 80px;
`