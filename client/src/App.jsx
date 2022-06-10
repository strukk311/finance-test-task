import React from 'react';
import { TickersList } from './components/TickersList/TickersList';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './components/HomePage/HomePage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import './App.scss';

const App = () => (
  <section className="App">
    <Navigation />

    <Switch>
      <Route path="/TickersPage"> 
        <TickersList />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <NotFoundPage />
    </Switch>
  </section>
);

export default App;
