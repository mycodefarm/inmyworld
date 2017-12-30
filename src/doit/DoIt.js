import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './Doit.css';

class TimeRecord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            elapsed: 0,
            start: 0,
        }
        this.tick = this.tick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBegin = this.onBegin.bind(this);
        this.onStop = this.onStop.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            elapsed: new Date() - this.state.start
        });
    }

    onChange(event) {
        this.setState({
            searchText: event.target.value
        });
        this.props.onTextChange(event.target.value);
    }

    //开启计时
    onBegin() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
        this.setState({
            start: new Date()
        });
    }

    onStop() {
        clearInterval(this.timerID);
    }

    render() {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);

        return (
            <div>
                <Input size="large" placeholder="说一些你想说的话,做一些你想做的事"
                    style={{ width: 600 }} onChange={this.onChange} onPressEnter={this.onBegin} />
                <br />
                <a href="#"><p className="showTime" onClick={this.onStop}>时间已过{seconds}秒</p></a>
            </div>
        );
    }
}

class Doit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.largerFont = this.largerFont.bind(this);
        this.smallerFont = this.smallerFont.bind(this);
        this.changeFont = this.changeFont.bind(this);
    }

    componentDidMount() {
        var d = document.getElementById("showText");
        d.style.fontSize = '80px';
        d.style.color = 'orange';
    }

    onTextChange(v) {
        this.setState({
            searchText: v
        });
    }

    largerFont() {
        this.changeFont(5);
    }

    smallerFont() {
        this.changeFont(-5);
    }

    changeFont(step) {
        var s = document.getElementById("showText");
        var fontString = window.getComputedStyle(s).fontSize;
        var fontSize = parseFloat(fontString.substr(0, fontString.length - 2));
        s.style.fontSize = (fontSize + step) + 'px';
    }

    render() {
        return (
            <div className="main">
                <TimeRecord onTextChange={this.onTextChange} />
                <Button ghost onClick={this.largerFont}>+++++</Button>
                <Button ghost onClick={this.smallerFont}>---------</Button>
                <p id="showText">{this.state.searchText}</p>
            </div>
        )
    }
}

export default Doit;