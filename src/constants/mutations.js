import { GraphQLList } from 'graphql';
import createCommentInputType from './comment-input';

const commentMutations = {
  createComments: {
    type: new GraphQLList({comment: String}),
    args: {
      input: {
        type: new GraphQLList(createCommentInputType),
      },
    },
    resolve: async (source, { input }) => {
      const result = input.map(commentPayload => console.log(commentPayload));
      return result;
    },
  },
};

export default commentMutations;
