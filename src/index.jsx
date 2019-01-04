import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import Home from './containers/Home/Home';
import { resolvers } from './resolvers';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_URI || 'http://localhost:4000/graphql',
  clientState: {
    resolvers,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>,
  document.getElementById('root')
);
