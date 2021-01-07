import React, { Component } from 'react';

class AddForm extends Component {
    
    /*
        DOM 요소를 직접적으로 사용하지 않아서 Refs 를 사용한다.

        createRef() 함수를 호출하면 Ref 라는 object가 생기고 이것을 원하는 요소에 Ref에 전달해주면 된다
        컴포넌트가 브라우저에 표기가 되면 input이라는 요소가 inputRef와 연결이 된다. 이 요소에 접근해서 해당하는 데이터를 읽을 수가 있다.
    */
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        // submit이 발생하면 refresh 되거나 다른 페이지로 갈 것을 예상하기 때문에 페이지가 re-loading 된다. => prevendDefault();를 사용
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // this.inputRef.current.value = '';  왼쪽 추가 후 초기화 또는
        this.formRef.current.reset(); // formReft를 추가하여 초기화 

    }
    render() {
        return (
           <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
               <input 
                ref={this.inputRef} 
                type="text" 
                className="add-input" 
                placeholder="Enter your habit" 
                />
               <button className="add-button">Add</button>
           </form>
        )
    }
}

export default AddForm;