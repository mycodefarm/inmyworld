import React, { Component } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';
import qs from 'qs'; //对参数转化
import logo from './logo.svg';
import './App.css';

// var qs = require('qs');
axios.defaults.baseURL = 'http://localhost:8081';

class App extends Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
    this.showMessage = this.showMessage.bind(this);
  }

  showMessage() {
    //axios默认发送数据时，数据格式是Request Payload，而并非我们常用的Form Data格式
    axios.post('/test',
      qs.stringify({ data: 'jimo' })
    ).then(function (response) {
      console.log(response);
      message.info(response.data.data);
    }).catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary" onClick={this.showMessage}>Button</Button>
      </div>
    );
  }
}

export default App;
