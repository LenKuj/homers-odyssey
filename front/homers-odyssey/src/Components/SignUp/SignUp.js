import React, {Component} from 'react';

class SignUp extends Component {



  state = {

    email: "Test"

  }

  updateEmailField = (event) => {

    let change = event.target.value;

     this.setState({

        email: change
     })
  }


  render() {
    return(
    
    <div>
    
    <h1>{this.state.email}</h1>
    <input onChange={this.updateEmailField} type="email" name="email"/>
        
    </div>
    );
  }
};


export default SignUp;