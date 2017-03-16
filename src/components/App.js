import React from 'react';
import NavBar from './NavBar'

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        <h3 className='title is-3'>All Articles</h3>
        {this.props.children}
      </div>
    );
  }
});

export default App;
