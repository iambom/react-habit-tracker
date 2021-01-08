import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    habits : [
        {id:1, name : "Reading", count : 0},
        {id:2, name : "Running", count : 0},
        {id:3, name : "Coding", count : 0},
    ]
  };
  /*
    PureComponent 정리

    아래 callback 함수들은 App.jsx에서 Habit.jsx 로 전달되는데 
    handleIncrement 등 멤버변수가 전달되기 때문에 App 이라는 class가 만들어진 이후로는 Habit.jsx에 있는 props들은 변하지 않는다.
    
    habit Object 안의 data가 변경되었지 habit object는 그대로 유지하고 있으므로 단순히 PureComponent만 변경해주면 count가 되지 않음.
    따라서 Habits.jsx에서 Habit 컴포넌트에 props를 넘겨줄 때 
    habit={habit}이 아니라 변경되는 props를 직접 전달해야 함
    count={habit.count} 이런식으로 직접 전달하고 Habit.jsx에서  
     const { name, count } = this.props.habit; 이렇게 받지 않고
     const {count} = this.props; 이렇게 따로 받아야 카운트가 된다

     혹은,
     Object 전체를 업데이트 하지 않고 Object 안의 데이터만 업데이트 했기 때문에 카운트가 되지 않아서 Object는 불변으로 두고 데이터가 변경될 때마다 새로운 Object를 만드는 것이 좋다. 
     그래서 callback 함수 안에 Deconstructing Object 사용하여 새로운 Object 복사 생성해서 전달
  */
  
  handleIncrement = habit => {
    
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({ habits });

    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        // Deconstructing Object
        // ... 를 사용하여 새로운 Object를 복사함
        return {...habit, count: habit.count + 1};
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDecrement = habit => {
      const habits = this.state.habits.map(item => {
        if(item.id === habit.id) {
          const count = habit.count - 1;
          return {...habit, count : count < 0 ? 0 : count};
        }
        return item;
      })
      this.setState({ habits });
  };
  handleDelete = habit => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({ habits });
  };
  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({ habits });
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => { 
      if(habit.count != 0){
        return {...habit, count : 0};
      }
      return habit;
    });
    this.setState({ habits });
  }
  render() {
    return (
      <>
        <Navbar 
          totalCount={this.state.habits.filter(item => item.count > 0).length} 
        />
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
          />
      </>
    )
  }
}

export default App;
