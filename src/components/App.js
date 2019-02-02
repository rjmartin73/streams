import React from 'react';
import { Router as BrowserRouter, Route } from 'react-router-dom';
import StreamList from '../components/streams/StreamList';
import StreamCreate from '../components/streams/StreamCreate';
import StreamEdit from '../components/streams/StreamEdit';
import StreamDelete from '../components/streams/StreamDelete';
import StreamShow from '../components/streams/StreamShow';
import Header from './Header.js';
import history from '../history';


const App = () => {
    return (
        <div className="ui container">

            <BrowserRouter history={history}> 
                <div>
                    <Header></Header>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/streams/new" component={StreamCreate}></Route>
                    <Route path="/streams/edit" component={StreamEdit}></Route>
                    <Route path="/streams/delete" component={StreamDelete}></Route>
                    <Route path="/streams/show" component={StreamShow}></Route>
                </div>
            </BrowserRouter>
        </div>)
};

export default App;