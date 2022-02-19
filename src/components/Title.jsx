import React, { Component } from 'react';

class Title extends Component {
  render() {
    console.log(this.props);

    return (
      <h2>{this.props.headline}</h2>
    );
  }
}

export default Title;
