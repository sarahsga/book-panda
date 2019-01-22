import React, { Component } from 'react'
import classes from './App.module.scss'
import Layout from './hoc/Layout/Layout'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './containers/Home/Home'
import BookList from './containers/BookList/BookList'
import BookDetails from './components/Books/BookDetails/BookDetails'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/categories" exact component={Home} />
            <Route
              path="/categories/:categoryId/books"
              exact
              component={BookList}
            />
            <Route
              path="/categories/:categoryId/books/:bookId"
              exact
              component={BookDetails}
            />
            <Route path="/best-sellers" render={() => <p>Best Sellers</p>} />
            <Route path="/my-cart" render={() => <p>My Cart</p>} />
            <Route path="/request-book" render={() => <p>Request A Book</p>} />
            <Route path="/contact" render={() => <p>Contact Us</p>} />
            <Redirect path="/" to="/categories" />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
