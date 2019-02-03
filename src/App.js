import React, { Component } from 'react';
import MyComponent from '../src/components/myComponent'
//import Topics from '../src/components/topics'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home Index</h2>;
const About = () => <h2>Prueba About</h2>;

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/mycomponent/">MyComponent</Link>
            </li>
            <li>
              <Link to="/mycomp-withparams">MyComponent with params</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" component={Index} />
        <Route path="/about/" exact component={About} />
        <Route path="/mycomponent/" component={MyComponent} extraProps={{greeting:'Hello Juank from a Property'}} />
        <Route path="/mycomp-withparams/" render={(props) => <MyComponent greeting={'Hello Juank from a Property'}></MyComponent>} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
    
    );
  }
}

const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default App;
