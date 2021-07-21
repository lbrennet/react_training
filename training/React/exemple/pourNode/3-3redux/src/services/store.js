//pour intégrer nos 3 reducers au sein d'un meme store combinereducer de redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import postsDetailsReducer from './postsDetails/reducer'
import postsReducer from './posts/reducer'
import routingReducer from './routing/reducer'

const reducer = combineReducers({
  postsDetails: postsDetailsReducer,
  posts: postsReducer,
  routing: routingReducer
  // pour avoir acces aux valeurs stockees state.posts.posts par exemple
})

export default createStore(reducer, applyMiddleware(thunk))
