import React, { memo } from 'react';

/*
    Memo는 함수형 컴포넌트의 PureComponent
    memo 함수 안에 function component를 전달해준다
    props가 변경 되지 않으면 함수가 호출되지 않는다 

*/

const AddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        // submit이 발생하면 refresh 되거나 다른 페이지로 갈 것을 예상하기 때문에 페이지가 re-loading 된다. => prevendDefault();를 사용
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        // inputRef.current.value = '';  왼쪽 추가 후 초기화 또는
        formRef.current.reset(); // formReft를 추가하여 초기화 

    }
    return (

        // 함수 안에서는 this가 아닌 변수로 접근
       <form ref={formRef} className="add-form" onSubmit={onSubmit}>
           <input 
            ref={inputRef} 
            type="text" 
            className="add-input" 
            placeholder="Enter your habit" 
            />
           <button className="add-button">Add</button>
       </form>
    )
});

export default AddForm;