import React from 'react'

import { Grid } from 'semantic-ui-react'

import { StyledTagLine, StyledLandingPageHR, StyledLandingPageSubheader, StylingLandingPageImg, StylingLandingPageArrow } from '../StyledComps'

const LandingPage = () => {
    return (
        <div>
            <StyledTagLine>Biz Smarter, Not Harder.</StyledTagLine>

            <StyledLandingPageHR/>

            <Grid centered={true} columns='equal' padded>
                <Grid.Column width={4}>
                    <StyledLandingPageSubheader>They Review.</StyledLandingPageSubheader>
                </Grid.Column>

                <Grid.Column width={2} />

                <Grid.Column width={4}>
                    <StyledLandingPageSubheader>We Analyze.</StyledLandingPageSubheader>
                </Grid.Column>

                <Grid.Column width={2} />

                <Grid.Column width={4}>
                    <StyledLandingPageSubheader>You Improve.</StyledLandingPageSubheader>
                </Grid.Column>
            </Grid>

            <Grid verticalAlign='middle' centered={true} columns='equal' padded>
                <Grid.Column width={4}>
                    <StylingLandingPageImg src={require(`../assets/review.png`)} alt='people posting reviews' />
                </Grid.Column>

                <Grid.Column width={2}>
                    <StylingLandingPageArrow src={require(`../assets/right-arrow.png`)} alt='arrow pointing right' />
                </Grid.Column>

                <Grid.Column width={4}>
                    <StylingLandingPageImg src={require(`../assets/analyze.png`)} alt='computer analyzing' />
                </Grid.Column>

                <Grid.Column width={2}>
                    <StylingLandingPageArrow src={require(`../assets/right-arrow.png`)} alt='arrow pointing right' />
                </Grid.Column>

                <Grid.Column width={4}>
                    <StylingLandingPageImg src={require(`../assets/improve.png`)} alt='achievement unlocked' />
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default LandingPage