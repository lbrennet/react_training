import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../services/store'
import Post from './Post'
import { closePost } from '../services/routing/actions'
import { fetchPostDetails } from '../services/postsDetails/actions'
// c'est dans ce composant que l'on déclenche la recupération des données
class SinglePost extends Component {
  //  à vous
  //  à vous
  //  à vous
  render() {
    const { openedPost, postsDetails, closePost } = this.props
    return (
      <div>
      <h2>Détail  Reddit {openedPost.permalink}</h2>
        <a href="#" onClick={this.onCloseButtonClicked}>
          Back
        </a>
        <Post post={openedPost} details={postsDetails[openedPost.id]} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  openedPost: state.routing.openedPost,
  postsDetails: state.postsDetails
})

const mapDispatchToProps = { closePost, fetchPostDetails }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost)
