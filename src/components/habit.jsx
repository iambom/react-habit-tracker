import React, { Component } from 'react';

class Habit extends Component {
    // state = {
    //     count: 0,
    // }

    // handleIncrement = () => {
    //     // state object 안에 있는  count를 증가 시킨 뒤 state를 업데이트 해야 함.
    //     this.setState({count: this.state.count + 1});
    // }
    // handleDecrement = () => {
    //     const count = this.state.count - 1;
    //     this.setState({count: count < 0 ? 0 : count});
    // }
    // handleDelete = () => {
    //     const count = this.state.count - 1;
    //     this.setState({count: count < 0 ? 0 : count});
    // }

    // Habits component 에서 콜백함수 관리

    /*
        props 으로 전달된 콜백함수를 호출하고 전달받은 각각의 데이터를 다시 인자로 전달해준다. 
    */

   handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }
    render(){
        console.log(this.props.habit)
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default Habit;