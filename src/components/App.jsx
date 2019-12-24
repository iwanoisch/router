import React, { Component } from 'react';

import Header from '../shared/component/Layout/Header';
import Footer from '../shared/component/Layout/Footer';
import Content from "../shared/component/Layout/Content";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title='Welcome to CodeJobs' />
        <Content>
            {this.props.children}
        </Content>
        <Footer />
      </div>
    );
  }
}


export default App;
