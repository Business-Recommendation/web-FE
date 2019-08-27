import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import LandingPage from '../LandingPage'
import Login from '../Login'
import Register from '../Register'
import Disclaimer from '../footer/Disclaimer'
import TermsAndConditions from '../footer/TermsAndConditions'
import UpdateForm from '../updateForm'

const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={LandingPage} /> 
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                {/* <PrivateRoute path='/listings' component={} /> */}
                {/* <PrivateRoute path='/stats' component={} /> */}
                <PrivateRoute path='/update-listing' component={UpdateForm} /> 
                {/* <PrivateRoute path='/add-listing' component={} /> */}
                <Route path='/disclaimer' component={Disclaimer} />
                <Route path='/terms-and-conditions' component={TermsAndConditions} />
            </Switch>
        </>
    )
}

export default AppRouter
