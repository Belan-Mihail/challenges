import React from 'react'
import css from './css/PostItem.module.css'

function PostItemAPI(props) {
  return (
    <div>
      {props.fetchedPosts.map(post => {
                const { id, type, user, webformatURL, tags } = post;
                return (
                  <div className={css.SearchItem} key={id}>
                    <p>{type}</p>
                    <p>{user}</p>
                    <img src={webformatURL}></img>
                     <p>{tags}</p>
                  </div>
                )
            })}   
    </div>
  )
}

export default PostItemAPI
