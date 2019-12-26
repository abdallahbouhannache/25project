import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import PostForm from './compo/PostForm';
import Posts from './compo/Posts';
import Store from './compo/Store';


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
