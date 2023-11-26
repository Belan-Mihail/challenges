import React, { useState, useEffect } from 'react'
import {savedPosts} from '../posts.json'
import css from  './css/Content.module.css'
import PostItem from './PostItem'
import Loader from './Loader'


function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [fetchedPosts, setfetchedPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(!isLoaded)
            setfetchedPosts(savedPosts)
        }, 2000)
        }, [])
    
        const handleChange = (event) => {
            const inputText = event.target.value.toLowerCase()
            const filtredPosts = savedPosts.filter(post => {
              return post.name.toLowerCase().includes(inputText)
            })
            setfetchedPosts(filtredPosts)
          }

  return (
    <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photo</h1>
            <form>
              <label htmlFor='searchInput'>Search:</label>
              <input
              type='search'
              id='searchInput'
              placeholder='by Authors'
              onChange={(event) => handleChange(event)}
              />
              // <h4>posts found: {fetchedPosts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
                  {isLoaded ? <PostItem fetchedPosts = {fetchedPosts} /> : <Loader />}
        </div>
      </div>
  )
}

export default ContentHooks