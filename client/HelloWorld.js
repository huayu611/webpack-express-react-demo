import React,{PureComponent} from 'react';

class HelloWorld extends PureComponent{


  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  state={
    text:"Hello World",
  }

  onChange (e){
    this.setState({text: e.target.value});
  }

  componentWillMount()
  {
    console.log("i am componentWillMount in HelloWorld");
  }

  componentDidMount()
  {
    console.log("i am componentDidMount in HelloWorld");
  }

  componentWillReceiveProps()
  {
    console.log("i am componentWillReceiveProps in HelloWorld");
  }

  componentWillUpdate()
  {
    console.log("i am componentWillUpdate in HelloWorld");
  }

  componentDidUpdate()
  {
    console.log("i am componentDidUpdate in HelloWorld");
  }
    render(){
    
      console.log("i am render HelloWorld");
      return <React.Fragment>
      <span>{this.state.text}</span>
      <p/>
      <input type="text" defaultValue={this.state.text}  onChange={this.onChange}></input>
      
      </React.Fragment>
    }
  }
  
  export default HelloWorld;