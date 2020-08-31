import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import store from '../src/store';
import {Provider} from 'react-redux';

//Views
import Home from './view/home'
import Sobre from './view/sobre'
import Cursos from './view/cursos'
import Login from './view/login'
import Blog from './view/blog'


export default function App(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sobre" component={Sobre}/>
                <Route exact path="/cursos" component={Cursos}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/blog" component={Blog}/>
            </BrowserRouter>
        </Provider>
    )
}