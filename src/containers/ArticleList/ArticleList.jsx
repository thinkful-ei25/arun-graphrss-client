import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import Article from '../Article/Article';

const query = gql`
  query FetchAllArticles {
    articles {
      id
      title
      url
      summary
      description
      expanded @client
    }
  }
`;

export default function ArticleList() {
  return (
    <Query query={query}>
      {({ data, loading, error }) => {
        if (loading) {
          return <p>Loading</p>;
        }
        if (error) {
          return <p>ERROR: {error.message}</p>;
        }

        return (
          <ul>
            {data.articles &&
              data.articles.map((article) => (
                <article key={article.id}>
                  <Article {...article} />
                </article>
              ))}
          </ul>
        );
      }}
    </Query>
  );
}
