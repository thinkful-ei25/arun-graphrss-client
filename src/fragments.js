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
