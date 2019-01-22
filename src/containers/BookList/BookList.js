import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookItem from './../../components/Books/BookItem/BookItem'
import classes from './BookList.module.scss'

class BookList extends Component {
  modalClosedHandler = () => {
    this.setState({ chosenBook: null })
  }
  bookItemClickHandler = bookId => {
    this.props.history.push({
      pathname: `${this.props.location.pathname}/${bookId}`
    })
  }
  render() {
    return (
      <>
        <div className={classes.BookList}>
          {this.props.books.map(book => (
            <BookItem
              key={book.id}
              book={book}
              clicked={this.bookItemClickHandler.bind(this, book.id)}
            />
          ))}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  books: state.bk.books
})

export default connect(mapStateToProps)(BookList)
