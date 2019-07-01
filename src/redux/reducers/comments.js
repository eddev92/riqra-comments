import { COMMENT_ACTIONS } from "../../constants/actions";

let defaultState = {
  showAddComment: false,
  comment: '',
  comments: []
}

const comments = (state = defaultState, action) => {
  console.log('reducer STATE', state)
  console.log('reducer ACTION', action)
  switch (action.type) {
    case COMMENT_ACTIONS.COMMENT_ACTIONS_ADD_COMMENT:
      return {
        ...state,
      }
    case COMMENT_ACTIONS.COMMENT_ACTIONS_SHOW_ADD_COMMENT:
      return {
        ...state,
        showAddComment: !state.showAddComment
      }
    
    case COMMENT_ACTIONS.COMMENT_ACTIONS_SAVE_COMMENT:
      return {
        ...state,
        comment: action.comment
    }

    default:
      return state
  }
}

export default comments
