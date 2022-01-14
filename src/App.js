import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/math-magicians/" element={<Home />} />
          <Route path="/math-magicians/calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
