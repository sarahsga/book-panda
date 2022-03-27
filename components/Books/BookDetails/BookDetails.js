import classes from "./BookDetails.module.scss";
import { connect } from "react-redux";
import BookPrice from "./BookPrice/BookPrice";
import BookBasicInfo from "./BookBasicInfo/BookBasicInfo";
import BookDescription from "./BookDescription/BookDescription";
import ProductDetails from "./ProductDetails/ProductDetails";
import AuthorInfo from "./AuthorInfo/AuthorInfo";
import * as actionTypes from "./../../../store/actions";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function BookDetails(props) {
  const [chosenBook, setChosenBook] = useState(null);
  const { isReady, query } = useRouter();

  useEffect(() => {
    if (!isReady) return;
    const catId = parseInt(query.categoryId);
    const bookId = parseInt(query.bookId);

    console.log(query, catId, bookId);
    const booksByCatId = props.books.filter((b) => b.categoryId === catId);
    const chosenBooksArr = booksByCatId.filter((b) => b.id === bookId);

    setChosenBook(
      chosenBooksArr && chosenBooksArr.length ? chosenBooksArr.pop() : null
    );
  }, [isReady]);

  if (!chosenBook) return <div />;

  return (
    <div className={classes.BookDetails}>
      <section className={classes.top}>
        <figure
          style={{
            backgroundImage: `url(${chosenBook.imageUrl})`,
          }}
        />
        <section className={classes.right}>
          <BookBasicInfo
            title={chosenBook.name}
            authors={chosenBook.authors}
            rating={chosenBook.rating}
          />
          <BookPrice
            price={chosenBook.price}
            isInCart={
              props.cart.filter((cartItem) => cartItem.id === chosenBook.id)
                .length
            }
            discount={chosenBook.discountPercentage}
            addToCart={props.addToCart.bind(this, chosenBook)}
          />
        </section>
      </section>
      <BookDescription desc={chosenBook.description} />
      <ProductDetails book={chosenBook} />
      <AuthorInfo
        authors={chosenBook.authors}
        editorialReviews={chosenBook.editorialReviews}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  books: state.bk.books,
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (book) => dispatch({ type: actionTypes.ADD_TO_CART, book }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
