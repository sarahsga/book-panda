import React from 'react'
import classes from './AuthorInfo.module.scss'

const AuthorInfo = props => {
  return (
    <div className={classes.AuthorInfo}>
      <h3>Editorial Reviews</h3>
      <h2 className={classes.subHeading}>Review</h2>
      {props.editorialReviews.map(editorialReview => (
        <div className={classes.content} key={editorialReview.id}>
          <p>"{editorialReview.review}"</p>
          <span className={classes.editor}>({editorialReview.editor})</span>
        </div>
      ))}
      <h2 className={classes.subHeading}>About the Author</h2>
      {props.authors.map(author => (
          <p key={author.id} className={classes.content}>
          <strong>{author.name}</strong> {author.about}
        </p>
      ))}
    </div>
  )
}

export default AuthorInfo
