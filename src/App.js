import React, { Component } from 'react';
import MyComponent from '../src/components/myComponent'

class App extends Component {
  render() {
    return (
      <div >
        <MyComponent greeting={'Hello Juank from a Property'}/>
      </div>
    );
  }
}

export default App;
