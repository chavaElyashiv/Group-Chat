import React from 'react';
// import {provider} from 'react-redux';
// import store from '../../redux/store';
import Messenger from '../Messenger';

export default function App() {
    return (
        // <provider store={store}>
        <div className = "App" >
        <Messenger/>
        </div>
        // </provider>
    );
}