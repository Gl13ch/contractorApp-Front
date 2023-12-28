

import React from 'react'; 
import axios from 'axios'; 
  
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
            <div key={id}> 
              <div> 
              <br></br>
                <div > 
                    name:{detail.name}
                    <br></br>
                    number:{detail.number} 
                  </div> 
               </div> 
            </div> 
            ) 
        )} 
      </div> 
      ); 
  } 
} 
  
export default App;
