import React from 'react';
import NavBar from './NavBar';
import '../css/bulma.css';


const App = React.createClass({
  render: function () {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Northcoders
              </h1>
              <h2 className="subtitle">
                News
              </h2>
            </div>
          </div>
        </section>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

export default App;
