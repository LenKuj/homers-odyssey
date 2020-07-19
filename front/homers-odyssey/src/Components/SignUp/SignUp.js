import React, {Component} from 'react';
import './SignUp.css'

class SignUp extends Component {



  state = {

    email: "Test",
    password: "myPassw0rd",
    name: "James",
    lastname: "Bond"

  }

  updateEmailField = (event) => {

    this.setState({

        email: event.target.value,

     })
  }

  updatePassField = (event) => {

    this.setState({

        password: event.target.value,

     })
  }

  updateNameField = (event) => {

    this.setState({

        name: event.target.value,

     })
  }

  updateLastnameField = (event) => {

    this.setState({

        lastname: event.target.value,

     })
  }



  handleSubmit = (e) => {

    e.preventDefault();

    console.log(this.state)
  }


  render() {
    return(
    
    <div>
      <h1>{JSON.stringify(this.state)}</h1>

      <form onSubmit={this.handleSubmit}>
        <input onChange={this.updateEmailField} type="text" name="text"/>
        <br></br>
        <input onChange={this.updatePassField} type="password" name="password"/>
        <br></br>
        <input  onChange={this.updateNameField} type="text" name="name"/>
        <br></br>
        <input onChange={this.updateLastnameField}  type="text" name="lastname"/>
        <br></br> 
        <input  type="submit" value="Submit" name=""/>
        <br></br>
        
      </form>
    </div>
    );
  }
};


export default SignUp;