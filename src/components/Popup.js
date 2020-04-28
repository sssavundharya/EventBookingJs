import React, { Component } from 'react';
import '../App.css';
import Displaycard from '../components/Displaycard';
class 
Popup extends Component {
  constructor(props){
    super(props)
    // console.log(props.user)
    this.state={
      events:[],
      details:{eventName:'',date:'',place:'',totalSeats:0,price:0,discount:0}
    }
  }

  componentWillMount(){
    // this.setState({
    //   ...this.state,
    //   events : JSON.parse(localStorage.getItem("events"))
    // })
    let fetchedEvents = JSON.parse(localStorage.getItem("events")); //null
    console.log(fetchedEvents)
    if(!fetchedEvents){
      this.setState({
        ...this.state,
        events :  [] 
      })
      localStorage.setItem("events", JSON.stringify(this.state.events))
    }else{
      this.setState({
        ...this.state,
        events : fetchedEvents
      })
    }

  }


  ChangeHandler = (event) => {
    // console.log(event.target.name,event.target.value)
    this.setState({
      details : {
        ...this.state.details,
        [event.target.name]:event.target.value
      }
    })
   // console.log(this.state);
    
  }

  submitHandler = () => {
      this.state.events.push(this.state.details);
    //console.log(this.state)
    // int random = ;
    let events = [];
    // this.setState({
    //   ...this.state,details,
    //   id random
    // })
    events = JSON.parse(localStorage.getItem("events"));
    if (!events) {
      events = [];
    }
    events.push(this.state.details)
   // console.log(this.state.details)
    localStorage.setItem("events", JSON.stringify(events));
    this.setState({
      details : {
        eventName : '',
        date : '',
        place:'',
        totalSeats:0,
        price:0,  
        discount:0
      }
    })
  }
  render() {
    return (
      <div className="text-right">
        {/* {this.props.user.typeOfUser === 'admin' && this.props.user.typeOfUser !== undefined &&
          <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#myModal">
            Add Event
          </button> //true */}
        
        }
        
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Enter the details</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body text-left">
                <div className="form-group">
                  <label>Event Name </label>
                  <input type="text" name="eventName" value={this.state.details.eventName} onChange={this.ChangeHandler.bind(this)} className="form-control" placeholder="Event Name" />
                </div>
                <div className="form-group">
                  <label>Event Date </label>
                  <input type="date" name="date" value={this.state.details.date} onChange={this.ChangeHandler.bind(this)} className="form-control" placeholder="(DD//MM/YY)" /> 
                </div>
                <div className="form-group">
                  <label>Place</label>
                  <input type="text" className="form-control" name="place" value={this.state.details.place} onChange={this.ChangeHandler.bind(this)}  placeholder="Event Location" />
                </div>
                <div className="form-group">
                  <label>Total no.of seats</label>
                  <input type="number" className="form-control" name="totalSeats"value={this.state.details.totalSeats} onChange={this.ChangeHandler.bind(this)} placeholder="no of seats" />
                </div>
                <div className="form-group">
                  <label>Ticket Price</label>
                  <input type="number" className="form-control" name="price"value={this.state.details.price} onChange={this.ChangeHandler.bind(this)}  placeholder="Ticket price" />
                </div>
                <div className="form-group">
                  <label>Discount</label>
                  <input type="number" classNam
                  e="form-control" name="discount"value={this.state.details.discount} onChange={this.ChangeHandler.bind(this)}  placeholder="Discount" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.submitHandler}>Register</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
          {
            this.state.events.map((element,index)=>{
              return(
                <div className="col-sm-3 col-md-3 col-xl-3" key={index}>
                  <Displaycard eventitems={element}/>
                </div>
              )

            })
          }
          </div>
        </div>
      </div>
    )
  }
}
export default Popup

