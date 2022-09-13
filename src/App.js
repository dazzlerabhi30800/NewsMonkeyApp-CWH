import './App.css';
import React, { useState } from 'react'
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

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_KEY
  const [progress, setProgress] = useState(0);
  const handleProgress = (progress) => {
    setProgress(progress)
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News apiKey={apiKey} setProgress={handleProgress} key="general" pageSize={6} country="in" category="general" />} />
          <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={handleProgress} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route path="/science" element={<News apiKey={apiKey} setProgress={handleProgress} key="science" pageSize={6} country="in" category="science" />} />
          <Route path="/sports" element={<News apiKey={apiKey} setProgress={handleProgress} key="sports" pageSize={6} country="in" category="sports" />} />
        </Routes>
      </Router>
    </div>
  )


}

export default App





