import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends Component {
  state = { progress: 0 }
  my_api_key = '094a77e266ba4a2d81708f2263d3185d'
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color='red' progress={this.state.progress} />
          <Routes >
            < Route exact path="/" element={< News apiKey={this.my_api_key} setProgress={this.setProgress} key="general" pageSize={9} category="general" country="in" />}></ Route>
            < Route exact path="/business" element={<  News apiKey={this.my_api_key} setProgress={this.setProgress} key="business" pageSize={9} category="business" country="in" />}></ Route >
            < Route exact path="/technology" element={<  News apiKey={this.my_api_key} setProgress={this.setProgress} key="technology" pageSize={9} category="technology" country="in" />}></ Route >
            < Route exact path="/entertainment" element={<  News apiKey={this.my_api_key} setProgress={this.setProgress} key="entertainment" pageSize={9} category="entertainment" country="in" />}></ Route >
            < Route exact path="/science" element={<  News apiKey={this.my_api_key} setProgress={this.setProgress} key="science" pageSize={9} category="science" country="in" />}></ Route>
            < Route exact path="/sports" element={<  News apiKey={this.my_api_key} setProgress={this.setProgress} key="sports" pageSize={9} category="sports" country="in" />}></ Route>
            < Route exact path="/health" element={<  News apiKey={this.my_api_key} setProgress={this.setProgress} key="health" pageSize={9} category="health" country="in" />}></ Route >
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
