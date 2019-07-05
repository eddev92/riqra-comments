import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';

const createCommentInputType = new GraphQLInputObjectType({
  name: 'CreateComment',
  fields: () => ({
    comment: {
      type: new GraphQLNonNull(GraphQLString),
    }
  }),
});

export default createCommentInputType;
