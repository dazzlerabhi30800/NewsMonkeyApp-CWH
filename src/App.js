import './App.css';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar';
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
  apiKey = process.env.REACT_APP_NEWS_KEY
  state = {
    progress: 100
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    console.log(this.apiKey);
    return (
      <div className="App">
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={6} country="in" category="sports" />} />
          </Routes>
        </Router>
      </div>
    )

  }

}





