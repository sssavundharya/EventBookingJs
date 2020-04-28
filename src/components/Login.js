import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Redirect ,Route } from 'react-router-dom'
import Home from '../components/Home';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {},
      isLogged: false,
      userType:'',
      loginDetails: { email: '', password: '' }
    }
    // console.log(props.signUpData.email)

  }
  ChangeHandler = (event) => {
    this.setState({
      loginDetails: {
        ...this.state.loginDetails,
        [event.target.name]: event.target.value
      }
    })
  }
  submitHandler = (event) => {
    // this.state.login.push(this.state.loginDetails);
    let getData = [];
    getData = JSON.parse(localStorage.getItem("SignUp"));
    console.log(getData);
    getData.map((user) => {
      console.log(user.typeOfUser)
      let { email, password } = this.state.loginDetails
      if (user.email === email && user.password === password) {
        // console.log("login successfully")
        this.setState({
          ...this.state,
          login : user,
          isLogged: true,
          userType:user.typeOfUser

        })
      }

    })
    this.setState({
      loginDetails: {
        email: '',
        password: ''
      }
    })

  }

  render() {
    return (
      <div>
        {
          this.state.isLogged
            ?
            <Router>
              <Route path="/home" exact><Home user={this.state.login} /></Route>
              <Redirect to={{pathname:"/home",state:this.state.login}} />
            </Router>
            :
            <div className="App logincard shadow p-3 mb-5 bg-white rounded">
              <div className="card">
                <div className="card-header"><b><i>Login</i></b></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 col-md-4 col-xl-4">
                      <label>Email</label>
                    </div>
                    <div className="col-sm-8 col-md-8 col-xl-8 ">
                      <input className="input-group input-group-lg inputbox" name="email"
                        type="email" placeholder="Enter email"
                        value={this.state.loginDetails.email} onChange={this.ChangeHandler.bind(this)}
                      />
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-sm-4 col-md-4 col-xl-4">
                      <label>password</label>
                    </div>
                    <div className="col-sm-8 col-md-8 col-xl-8">
                      <input className="input-group input-group-lg inputbox" name="password"
                        type="password" placeholder="Enter password"
                        value={this.state.loginDetails.password} onChange={this.ChangeHandler.bind(this)}
                      />
                    </div>
                  </div>
                  <br>
                  </br>
                  <div className="row">
                    <div className="col text-center">
                      <button type="submit" class="btn btn-outline-success" onClick={this.submitHandler}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>

    )
  }
}
export default Login

