import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

export default class App extends Component {
  // name = 'Abhishek'
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<News key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route path="/science" element={<News key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports" />} />
          </Routes>
        </Router>
      </div>
    )

  }

}





