import gql from 'graphql-tag';

export const articleFields = gql`
  fragment ArticleFields on Article {
    id
    title
    url
    summary
    description
  }
`;

export const feedFields = gql`
  fragment FeedFields on Feed {
    id
    title
  }
`;
