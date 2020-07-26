import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
   
import Main from './pages/main/index';
import Products from './pages/products/index';

//brownserrouter estamos usando a rota atraves de um brownser
//switch permitirque uma unica rota seja chamada ao mesmo tempo
const Routes =()=>(
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/products/:id' component={Products} />


    </Switch>
    
    </BrowserRouter>


);

export default Routes;