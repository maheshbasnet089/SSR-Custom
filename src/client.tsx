import ReactDOM from 'react-dom'
import App from './App'
import React from 'react'

//@ts-ignore
ReactDOM.hydrate(
    <App todos={window.todos} />, 
    document.getElementById('app')
)
