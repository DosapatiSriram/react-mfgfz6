import React from 'react';

class ToggleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: props.toggle,
    };
  }

  onButtonClick = () => {
    // let toggle = this.state.toggle;
    // console.log('toggle ', toggle);
    // toggle = !toggle;
    // this.setState({ toggle });
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  };
  render() {
    return (
      <div>
        {this.state.toggle && <p> in Togglecomponent</p>}
        <button onClick={this.onButtonClick}>CheckBox</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   toggle : state.toggle
}

const mapDispatchToProps = () => {
  
}

export default connect(mapStateToProps,mapDispatchToProps)(ToggleComponent);


ReadableStreamDefaultController

 case typeof

   dispatch({ .., type})


const = {
  dispatch

}   

