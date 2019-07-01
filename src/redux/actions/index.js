import { COMMENT_ACTIONS } from "../../constants/actions";

export const addComment = (comment) => {
  console.log(comment, 'comment ACTIONS')
  return {
    type: COMMENT_ACTIONS.COMMENT_ACTIONS_ADD_COMMENT,
  }
}

export const showAddComment = () => {
  console.log('entro aqui')
  return {
    type: COMMENT_ACTIONS.COMMENT_ACTIONS_SHOW_ADD_COMMENT
  }
}

export const saveComment = (comment) => {
  console.log(comment)
  return {
    type: COMMENT_ACTIONS.COMMENT_ACTIONS_SAVE_COMMENT,
    comment
  }
}