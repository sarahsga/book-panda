import React, { Component } from 'react'
import classes from './BookDetails.module.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import BookPrice from './BookPrice/BookPrice'
import BookBasicInfo from './BookBasicInfo/BookBasicInfo'
import BookDescription from './BookDescription/BookDescription'
import ProductDetails from './ProductDetails/ProductDetails'
import AuthorInfo from './AuthorInfo/AuthorInfo'

class BookDetails extends Component {
  state = {
    chosenBook: null
  }
  componentWillMount() {
    const catId = parseInt(this.props.match.params.categoryId)
    const bookId = parseInt(this.props.match.params.bookId)

    const booksByCatId = this.props.books.filter(b => b.categoryId === catId)
    const chosenBooksArr = booksByCatId.filter(b => b.id === bookId)

    this.setState({
      chosenBook:
        chosenBooksArr && chosenBooksArr.length ? chosenBooksArr.pop() : null
    })
  }

  render() {
    return (
      <div className={classes.BookDetails}>
        <section className={classes.top}>
          <figure
            style={{
              backgroundImage: `url(${this.state.chosenBook.imageUrl})`
            }}
          />
          <section className={classes.right}>
            <BookBasicInfo
              title={this.state.chosenBook.name}
              authors={this.state.chosenBook.authors}
              rating={this.state.chosenBook.rating}
            />
            <BookPrice
              price={this.state.chosenBook.price}
              discount={this.state.chosenBook.discountPercentage}
            />
          </section>
        </section>
        <BookDescription desc={this.state.chosenBook.description} />
        <ProductDetails book={this.state.chosenBook} />
        <AuthorInfo
          authors={this.state.chosenBook.authors}
          editorialReviews={this.state.chosenBook.editorialReviews}
        />
      </div>
    )
  }
}

const mapPropsToState = state => ({
  books: state.bk.books
})

export default connect(mapPropsToState)(withRouter(BookDetails))
