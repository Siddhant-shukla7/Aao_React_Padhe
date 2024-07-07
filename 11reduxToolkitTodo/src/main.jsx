import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
//A quick summary:
// Redux is a core library 

// react-redux is an implementation of redux so that react and redux can talk with each other.

// Start- by making the store: we need a configurestore in it, 

// we call features as slice, we make slice by createSlice :
// To make slice we need:
// 1.name
// 2. initialstate
// 3. list of reducers