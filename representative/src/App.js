import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import {  Route , Link, Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      senateData: '',
      houseData: '',
    };
  };

  axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', { headers: { 'X-API-Key': 'Kj3LA8ihrq1u54ZYNFmQ2eqG0Qa1a85K9y1xFIXl'}});
  
  componentDidMount() {
    console.log("Play: Component is mounting");
    axios.get('https://api.propublica.org/congress/v1/115/senate/members.json{ header: { "X-API-Key: Kj3LA8ihrq1u54ZYNFmQ2eqG0Qa1a85K9y1xFIXl"}')
    .then(json => {
        this.setState({ senateData: json.data });
    });
}
  render() {
    return (
      <div className="App">
             <nav >
               
                <h1 className= "header">Get To Know Who Represents You</h1>
                <h2>Virginia Representatives</h2>
             </nav>
           <main> </main>

             <footer className="footer"> 
                <li>Source: </li>
                <li>Created By: </li>
             </footer>
      </div>
    );
  }
}

export default App;
