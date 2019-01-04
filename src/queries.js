import gql from 'graphql-tag';

import { articleFields, feedFields } from './fragments';

export const fetchArticlesQuery = gql`
  query FetchAllArticles {
    articles {
      ...ArticleFields
      expanded @client
    }
  }
  ${articleFields}
`;

export const fetchFeedsQuery = gql`
  query FetchFeeds {
    feeds {
      ...FeedFields
    }
  }
  ${feedFields}
`;
