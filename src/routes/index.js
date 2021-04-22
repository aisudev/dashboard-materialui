import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Overall from '../pages/Overall'

const Routes = () => {

    return (
            <Switch>
                <Route path='/' component={Overall} />
            </Switch>
    )
}

export default Routes
