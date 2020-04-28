import React, { Component } from 'react';
import '../App.css';
import Popup from '../components/Popup';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props.user) 
  }

  render() {
    return (
        <div className="App">
          <Popup user={this.props.user} />
        </div>
    )
  }
}
export default Home

