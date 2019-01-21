import React, { Component } from 'react'
import CategoryItem from './../../components/Books/CategoryItem/CategoryItem'
import { connect } from 'react-redux'
import classes from './CategoryList.module.scss'
import _ from 'underscore'

class CategoryList extends Component {
  render() {
    return (
      <div className={classes.CategoryList}>
        {_.sortBy(this.props.categories, 'label').map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.books.categories
})

export default connect(mapStateToProps)(CategoryList)
