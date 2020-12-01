import React from 'react';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import Messenger from '../Messenger';

export default function App() {
    return (
        <Provider store={store}>
        <div className = "App" >
        <Messenger/>
        </div>
      </Provider>
    );
}