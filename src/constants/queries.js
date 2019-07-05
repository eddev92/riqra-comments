
import { gql } from "apollo-boost";

export const GET_COMMENTS = gql`
{
  comments {
    comment
  }
}
`
export const POST_COMMENT = gql`
query addSimpleComment($comment: String) {
  addSimpleComment(comment: $comment) {
      comment
    }
}
`