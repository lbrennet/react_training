import React from 'react'

import { connect } from 'react-redux'
import Posts from './Posts'
import SinglePost from './SinglePost'

const App = ({ openedPost, closePost }) =>
  openedPost ? <SinglePost /> : <Posts />

const mapStateToProps = state => ({
  openedPost: state.routing.openedPost
})

export default connect(mapStateToProps)(App)
