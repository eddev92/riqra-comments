import { COMMENT_ACTIONS } from "../../constants/actions";

export const addComment = (comment) => {
  console.log(comment, 'comment ACTIONS')
  return {
    type: COMMENT_ACTIONS.COMMENT_ACTIONS_ADD_COMMENT,
    comment
  }
}

export const showAddComment = () => {
  console.log('entro aqui')
  return {
    type: COMMENT_ACTIONS.COMMENT_ACTIONS_SHOW_ADD_COMMENT
  }
}

export const handleComment = (comment) => {
  console.log(comment)
  return {
    type: COMMENT_ACTIONS.COMMENT_ACTIONS_SAVE_COMMENT,
    comment
  }
}

export const deleteComment = (comment, index) => {
  return {
    type: COMMENT_ACTIONS.COMMENT_ACTIONS_DELETE_COMMENT,
    comment,
    position: index
  }
}
