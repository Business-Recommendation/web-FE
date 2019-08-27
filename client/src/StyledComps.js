import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

// Constants
const appBlue = '#423ABA'

// @@@@@@@@@@@@@@@@@@@@ App @@@@@@@@@@@@@@@@@@@@
export const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    h1:first-child,
    h2:first-child,
    h3:first-child,
    h4:first-child,
    h5:first-child,
    h6:first-child,
    p:first-child {
        margin-top: 25.2px;
    }
`

export const ContentWrap = styled.div`
    padding-bottom: 2.5rem;
`

// @@@@@@@@@@@@@@@@@@@@ NavBar @@@@@@@@@@@@@@@@@@@@
export const StyledNavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${appBlue};
`

export const StyledLogo = styled.img`
    margin: 5px 0 5px 10px;
    height: 75%;
    width: 75%;
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

// @@@@@@@@@@@@@@@@@@@@ Landing Page @@@@@@@@@@@@@@@@@@@@
export const StyledLandingPage = styled.div`
    h1:first-child {
        margin-top: 15px;
    }

    h2:first-child {
        margin-top: 0;
    }
`

export const StyledTagLine = styled.h1`
    font-family: 'Sansation';
    text-align: center;
    font-size: 3.6rem;
`

export const StyledLandingPageHR = styled.hr`
    margin: 0.5rem 40%;
`

export const StyledLandingPageSubheader = styled.h2`
    font-family: 'Sansation';
    text-align: center;
    font-size: 3.2rem;
`

export const StylingLandingPageImg = styled(Image)`
    max-width: 350px;
    width: 100%;
`

export const StylingLandingPageArrow = styled(Image)`
    max-width: 125px;
    width: 100%;
`

// @@@@@@@@@@@@@@@@@@@@ Footer @@@@@@@@@@@@@@@@@@@@
export const StyledFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: ${appBlue};
`

export const StyledCopyright = styled.p`
    font-family: 'Sansation';
    font-size: 1.4rem;
    margin: 10px 0 10px 30px;
`