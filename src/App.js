import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import React from 'react';
import data from "./data.json"
import Selected from './selectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allBeast : data ,
      selectedBeast :{},
      showModal: false
    }
  }

  displayModal =(beast)=>{
    this.setState({
      showModal :true,
      selectedBeast :beast
    })
  }

  handleClose = () =>{
    this.setState({
      showModal :false
    })
  }
  render(){
  return (
    <div className="App">
        <Header/>
        <Main allBeast={this.state.allBeast} displayModal={this.displayModal}/>
        <Selected show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast}/>
        <Footer/>
    </div>
  );
}
}

export default App;
