import gql from 'graphql-tag';

import { articleFields, feedFields } from './fragments';

export const toggleExpandedMutation = gql`
  mutation ToggleExpanded($id: ID!) {
    toggleExpanded(id: $id) @client
  }
`;

export const addFeedMutation = gql`
  mutation AddFeed($feedUrl: String!) {
    addFeed(url: $feedUrl) {
      ...FeedFields
    }
  }
  ${feedFields}
`;

export const removeFeedMutation = gql`
  mutation RemoveFeed($feedId: ID!) {
    removeFeed(id: $feedId) {
      ...FeedFields
    }
  }
  ${feedFields}
`;

export const refreshArticlesMutation = gql`
  mutation RefreshArticles {
    refresh {
      ...ArticleFields
    }
  }
  ${articleFields}
`;
