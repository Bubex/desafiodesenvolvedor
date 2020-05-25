import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global'

//Importando os Componentes
import Home from './pages/home'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                <GlobalStyle />
            </BrowserRouter>
        )
    }
}

export default App;
