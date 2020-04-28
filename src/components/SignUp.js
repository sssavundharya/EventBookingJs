import React, { Component } from 'react';
import '../App.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SignUp:[],
      SignUpDetails: { firstName: '', lastName: '',email:'',password:'',dob:'',mobileNo:'',typeOfUser:'' }
    }
  }
  ChangeHandler=(event)=>{
    this.setState({
     SignUpDetails :{
        ...this.state.SignUpDetails,
        [event.target.name]:event.target.value
      }
    })
  }
  submitHandler=(event)=>{
    this.state.SignUp.push(this.state.SignUpDetails);
    let SignUp=[];
    SignUp = JSON.parse(localStorage.getItem("SignUp"));
    if (!SignUp) {
      SignUp = [];
    }
    SignUp.push(this.state.SignUpDetails)
    localStorage.setItem("SignUp", JSON.stringify(SignUp));
   
    this.setState({
      SignUpDetails : {
        firstName: '',
         lastName: '',
         email:'',
         password:'',
         dob:'',
         mobileNo:'',
         typeOfUser:''
      }
    })

  }
  render() {
    return (
          <div className="App signupcard shadow p-3 mb-5 bg-white rounded">
          <div className="card">
             <div className="card-header"><b><i>Sign Up</i></b></div>
             <div className="card-body">
             <div className="row">
                  <div className="col-sm-4 col-md-4 col-xl-4">
                      <label>First Name</label>
                  </div>
                  <div className="col-sm-8 col-md-8 col-xl-8 ">
                      <input className="input-group input-group-lg inputbox" name="firstName"
                      type="text"placeholder="first name" 
                      value={this.state.SignUpDetails.firstName}onChange={this.ChangeHandler.bind(this)}
                      />
                  </div>
               </div>
               <br></br>
               <div className="row">
                  <div className="col-sm-4 col-md-4 col-xl-4">
                      <label>Last Name</label>
                  </div>
                  <div className="col-sm-8 col-md-8 col-xl-8 ">
                      <input className="input-group input-group-lg inputbox" name="lastName"
                      type="text"placeholder="last name" 
                      value={this.state.SignUpDetails.lastName}onChange={this.ChangeHandler.bind(this)}
                      />
                  </div>
               </div>
               <br></br>
               <div className="row">
                  <div className="col-sm-4 col-md-4 col-xl-4">
                      <label>Email</label>
                  </div>
                  <div className="col-sm-8 col-md-8 col-xl-8 ">
                      <input className="input-group input-group-lg inputbox" name="email"
                       type="email"placeholder="Enter email" 
                       value={this.state.SignUpDetails.email}onChange={this.ChangeHandler.bind(this)}
                       />
                  </div>
               </div>
               <br></br>
               <div className="row">
                  <div className="col-sm-4 col-md-4 col-xl-4">
                      <label>password</label>
                  </div>
                  <div className="col-sm-8 col-md-8 col-xl-8">
                      <input className="input-group input-group-lg inputbox"name="password"
                       type="password"placeholder="Enter password" 
                       value={this.state.SignUpDetails.password}onChange={this.ChangeHandler.bind(this)}
                       />
                  </div>
               </div>
               <br></br>
               <div className="row">
                  <div className="col-sm-4 col-md-4 col-xl-4">
                      <label>D.O.B</label>
                  </div>
                  <div className="col-sm-8 col-md-8 col-xl-8 ">
                      <input className="input-group input-group-lg inputbox" name="dob"
                      type="date"placeholder="Enter dob" 
                      value={this.state.SignUpDetails.dob}onChange={this.ChangeHandler.bind(this)}
                      />
                  </div>
               </div>
               <br></br>
               <div className="row">
                  <div className="col-sm-4 col-md-4 col-xl-4">
                      <label>Mobile No</label>
                  </div>
                  <div className="col-sm-8 col-md-8 col-xl-8 ">
                      <input className="input-group input-group-lg inputbox"name="mobileNo" 
                      type="number"placeholder="Enter mobile no" 
                      value={this.state.SignUpDetails.mobileNo}onChange={this.ChangeHandler.bind(this)}
                      />
                  </div>
               </div>
               <br></br>
               <div className="row">
                  <div className="col-sm-4 col-md-4 col-xl-4">
                      <label>Type of user</label>
                  </div>
                  <div className="col-sm-8 col-md-8 col-xl-8 ">
                  <select className="input-group input-group-lg inputbox" name="typeOfUser" 
                   value={this.state.SignUpDetails.typeOfUser}onChange={this.ChangeHandler.bind(this)} >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>   
                    </select>
                  </div>
               </div>
               <br></br>
               <div className="row">
                 <div className="col text-center">
                   <button type="submit" class="btn btn-outline-success"onClick={this.submitHandler}>Submit</button>
                </div>
               </div>
             </div>
          </div>
          
        </div>
    )
  }
}
export default SignUp

