import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BookItem from "./../../components/Books/BookItem/BookItem";
import classes from "./BookList.module.scss";
import * as actionTypes from "./../../store/actions";
import { useRouter } from "next/router";

function BookList(props) {
  const { query, push, pathname } = useRouter();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const catId = parseInt(query.categoryId);
    const books = props.books.filter((b) => b.categoryId === catId);
    setBooks(books);
  }, []);

  function bookItemClickHandler(bookId) {
    console.log({ bookId }, query);
    push(`/categories/${query.categoryId}/books/${bookId}`);
  }
  return (
    <>
      <div className={classes.BookList}>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            isInCart={
              props.cart.filter((cartItem) => cartItem.id === book.id).length
            }
            clicked={() => bookItemClickHandler(book.id)}
            addToCart={props.addToCart.bind(this, book)}
          />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  books: state.bk.books,
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (book) => dispatch({ type: actionTypes.ADD_TO_CART, book }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
