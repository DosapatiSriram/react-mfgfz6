import React from 'react';

class FormComponent extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    age: 1,
  };
  constructor(props) {
    super(props);
  }

  onSubmit = () => {
    console.log(this.state.age);
    if(typeof this.state.age === number){
        
    }
  };

  componentWillMount

  componentDidMount
  getDerivedStatefromProps(props,state){
     props
     return state

     return null;
  }
  shouldComponentUpdate(nextProps,nextState){
    return false;

  }
  componentDidUpdate(prevProps,prevState){

  }
  componentWillUnmount(){
     
  }
  function onChange(e){
    if (e.target.name === 'firstName') {
      this.setState({ firstName: e.target.value });
    } else if (e.target.name === 'lastName') {
      this.setState({ lastName: e.target.value });
    } else if (e.target.name === 'age') {
      this.setState({ age: e.target.value });
    }
  };

  render() {
    let firstName = '';
    let lastName = '';
    let age = '';
    return (
      <div>
        <input type="text" name="firstName" onChange={this.onChange}></input>
        <br />
        <input type="text" name="lastName" onChange={this.onChange}></input>
        <br />
        <input type="text" name="age" onChange={this.onChange.bind(this)}></input>
        <br />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default FormComponent;
