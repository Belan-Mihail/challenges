import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import css from  './css/Content.module.css'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: [],
      }
    }


    componentDidMount() {
      setTimeout(() => {
        this.setState({
          isLoaded: true,
          posts: savedPosts
      })
    }, 2000)
    }

    handleChange = (event) => {
      const inputText = event.target.value.toLowerCase()
      console.log(inputText)
      console.log('handleChangeInvoked')
  
      const filtredPosts = savedPosts.filter(post => {
        return post.name.toLowerCase().includes(inputText)
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
                  {this.state.isLoaded ? <PostItem posts = {this.state.posts} /> : <Loader />}
        </div>
      </div>
    )
  }
}

export default Content