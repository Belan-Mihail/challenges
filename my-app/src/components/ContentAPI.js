import React, { Component } from 'react'
import css from  './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios';
import API_KEY from '../secrets'


export class ContentAPI extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: [],
        savedPosts: [],
      }
    }


    componentDidMount() {
      this.fetchImages()
  }

  async fetchImages() {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100`
      ).then(response => {
        console.log(response)
        const fetchedPosts = response.data.hits
        this.setState({
          isLoaded: true,
          posts: fetchedPosts,
          savedPosts: fetchedPosts,
        })
      })
  }

    handleChange = (event) => {
      const inputText = event.target.value.toLowerCase()
      console.log(inputText)
      console.log('handleChangeInvoked')
  
      const filtredPosts = this.state.savedPosts.filter(post => {
        return post.user.toLowerCase().includes(inputText)
      })

      this.setState({
        posts: filtredPosts
      })
    }

  render() {
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
              onChange={(event) => this.handleChange(event)}
              />
              // <h4>posts found: {this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
                  {this.state.isLoaded ? <PostItemAPI fetchedPosts = {this.state.posts} /> : <Loader />}
        </div>
      </div>
    )
  }
}



export default ContentAPI