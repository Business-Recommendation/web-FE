import styled from 'styled-components'
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

// @@@@@@@@@@@@@@@@@@@@ App @@@@@@@@@@@@@@@@@@@@
export const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: white;
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
    }

    h2:first-child {
        margin-top: 0;
    }

    .ui.grid.tablet-show {
        display: none;

        .diagonal-arrow {
            transform: rotate(135deg)
        }

        @media ${device.tablet} {
            display: flex;
        }
    }

    @media ${device.tablet} {

        .tablet-show {
            display: flex;
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
`

export const StyledLandingPageHR = styled.hr`
    margin: 0.5rem 40%;

    @media ${device.tablet} {
        margin: 0.5rem 30%;
    }
`

export const StyledLandingPageSubheader = styled.h2`
    font-family: 'Sansation', Sans-Serif;
    text-align: center;
    font-size: 3.2rem;

    @media ${device.tablet} {
        font-size: 2.4rem;
    }
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
        width: 50%;
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