import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from '../components/streams/StreamCreate'
import StreamEdit from '../components/streams/StreamEdit'
import StreamList from '../components/streams/StreamList'
import StreamShow from '../components/streams/StreamShow'
import StreamDelete from '../components/streams/StreamDelete'



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
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