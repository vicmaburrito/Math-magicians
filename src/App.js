import React from 'react';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="App">
          <Calculator />
        </div>
      </>
    );
  }
}

export default App;
