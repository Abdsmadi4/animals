import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import React from 'react';
import data from "./data.json"
import Selected from './selectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeast: data,
      selectedBeast: {},
      showModal: false,
    }
  }

  displayModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  filterHornes = (e) => {
    const hornesNumber = parseInt(e.target.value);
    let filteredData = data;
    if (hornesNumber) {
      filteredData = data.filter(val => val.horns === hornesNumber)
    }

    this.setState({allBeast : filteredData });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main allBeast={this.state.allBeast} displayModal={this.displayModal}  filterHornes={this.filterHornes} />
        <Selected show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </div>
    );
  }
}

export default App;
