import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
  return (
    <div>
      {props.posts.map(post => {
                const { name, title, description, image } = post;
                return (
                  <div className={css.SearchItem} key={title}>
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
