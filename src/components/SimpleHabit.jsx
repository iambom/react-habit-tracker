import React, {useEffect, useRef, useState} from 'react';

/*
    React Hook

    state와 lifecycle 등 기존 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해준다. 


    const [변수, 업데이트함수] = useState(초기값)
    useState는 React Hook 에서 제공하는 api 중 하나로 실제의 state 값과 업데이트 함수 두 가지를 리턴한다.

    클래스는 만들어질 때 한 번만 만들어지고 state 업데이트 되면 render 함수만 계속 반복해서 호출이 된다. 
    함수 컴포넌트는  props나 state가 변경이 되면 함수 안의 내용이 전부 계속 반복된다. 
    e.g) const SimpleHabit = (props)=> {
        여기의 내용이 전부 반복 호출!!
    }
    예를 들어 <button>의 onClick에 전달한 콜백함수가 처음 호출 될 때 새로운 함수가 만들어져서 전달이 되고 button을 또 클릭해서 다시 호출 되면 다시 새 함수 오브젝트가 만들어져서 전달된다. 계속 새로운 것을 만들고 새 값을 전달한다. 

    useEffect()
    component가 처음 mount 되었을 때와 업데이트가 될 때마다 호출된다.

 */

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log(`mounted & updated : ${count}`)
    });
    return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    )
}


// class SimpleHabit extends Component {
//     state = {
//         count : 0,
//     }

//     handleIncrement = () => {
//         this.setState({count: this.state.count + 1});
//     }
//     render(){
//         return (
//             <li className="habit">
//                 <span className="habit-name">Reading</span>
//                 <span className="habit-count">{this.state.count}</span>
//                 <button className="habit-button habit-increase" onClick={this.handleIncrement}>
//                     <i className="fas fa-plus-square"></i>
//                 </button>
//             </li>
//         )
//     }
// }
export default SimpleHabit