import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, hashHistory, IndexRoute } from "react-router-dom";
import ApolloClient from "@apollo/client";// framework agnostic, doesn't care if it's angular or react
import { ApolloProvider } from "@apollo/client";// provides integration with react
import Songs from "./components/Songs";
import App from "./components/App"
import "./style/style.css"

const client = new ApolloClient({}); // assumes there is an endPoint available http://localhost:5000/graphql to grab data

const Root = () => {
  return (
    <ApolloProvider client={client}>
        <Songs />
        <BrowserRouter history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Songs} />
            </Route>
        </BrowserRouter>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
