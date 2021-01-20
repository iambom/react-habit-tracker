import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() {
        // component 가 UI에 등록이 되었을 때 사용자에게 보여질 때 호출
        // e.g) component 가 보여지기 전 loading spinner를 보여야 할 때나 타이머 시작, 실시간 채팅에서 소켓 등 초기화 할 때 
        console.log(`habit: ${this.props.habit.name} mounted`);
    }

    componentWillUnmount() {
        // 지우기 전에 호출 (UI 상에서 없어질 때)
        // e.g) 타이머 중지, 실시간 채팅에서 정리, 리소스 지우기 등 
        console.log(`habit: ${this.props.habit.name} will unmount`);

    }
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