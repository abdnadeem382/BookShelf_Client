import React from 'react'
import {Switch, Route} from 'react-router-dom';
import BookView from './components/Book';
import Home from "./components/Home/home"
import Layout from './hoc/Layout'

function Routes() {
    return (
        <Layout>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/books/:id" exact component={BookView}/>
        </Switch>
        </Layout>
    )
}

export default Routes
