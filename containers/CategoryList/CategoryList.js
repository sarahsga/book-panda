import React, { Component } from "react";
import CategoryItem from "./../../components/Books/CategoryItem/CategoryItem";
import { connect } from "react-redux";
import classes from "./CategoryList.module.scss";
import _ from "underscore";
import { useRouter } from "next/router";

function CategoryList(props) {
  const router = useRouter();

  function categoryItemClickedHandler(catId) {
    console.log("​CategoryList -> props", props);
    router.push(`/categories/${catId}/books`);
  };

  return (
    <div className={classes.CategoryList}>
      {_.sortBy(props.categories, "label").map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          clicked={() => categoryItemClickedHandler(category.id)}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.ctg.categories,
});

export default connect(mapStateToProps)(CategoryList);
