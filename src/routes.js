import React from 'react'
import {Switch, Route} from 'react-router-dom';
import BookView from './components/Book';
import Home from "./components/Home/home"
import Layout from './hoc/Layout'
import Login from './containers/Admin/login'

function Routes() {
    return (
        <Layout>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/books/:id" exact component={BookView}/>
            <Route path='/login' exact component={Login}/>
        </Switch>
        </Layout>
    )
}

export default Routes
