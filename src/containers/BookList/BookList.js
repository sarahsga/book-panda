import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookItem from './../../components/Books/BookItem/BookItem'
import classes from './BookList.module.scss'

class BookList extends Component {
  render() {
    return (
      <div className={classes.BookList}>
        {this.props.books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.bk.books
})

export default connect(mapStateToProps)(BookList)
