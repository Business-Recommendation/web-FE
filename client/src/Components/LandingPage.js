import React from 'react'

import { Grid } from 'semantic-ui-react'

import { StyledLandingPage, StyledTagLine, StyledLandingPageHR, StyledLandingPageSubheader, StylingLandingPageImg, StylingLandingPageArrow } from '../StyledComps'

const LandingPage = () => {
    return (
        <StyledLandingPage>
            <StyledTagLine>Biz Smarter, Not Harder.</StyledTagLine>

            <StyledLandingPageHR/>

            <Grid centered={true} columns='equal' padded>
                <Grid.Column computer={4} tablet={6}>
                    <StyledLandingPageSubheader>They Review.</StyledLandingPageSubheader>
                </Grid.Column>

                <Grid.Column computer={2} tablet={2}/>

                <Grid.Column computer={4} tablet={6}>
                    <StyledLandingPageSubheader>We Analyze.</StyledLandingPageSubheader>
                </Grid.Column>

                <Grid.Column computer={2} only='computer' />

                <Grid.Column computer={4} only='computer'>
                    <StyledLandingPageSubheader>You Improve.</StyledLandingPageSubheader>
                </Grid.Column>
            </Grid>

            <Grid verticalAlign='middle' centered={true} columns='equal' padded>
                <Grid.Column computer={4} tablet={6}>
                    <StylingLandingPageImg src={require(`../assets/review.png`)} alt='people posting reviews'/>
                </Grid.Column>

                <Grid.Column computer={2} tablet={2}>
                    <StylingLandingPageArrow src={require(`../assets/right-arrow.png`)} alt='arrow pointing right'/>
                </Grid.Column>

                <Grid.Column computer={4} tablet={6}>
                    <StylingLandingPageImg src={require(`../assets/analyze.png`)} alt='computer analyzing'/>
                </Grid.Column>

                <Grid.Column computer={2} only='computer'>
                    <StylingLandingPageArrow src={require(`../assets/right-arrow.png`)} alt='arrow pointing right'/>
                </Grid.Column>

                <Grid.Column computer={4} only='computer'>
                    <StylingLandingPageImg src={require(`../assets/improve.png`)} alt='achievement unlocked' />
                </Grid.Column>
            </Grid>

            <Grid className='tablet-show'>
                <Grid.Column width={10} />

                <Grid.Column width={2}>
                    <StylingLandingPageArrow src={require(`../assets/right-arrow.png`)} alt='arrow pointing SW' className='diagonal-arrow'/>
                </Grid.Column>

                <Grid.Column width={4} />
            </Grid>

            <Grid className='tablet-show'>
                <Grid.Column width={5} />

                <Grid.Column width={6}>
                    <StyledLandingPageSubheader>You Improve.</StyledLandingPageSubheader>
                    <StylingLandingPageImg src={require(`../assets/improve.png`)} alt='achievement unlocked' />
                </Grid.Column>

                <Grid.Column width={5} />
            </Grid>
        </StyledLandingPage>
    )
}

export default LandingPage