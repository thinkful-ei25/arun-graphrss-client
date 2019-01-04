import gql from 'graphql-tag';

import Article from './Article';
import Mutation from './Mutation';

export const typeDefs = gql`
  extend type Article {
    expanded: Boolean
  }
`;

export const resolvers = {
  Mutation,
  Article,
};
