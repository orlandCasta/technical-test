// Type's
export const CLEAR_STATE_DONATION_CARD = 'CLEAR_STATE_DONATION_CARD'

export const LOAD_COUNTERS_CARD_REQUEST = 'LOAD_COUNTERS_CARD_REQUEST'
export const LOAD_COUNTERS_CARD_SUCCESS = 'LOAD_COUNTERS_CARD_SUCCESS'
export const LOAD_COUNTERS_CARD_FAILURE = 'LOAD_COUNTERS_CARD_FAILURE'

export const LOAD_ALL_DONATION_CARD_PAGINATION_REQUEST =
  'LOAD_ALL_DONATION_CARD_PAGINATION_REQUEST'
export const LOAD_ALL_DONATION_CARD_PAGINATION_SUCCESS =
  'LOAD_ALL_DONATION_CARD_PAGINATION_SUCCESS'
export const LOAD_ALL_DONATION_CARD_PAGINATION_FAILURE =
  'LOAD_ALL_DONATION_CARD_PAGINATION_FAILURE'

export const LOAD_ONE_DONATION_CARD_REQUEST = 'LOAD_ONE_DONATION_CARD_REQUEST'
export const LOAD_ONE_DONATION_CARD_SUCCESS = 'LOAD_ONE_DONATION_CARD_SUCCESS'
export const LOAD_ONE_DONATION_CARD_FAILURE = 'LOAD_ONE_DONATION_CARD_FAILURE'

// Action's
export const clearStateCard = (payload) => ({
  type: CLEAR_STATE_DONATION_CARD,
  payload
})

export const loadCountersCardRequest = (payload = 1) => ({
  type: LOAD_COUNTERS_CARD_REQUEST,
  payload
})
export const loadCountersCardSuccess = (payload) => ({
  type: LOAD_COUNTERS_CARD_SUCCESS,
  payload
})
export const loadCountersCardFailure = (error) => ({
  type: LOAD_COUNTERS_CARD_FAILURE,
  error
})

export const loadAllPaginationCardRequest = (filters) => ({
  type: LOAD_ALL_DONATION_CARD_PAGINATION_REQUEST,
  filters
})
export const loadAllPaginationCardSuccess = (payload) => ({
  type: LOAD_ALL_DONATION_CARD_PAGINATION_SUCCESS,
  payload
})
export const loadAllPaginationCardFailure = (error) => ({
  type: LOAD_ALL_DONATION_CARD_PAGINATION_FAILURE,
  error
})

export const donationCardGetOneRequest = (id) => ({
  type: LOAD_ONE_DONATION_CARD_REQUEST,
  id
})
export const donationCardGetOneSuccess = (payload) => ({
  type: LOAD_ONE_DONATION_CARD_SUCCESS,
  payload
})
export const donationCardGetOneFailure = (error) => ({
  type: LOAD_ONE_DONATION_CARD_FAILURE,
  error
})

// Reducer
const initialState = {
  list: [],
  info: [],
  view: {},
  filters: {},
  loading: false,
  error: null
}

export function card(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_DONATION_CARD_PAGINATION_SUCCESS:
      return { ...state, list: { ...action.payload } }
    case LOAD_COUNTERS_CARD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        info: { ...action.payload }
      }
    case LOAD_ONE_DONATION_CARD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: true,
        view: { ...action.payload }
      }
    case LOAD_COUNTERS_CARD_FAILURE:
    case LOAD_ALL_DONATION_CARD_PAGINATION_FAILURE:
    case LOAD_ONE_DONATION_CARD_FAILURE:
      return { ...state, loading: false, error: action.error }
    case LOAD_COUNTERS_CARD_REQUEST:
    case LOAD_ALL_DONATION_CARD_PAGINATION_REQUEST:
    case LOAD_ONE_DONATION_CARD_REQUEST:
      return { ...state, loading: true, error: null }
    case CLEAR_STATE_DONATION_CARD:
      return initialState
    default:
      return state
  }
}
