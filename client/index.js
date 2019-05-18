import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);


if(!!module.hot&&!!module.hot.accept)
{
  module.hot.accept();
}
