import React, { Component } from 'react'
import HorizontalNavbar from '../../components/Navigation/HorizontalNavbar/HorizontalNavbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.scss'
import { connect } from 'react-redux'

class Layout extends Component {
  state = {
    showSideDrawer: false,
    items: [
      {
        label: 'Categories',
        link: '/',
        isExact: true
      },
      {
        label: 'My Cart',
        link: '/my-cart',
        badge: this.props.cart.length || null,
        isExact: true
      },
      {
        label: 'Request A Book',
        link: '/request-book',
        isExact: true
      },
      {
        label: 'Contact Us',
        link: '/contact-us',
        isExact: true
      }
    ]
  }
  componentWillReceiveProps(nextProps) {
    const prevStateItems = this.state.items
    prevStateItems[1].badge = nextProps.cart.length || null
    this.setState({
      items: prevStateItems
    })
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    })
  }
  render() {
    return (
      <>
        <HorizontalNavbar
          items={this.state.items}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          items={this.state.items}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
})

export default connect(mapStateToProps)(Layout)
