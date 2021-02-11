import { Provider } from 'react-redux';
import store from '../../redux/Stores/store';
import Messenger2 from '../Messenger2'
import React from 'react';


export default function App() {

  return (
    <Provider store={store}>
      <div className="App" >
        <Messenger2 />
      </div>
    </Provider>
  );
}


