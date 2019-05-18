import React, { PureComponent } from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from './Header';

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    text: "Hello World",
  }
  componentWillMount() {
    console.log("i am componentWillMount in Index");
  }

  componentDidMount() {
    console.log("i am componentDidMount in Index");
  }

  componentWillReceiveProps() {
    console.log("i am componentWillReceiveProps in Index");
  }

  componentWillUpdate() {
    console.log("i am componentWillUpdate in Index");
  }

  componentDidUpdate() {
    console.log("i am componentDidUpdate in Index");
  }
  render() {
    let name = this.props.name;
    let headerRender = ReactDOMServer.renderToString(<Header title={name}/>);
    return (<html lang="en">
      <head  dangerouslySetInnerHTML={{ __html: headerRender }} />
      <body >
      <p style={{color:"red"}}>If you input paramter in url , it will set the value to header-> title</p>
      <a href="/TestTitle">Click it and check the title of header in HTML</a>
        <div id="app" />
        
        <script src="./js/bundle.js"/>
      </body>
    </html>)
  }

}