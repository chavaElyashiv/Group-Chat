import { Provider } from 'react-redux';
import store from '../../redux/Stores/store';
import Messenger from '../Messenger';
import React from 'react'
import SpinnerWait from '../Spinner'
export default function App() {

  return (
    <Provider store={store}>

      <div className="App" >
        <Messenger />
        {/* <SpinnerWait /> */}
      </div>
    </Provider>
  );
}


