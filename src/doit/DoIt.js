import React, { Component } from 'react';
import { Input } from 'antd';
import './Doit.css';

class TimeRecord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            elapsed: 0
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            elapsed: new Date() - this.props.start
        });
    }

    render() {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);

        return (
            <div>
                <p>时间已过{seconds}秒</p>
            </div>
        );
    }
}

class Doit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            start: new Date()
        }
        this.onChange = this.onChange.bind(this);
        this.onBegin = this.onBegin.bind(this);
    }

    onChange(event) {
        this.setState({
            searchText: event.target.value,
            start: new Date()
        });
    }

    //开启计时
    onBegin() {
        console.log(this.state.searchText)
    }

    render() {
        return (
            <div className="main">
                <Input size="large" placeholder="说一些你想说的话,做一些你想做的事"
                    style={{ width: 600 }} onChange={this.onChange} onPressEnter={this.onBegin} />
                <TimeRecord start={this.state.start} />
                <p>{this.state.searchText}</p>
            </div>
        )
    }
}

export default Doit;