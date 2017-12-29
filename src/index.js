import React from 'react';
import { render } from 'react-dom'

import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'

import Root from './Root';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4333/' }),
    cache: new InMemoryCache(),
  });
  const WrappedApp = (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );

render(WrappedApp, document.getElementById('root'));

