import React from 'react';

const pages = {
  home: 'home',
  about: 'about',
  projects: 'projects'
}

export default class Nav extends React.Component {
  render(){
    return (
      <div>
        <ul>
          {Object.keys(pages).map((page) => {
            return <li key={page}>{pages[page]}</li>;
          })}
        </ul>
      </div>
    );
  }
}
