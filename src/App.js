
import React, { useState } from 'react'; 
import axios from 'axios'; 
import './App.css';

  
class App extends React.Component { 

    state = { 
        details : [], 
        name: "",
        number: ""
    } 
    
    componentDidMount() { 
  
        let data ; 
  
        axios.get('http://localhost:8000/testing/') 
        .then(res => { 
            data = res.data; 
            this.setState({ 
                details : data     
            }); 
        }) 
        .catch(err => {}) 
    } 

    handleInput = (e) => { 
      this.setState({ 
          [e.target.name]: e.target.value, 
      }); 
  }

    handleSubmit = (e) => {
      e.preventDefault();
      let data ; 

      axios
        .post("http://localhost:8000/testing/", { 
          name: this.state.name, 
          number: this.state.number, 
        })
        .then((res) => { 
          this.setState({ 
            name: "", 
            number: "", 
          }); 
        }) 
        .catch((err) => {})

        //get data to reflect updated database
        axios.get('http://localhost:8000/testing/') 
        .then(res => { 
            data = res.data; 
            this.setState({ 
                details : data     
            }); 
        }) 
        .catch(err => {}) 
    }
  
  render() { 
    return( 
      <div> 
        <div>
          <form onSubmit={this.handleSubmit}>
            <label for="name"><input type="text" placeholder="Name" id="name" value={this.state.name} name="name" onChange={this.handleInput} required/></label>
            <br></br>
            <label for="number"><input type="text" placeholder="Number" id="number" value={this.state.number} name="number" onChange={this.handleInput} required/></label>
            <br></br>
            <input type="submit"/>
          </form>
        </div>

        <div>
          {this.state.details.map((detail, id) =>  ( 
          <div key={id} class="test">
            name:{detail.name}
            <br/>
            number:{detail.number}
          </div>
          )
          )} 
        </div>
      </div> 
      ); 
  } 
} 
  
export default App;
