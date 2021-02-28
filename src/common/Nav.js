import React from 'react';
import ReactDOM from 'react-dom';

const pages = {
  home: 'home',
  about: 'about',
  projects: 'projects'
}

export default class Nav extends React.Component {
  render(){
    return (
      <ul>
        {Object.keys(pages).map((page) => {
          return <li key={page}>{pages[page]}</li>;
        })}
      </ul>
    );
  }
}
