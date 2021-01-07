import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits : [
            {id:1, name : "Reading", count : 0},
            {id:2, name : "Running", count : 0},
            {id:3, name : "Coding", count : 0},
        ]
    }

    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        // this.setState(this.state);
        // 새로운 state 배열 object를 만들어서 this.state를 쓰면 안 됨. 그래서 아래처럼 해주어야 함 key와 value가 동일하면 하나로 생략 가능
        // this.setState({ habits : habits });
        this.setState({ habits });
    };
    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count-1;
        habits[index].count = count < 0 ? 0  : count;
        this.setState({ habits });
    };
    handleDelete = (habit) => {
        // 전달 받은 habit 이라는 배열에서 지울 것을 제외하고 배열에 넣어줌
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits });
    };

    // 콜백함수로 전달한다. 변수는 함수를 가리키고 있어서 함수의 이름을 인자로 전달해주면 함수를 가리키고 있는 참조값을 전달하기 때문에 
    // onIncrement라는 props으로 참조값만 전달해주는 것이다.

    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            onIncrement={this.handleIncrement} 
                            onDecrement={this.handleDecrement} 
                            onDelete={this.handleDelete}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default Habits;