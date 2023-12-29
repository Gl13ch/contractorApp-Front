

import React from 'react'; 
import axios from 'axios'; 
import './App.css';
  
class App extends React.Component { 
  
    state = { 
        details : [], 
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
  
  render() { 
    return( 
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
      ); 
  } 
} 
  
export default App;
