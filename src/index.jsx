import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import './index.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_URI || 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <p>Hello apollo</p>
  </ApolloProvider>,
  document.getElementById('root')
);
