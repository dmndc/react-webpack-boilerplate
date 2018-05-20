import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My React & Webpack boilerplate';

ReactDOM.render(
  <div>
    <h1>{title}</h1>
  </div>,
  document.getElementById('app')
);

module.hot.accept();
