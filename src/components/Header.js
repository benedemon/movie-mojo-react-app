import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default Header;
