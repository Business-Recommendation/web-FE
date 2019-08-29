import React from 'react'

import { Grid } from 'semantic-ui-react'

import { StyledLandingPage, StyledTagLine, StyledLandingPageHR, StyledLandingPageSubheader, StylingLandingPageImg, StylingLandingPageArrow } from '../StyledComps'

const LandingPage = () => {
    return (
        <StyledLandingPage>
            <StyledTagLine>Biz Smarter, Not Harder.</StyledTagLine>

            <StyledLandingPageHR/>

            <Grid centered={true} columns='equal' padded className='mobile-hide'>
                <Grid.Column computer={4} tablet={6}>
                    <StyledLandingPageSubheader delay='1s'>They Review.</StyledLandingPageSubheader>
                </Grid.Column>

                <Grid.Column computer={2} tablet={2}/>

                <Grid.Column computer={4} tablet={6}>
                    <StyledLandingPageSubheader delay='3s'>We Analyze.</StyledLandingPageSubheader>
                </Grid.Column>

                <Grid.Column computer={2} only='computer'/>

                <Grid.Column computer={4} only='computer'>
                    <StyledLandingPageSubheader delay='5s'>You Improve.</StyledLandingPageSubheader>
                </Grid.Column>
            </Grid>

            <Grid verticalAlign='middle' centered={true} columns='equal' padded stackable>
                <Grid.Column computer={4} tablet={6} mobile={4}>
                    <StyledLandingPageSubheader className='mobile-only' delay='1s'>They Review.</StyledLandingPageSubheader>
                    <StylingLandingPageImg src={require(`../assets/review.png`)} alt='people posting reviews'  delay='1s'/>
                </Grid.Column>

                <Grid.Column computer={2} tablet={2} mobile={2}>
                    <StylingLandingPageArrow src={require(`../assets/right-arrow.png`)} alt='arrow pointing right' delay='2s'/>
                </Grid.Column>

                <Grid.Column computer={4} tablet={6} mobile={4}>
                    <StyledLandingPageSubheader className='mobile-only' delay='3s'>We Analyze.</StyledLandingPageSubheader>
                    <StylingLandingPageImg src={require(`../assets/analyze.png`)} alt='computer analyzing' delay='3s'/>
                </Grid.Column>

                <Grid.Column computer={2} mobile={2} only='computer mobile'>
                    <StylingLandingPageArrow src={require(`../assets/right-arrow.png`)} alt='arrow pointing right' delay='4s'/>
                </Grid.Column>

                <Grid.Column computer={4} mobile={4} only='computer mobile'>
                    <StyledLandingPageSubheader className='mobile-only' delay='5s'>You Improve.</StyledLandingPageSubheader>
                    <StylingLandingPageImg src={require(`../assets/improve.png`)} alt='achievement unlocked' delay='5s'/>
                </Grid.Column>
            </Grid>

            <Grid className='tablet-show'>
                <Grid.Column width={10} />

                <Grid.Column width={2}>
                    <StylingLandingPageArrow src={require(`../assets/right-arrow.png`)} alt='arrow pointing SW' className='diagonal-arrow' delay='4s'/>
                </Grid.Column>

                <Grid.Column width={4} />
            </Grid>

            <Grid className='tablet-show'>
                <Grid.Column width={5} />

                <Grid.Column width={6}>
                    <StyledLandingPageSubheader delay='5s'>You Improve.</StyledLandingPageSubheader>
                    <StylingLandingPageImg src={require(`../assets/improve.png`)} alt='achievement unlocked' delay='5s'/>
                </Grid.Column>

                <Grid.Column width={5} />
            </Grid>
        </StyledLandingPage>
    )
}

export default LandingPage