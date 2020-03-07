import React from 'react';
import Todos from './Todos'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    return (
      <Todos />
    );
  }
}



export default App;