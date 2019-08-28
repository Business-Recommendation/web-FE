import styled, { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

// Constants
const appBlue = '#423ABA'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '500px',
    tablet: '800px',
}

const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`
}

// @@@@@@@@@@@@@@@@@@@@ Global @@@@@@@@@@@@@@@@@@@@
export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://db.onlinewebfonts.com/c/7a20d101126c5370e8b5811da3569fb4?family=Sansation');
    font-family: 'Sansation', Sans-Serif;
  }
`

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
    width: 100%;

    @media ${device.tablet} {
        flex-direction: column;
        padding-bottom: 5px;
    }
`

export const StyledLogo = styled.img`
    margin: 5px 0 5px 10px;
    height: 75%;
    width: 75%;

    @media ${device.tablet} {
        margin: 5px auto 0;
        transform: translateX(-50%);
        position: relative;
        left: 50%;
    }
`

export const StyledNavLink = styled(NavLink)`
    font-family: 'Sansation', Sans-Serif;
    font-size: 1.4rem;
    color: white;
    text-decoration: none;
    padding: 1px;
    margin-left: 30px;

    @media ${device.tablet} {
        margin-left: 75px;

        &:first-child {
            margin-left: 0px;
        }
    }
`

export const StyledNavLinkContainer = styled.div`
    margin-right: 80px;

    @media ${device.tablet} {
        display: none;
    }
`

// @@@@@@@@@@@@@@@@@@@@ Landing Page @@@@@@@@@@@@@@@@@@@@
export const StyledLandingPage = styled.div`
    margin-bottom: 2rem;

    h1:first-child {
        margin-top: 15px;
        color: black;
    }

    h2:first-child {
        margin-top: 0;
        color: black;
    }

    .ui.grid.tablet-show {
        display: none;

        .diagonal-arrow {
            transform: rotate(135deg)
        }

        @media ${device.tablet} {
            display: flex;
        }

        @media ${device.mobileL} {
            display: none;
        }
    }

    .ui.grid.mobile-hide {

        @media ${device.mobileL} {
            display: none;
        }
    }

    .mobile-only {
        display: none;

        @media ${device.mobileL} {
            display: block;
        }
    }
`

export const StyledTagLine = styled.h1`
    font-family: 'Sansation', Sans-Serif;
    text-align: center;
    font-size: 3.6rem;

    @media ${device.tablet} {
        font-size: 3rem;
    }

    @media ${device.mobileL} {
        font-size: 2.4rem;
    }

    @media ${device.mobileM} {
        font-size: 2rem;
    }

    @media ${device.mobileS} {
        font-size: 1.8rem;
    }
`

export const StyledLandingPageHR = styled.hr`
    margin: 0.5rem 40%;

    @media ${device.tablet} {
        margin: 0.5rem 30%;
    }

    @media ${device.mobileL} {
        margin: 0.5rem 25%;
    }

    @media ${device.mobileM} {
        margin: 0.5rem 20%;
    }
`

export const StyledLandingPageSubheader = styled.h2`
    font-family: 'Sansation', Sans-Serif;
    text-align: center;
    font-size: 3.2rem;

    @media ${device.tablet} {
        font-size: 2.4rem;
    }

    @media ${device.mobileL} {
        font-size: 2rem;
    }

    @media ${device.mobileM} {
        font-size: 1.6rem;
    }

    @media ${device.mobileS} {
        font-size: 1.2rem;
    }
`

export const StylingLandingPageImg = styled(Image)`
    max-width: 350px;
    width: 100%;

    @media ${device.mobileL} {
        width: 300px;
        margin: 0 auto;
    }

    @media ${device.mobileM} {
        width: 275px;
    }

    @media ${device.mobileS} {
        width: 250px;
    }
`

export const StylingLandingPageArrow = styled(Image)`
    max-width: 125px;
    width: 100%;

    @media ${device.mobileL} {
        transform: rotate(90deg);
        width: 100px;
        margin: 0 auto;
    }

    @media ${device.mobileM} {
        width: 75px;
    }

    @media ${device.mobileS} {
        width: 50px;
    }
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
    border-top: solid black 1px;

    p:first-child {
        position: relative;
        margin-top: 10px;
    }

    @media ${device.tablet} {
        position: fixed;
    }
`

export const StyledCopyright = styled.p`
    font-family: 'Sansation', Sans-Serif;
    font-size: 1.4rem;
    margin: 10px 0 10px 30px;

    @media ${device.tablet} {
        display: none;
    }
`

export const StyledFooterNavLink = styled(NavLink)`
    font-family: 'Sansation', Sans-Serif;
    font-size: 1.4rem;
    color: white;
    text-decoration: none;
    padding: 1px;
    margin-left: 30px;

    @media ${device.tablet} {
        text-align: center;
        margin: 1rem 0;
        width: 45%;
    }

    @media ${device.mobileL} {
        font-size: 1.2rem;
    }

    @media ${device.mobileM} {
        margin: 0.5rem;
        font-size: 1rem;
    }
`

export const StyledFooterNavLinkContainer = styled.div`
    margin-right: 80px;

    @media ${device.tablet} {
        display: none;
    }
`

export const StyledMobileNav = styled.div`
    display: none;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    .inav {
        width: 1px;
        height: 20px;
        background: white;
    }

    @media ${device.tablet} {
        display: flex;
    }
`