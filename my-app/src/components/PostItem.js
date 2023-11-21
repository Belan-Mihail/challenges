import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
  return (
    <div>
      {props.savedPosts.map(post => {
                const { name, title, description, image } = post;
                return (
                  <div className={css.SearchItem}>
                  <p>{title}</p>
                    <p>{name}</p>
                    <img src={image}></img>
                     <p>{description}</p>
                  </div>
                )
            })}   
    </div>
  )
}

export default PostItem
