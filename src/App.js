import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';
import signInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';
import Header   from './components/header/header.component';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={signInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
