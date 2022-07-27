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
      showModal: false ,
      hornesNum: ''
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


  handleSelect = (e) => {

    this.setState({
        hornesNum: e.target.value
    })

    console.log(this.state.hornesNum);
}


  render(){
  return (
    <div className="App">
        <Header/>
        <Main allBeast={this.state.allBeast} displayModal={this.displayModal} hornesNum={this.state.hornesNum} handleSelect={this.handleSelect}/>
        <Selected show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast}/>
        <Footer/>
    </div>
  );
}
}

export default App;
