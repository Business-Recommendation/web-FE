import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

const AppRouter = () => {
    return (
        <>
            <Switch>
                {/* <Route exact to='/' component={} />  */}
                {/* <Route to='/register' component={} /> */}
                {/* <Route to='/login' component={} /> */}
                {/* <PrivateRoute to='/listings' component={} /> */}
                {/* <PrivateRoute to='/stats' component={} /> */}
                {/* <PrivateRoute to='/update-listing' component={} /> */}
                {/* <PrivateRoute to='/add-listing' component={} /> */}
                {/* <Route to='/disclaimer' component={} /> */}
                {/* <Route to='/terms-and-conditions' component={} /> */}
            </Switch>
        </>
    )
}

export default AppRouter