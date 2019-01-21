import React, { Component } from 'react'
import CategoryItem from './../../components/Books/CategoryItem/CategoryItem'
import { connect } from 'react-redux'
import classes from './CategoryList.module.scss'
import _ from 'underscore'
import { withRouter } from 'react-router-dom'

class CategoryList extends Component {
  categoryItemClickedHandler = catId => {
		console.log('​CategoryList -> this.props', this.props)
    this.props.history.push({
      pathname: `/categories/${catId}/books`
    })
  }

  render() {
    return (
      <div className={classes.CategoryList}>
        {_.sortBy(this.props.categories, 'label').map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            clicked={this.categoryItemClickedHandler}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.ctg.categories
})

export default connect(mapStateToProps)(withRouter(CategoryList))
