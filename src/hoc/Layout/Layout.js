import React, { Component } from 'react'
import HorizontalNavbar from '../../components/Navigation/HorizontalNavbar/HorizontalNavbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.scss'
import { connect } from 'react-redux'
import Modal from './../../components/UI/Modal/Modal'

class Layout extends Component {
  componentWillMount() {
    // Initializing state inside componentWillMount because the this.showComingSoonModal needs to be initialized before setting the state
    this.setState({
      showSideDrawer: false,
      showComingSoon: false,
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
          clicked: this.showComingSoonModal
        },
        {
          label: 'Contact Us',
          clicked: this.showComingSoonModal
        }
      ]
    })
  }
  componentWillReceiveProps(nextProps) {
    const prevStateItems = this.state.items
    prevStateItems[1].badge = nextProps.cart.length || null
    this.setState({
      items: prevStateItems
    })
  }

  showComingSoonModal = () => {
    this.setState({
      showComingSoon: true
    })
  }

  closeModal = () => {
    this.setState({
      showComingSoon: false
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
        <Modal show={this.state.showComingSoon} modalClosed={this.closeModal}>
          <div className={classes.comingSoon}>
            <h2>This feature is</h2>
            <div className={classes.comingSoonImg} />
          </div>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
})

export default connect(mapStateToProps)(Layout)
