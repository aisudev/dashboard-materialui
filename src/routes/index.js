import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Overall from '../pages/Overall'
import More from '../pages/More'

const Routes = () => {

    return (
            <Switch>
                <Route path='/more' component={More} />
                <Route path='/' component={Overall} />
            </Switch>
    )
}

export default Routes
