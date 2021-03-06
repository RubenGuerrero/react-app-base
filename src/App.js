import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;
const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading
});
const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading
});
const Topics = Loadable({
  loader: () => import('./pages/Topics'),
  loading: Loading
});

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
export default BasicExample;
