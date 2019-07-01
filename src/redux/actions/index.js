import { COMMENT_ACTIONS } from "../../constants/actions";

let nextTodoId = 0;

export const addComment = (comment) => {
  return {
    type: COMMENT_ACTIONS.COMMENT_ACTIONS_ADD_COMMENT,
    id: nextTodoId++,
    comment
  }
}
