import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default class Statee extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:"khanh",
      style:{
        width:"50px",
        height:"50px",
        backgroundColor: "red"
      }
    }
   
  }
  render() {
    let changeColor=() => {
      this.setState({style:{
        width:"50px",
        height:"50px",
        backgroundColor: "blue"
      }
      });
    }
    return (
      <div>
            <div>{this.state.name}
                <div style={this.state.style}>khanh</div>
                <button type='button' onClick={changeColor}>change color</button>
            </div>
      </div>
    )
  }
}

export {App,Statee};
