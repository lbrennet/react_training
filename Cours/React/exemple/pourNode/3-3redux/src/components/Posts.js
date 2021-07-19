import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../services/posts/actions'
import { openPost } from '../services/routing/actions'
// c'est dans ce composant que l'on déclenche la recupération des données
class Posts extends Component {
  componentDidMount() {
    const { fetchPosts, posts } = this.props
    if (posts.length === 0) {
      fetchPosts()
    }
  }
  onPostClicked = (event, post) => {
    event.preventDefault()
    this.props.openPost(post)
  }
  render() {
    const { isFetching, posts, error } = this.props
    return (

      <div>
        <h2>Liste Reddit</h2>
        {isFetching && <p>Fetching posts…</p>}
        {error && <p>{error.message}</p>}
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <a
                href={post.url}
                onClick={event => this.onPostClicked(event, post)}
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  error: state.posts.error,
  isFetching: state.posts.isFetching
})

const mapDispatchToProps = { fetchPosts, openPost }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
