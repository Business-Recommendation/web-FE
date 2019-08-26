import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Login from '../Login'
import Disclaimer from '../footer/Disclaimer'
import TermsAndConditions from '../footer/TermsAndConditions'

const AppRouter = () => {
    return (
        <>
            <Switch>
                {/* <Route exact path='/' component={} />  */}
                {/* <Route path='/register' component={} /> */}
                <Route path='/login' component={Login} />
                {/* <PrivateRoute path='/listings' component={} /> */}
                {/* <PrivateRoute path='/stats' component={} /> */}
                {/* <PrivateRoute path='/update-listing' component={} /> */}
                {/* <PrivateRoute path='/add-listing' component={} /> */}
                <Route path='/disclaimer' component={Disclaimer} />
                <Route path='/terms-and-conditions' component={TermsAndConditions} />
            </Switch>
        </>
    )
}

export default AppRouter