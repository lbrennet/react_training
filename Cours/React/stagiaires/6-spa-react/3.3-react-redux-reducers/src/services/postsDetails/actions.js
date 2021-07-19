export const FETCH_POST_DETAILS = 'FETCH_POST_DETAILS'
// pour l'action asynchrone d'un resultat
export const FETCH_POST_DETAILS_BEGIN = 'FETCH_POST_DETAILS_BEGIN'
export const FETCH_POST_DETAILS_SUCCESS = 'FETCH_POST_DETAILS_SUCCESS'
export const FETCH_POST_DETAILS_ERROR = 'FETCH_POST_DETAILS_ERROR'

//  à vous

export const fetchPostDetailsBegin = post => ({
  type: FETCH_POST_DETAILS_BEGIN,
  post
})

export const fetchPostDetailsSuccess = (post, details) => ({
  type: FETCH_POST_DETAILS_SUCCESS,
  post,
  details
})

export const fetchPostDetailsError = (post, error) => ({
  type: FETCH_POST_DETAILS_ERROR,
  post,
  error
})
