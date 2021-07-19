import React from 'react';
import Post from './Post';

import { array } from 'prop-types';

const Posts = ({ posts }) => (
  <React.Fragment>
    {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))
    }
  </React.Fragment>
);

Posts.propTypes = {
  posts: array,
};

export default Posts;
