import React, { useState, useEffect } from 'react'
import css from  './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios';
import API_KEY from '../secrets'



function ContentAPIHooks() {
  const [isLoaded, setisLoaded] = useState(false)
  const [posts, setPosts] = useState([])
  const [savedPosts, setsavedPosts] = useState([])


  useEffect(() => {
    setTimeout(() => {
      fetchImages()
  }, 2000)}, [])

  const fetchImages = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100`
      ).then(response => {
        console.log(response)
        const fetchedPosts = response.data.hits
        setisLoaded(true)
        setPosts(fetchedPosts)
        setsavedPosts(fetchedPosts)
      })
  }

  const handleChange = (event) => {
    const inputText = event.target.value.toLowerCase()
    console.log(inputText)
    console.log('handleChangeInvoked')

    const filtredPosts = savedPosts.filter(post => {
      return post.user.toLowerCase().includes(inputText)
    })

    setPosts(filtredPosts)
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
          // <h4>posts found: {posts.length}</h4>
        </form>
    </div>
    <div className={css.SearchResults}>
              {isLoaded ? <PostItemAPI fetchedPosts = {posts} /> : <Loader />}
    </div>
  </div>
  )
}

export default ContentAPIHooks








