import React, { Component } from 'react'
import classes from './App.module.scss'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import CategoryList from './containers/CategoryList/CategoryList'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/" exact component={CategoryList} />
            <Route path="/best-sellers" render={() => <p>Best Sellers</p>} />
            <Route path="/my-cart" render={() => <p>My Cart</p>} />
            <Route path="/request-book" render={() => <p>Request A Book</p>} />
            <Route path="/contact" render={() => <p>Contact Us</p>} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
