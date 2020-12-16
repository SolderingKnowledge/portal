import React, { Component } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { HashRouter, Switch, Route } from "react-router-dom";
import Songs from "./components/Songs";
import Portal from "./components/Portal"
import Details from "./components/Details"
import CreateSong from "./components/CreateSong"
import './App.css';

// apollo-client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  dataIdFromObject: o => o.id,
  cache: new InMemoryCache()
});

class App extends Component {
    render(){
        return (
            <ApolloProvider client={client}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Songs}></Route>
                        <Route path="/songs/new" component={CreateSong}></Route>
                        <Route path="/songs/:id" component={Details}></Route>
                        <Route exact path="/portal" component={Portal}></Route>
                    </Switch>
                </HashRouter>
            </ApolloProvider>
        );
    }
}

export default App;