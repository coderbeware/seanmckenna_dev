import React from 'react';
import Nav from '../common/Nav.js';

const homeText = "Hi I'm Sean! I like to write code. If you are looking for someone to write code for you... You found me!";

export default class Home extends React.Component {

  render(){
    return (
      <div id='home' >
        <Nav />
        <Content />
      </div>
    );
  }
}

class Content extends React.Component {

  render(){
    return (
      <div>
        <span>{homeText}</span>
      </div>
    );
  }

}


