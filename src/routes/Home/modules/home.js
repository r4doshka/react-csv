// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_INDUSTRY_MENU = 'TOGGLE_INDUSTRY_MENU'

// ------------------------------------
// Actions
// ------------------------------------
export function toggleIndustry (value = false) {
  return {
    type    : TOGGLE_INDUSTRY_MENU,
  }
}


export const actions = {
  toggleIndustry
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_INDUSTRY_MENU]    : (state, action) => {
      console.log(state);
      return !state
    },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
