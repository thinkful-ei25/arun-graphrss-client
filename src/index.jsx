import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import ArticleList from './containers/ArticleList';
import { resolvers } from './resolvers';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_URI || 'http://localhost:4000/graphql',
  clientState: {
    resolvers,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ArticleList />
  </ApolloProvider>,
  document.getElementById('root')
);
