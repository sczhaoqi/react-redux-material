import React, { Component } from 'react';
import logo from './logo.svg';
import NavCom from './layouts/NavCom'
import MainCom from './layouts/MainCom'
import LeftCom from './layouts/LeftCom'
import Child4Com from './layouts/Child4Com'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
    isMain: true,
    childBg:'pink',
    navCom: <NavCom />,
    leftCom:<LeftCom />,
    mainCom: <MainCom/>
    }
    this.changeCom= this.changeCom.bind(this)
    }
   render(){
   // 父组件通过state
    return(
    <div>
    <div className="nav">
    {this.state.navCom}
    </div>
    <div className="left">
    {this.state.leftCom}
    </div>
    <div className="main">
    {this.state.mainCom}
    </div>
    <button onClick={this.changeCom}>更改组件</button>
    </div>
    )
   }
 
   changeCom(){
    if(this.state.isMain){
      this.setState({
        mainCom:<Child4Com/>,
        isMain: false
        })
    }else{
      this.setState({
        mainCom:<MainCom/>,
        isMain: true
        })
    }
   }  
}

export default App;
