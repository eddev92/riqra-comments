import { COMMENT_ACTIONS } from "../../constants/actions";

let defaultState = {

}

const comments = (state = defaultState, action) => {
  switch (action.type) {
    case COMMENT_ACTIONS.COMMENT_ACTIONS_ADD_COMMENT:
      return [
        ...state,
        // comment(undefined, action)
      ]
    case COMMENT_ACTIONS.COMMENT_ACTIONS_ADD_COMMENT_OK:
      return [
        ...state,
        // comment(undefined, action)
      ]
    case COMMENT_ACTIONS.COMMENT_ACTIONS_ADD_COMMENT_NO:
      return [
        ...state,
        // comment(undefined, action)
      ]
    // case 'TOGGLE_TODO':
    //   return state.map(t =>
    //     comment(t, action)
    //   )
    default:
      return state
  }
}

export default comments