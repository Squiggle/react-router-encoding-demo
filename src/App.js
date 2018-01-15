import React, { Component } from 'react';
import './App.css';
import { withRouter, BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';

const pages = [
  { title: 'one', content: 'This is page one. Works fine.' },
  { title: 'two & 2', content: 'This is page two. Path escapes the spaces but not the ampersand.' },
  { title: 'three/with a forward slash', content: 'This is page three with a forward slash. Always a 404.' },
  { title: 'four\\with a backslash', content: 'This is page four with a backslash. Works when navigating internally, but not when linking externally.' }
];

class Page extends Component {
  render() {
    const pageContent = pages.find(p => p.title === this.props.match.params.title);
    if (pageContent == null) {
      return <h1>404</h1>;
    }
    return (
      <section>
        <h1>{pageContent.title}</h1>
        <p>{pageContent.content}</p>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
              { pages.map(p => <span><Link to={`/pages/${p.title}`}>{p.title}</Link></span> )}
          </header>
          <p className="App-intro">
            <Route path="/pages/:title" component={withRouter(Page)} />
          </p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
