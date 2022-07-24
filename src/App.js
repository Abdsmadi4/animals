import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
