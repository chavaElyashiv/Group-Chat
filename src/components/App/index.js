import React from 'react';
import {Provider} from 'react-redux';
import { Socket } from 'socket.io-client';
import store from '../../redux/Stores/store';
import ContactList from '../ContactList';
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