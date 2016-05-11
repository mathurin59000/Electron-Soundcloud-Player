//React libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Import Container component
import AppContainer from './containers/app.container'

"use strict"; 

class App extends React.Component {
  render () {
    return (
      <AppContainer />
    );
  }
}

// Render to index.html
ReactDOM.render(
  <App />,
  document.getElementById('content')
);