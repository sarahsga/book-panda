import React, { Component } from 'react'
import classes from './BookDescription.module.scss'

class BookDescription extends Component {
  state = {
    showFull: false
  }

  readMoreClickHandler = () => {
    this.setState(prevState => ({ showFull: !prevState.showFull }))
  }

  render() {
    const MAX_PREVIEW_LENGTH = 250

    let readMoreBtn = null
    let desc = null

    if (this.state.showFull) {
      desc = this.props.desc
    } else {
      desc = <>{this.props.desc.substr(0, MAX_PREVIEW_LENGTH)}&nbsp;...&nbsp;</>
    }

    if (this.props.desc.length > MAX_PREVIEW_LENGTH) {
      readMoreBtn = (
        <div>
          <a onClick={this.readMoreClickHandler}>
            {this.state.showFull ? 'Read Less' : 'Read More'}
          </a>
        </div>
      )
    }
    return (
      <div className={classes.BookDescription}>
        <p>{desc}</p>
        {readMoreBtn}
      </div>
    )
  }
}

export default BookDescription
