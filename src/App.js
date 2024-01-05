import React from 'react'; 
import axios from 'axios'; 
import './App.css';

class App extends React.Component { 
  // Eventually some of the components on this page are going to move. We probably ultimately just want routes in the return.

    // "state" should probably be called what it is so testData or blankTest. Ultimately it will probably be called blankJob.
    state = { 
      details : [], 
      name: "",
      number: "",
    }

    //I know I did this part, but I would redo it like:
    // getTests() {
    //   let data ;
    //   axios.get('http://localhost:8000/testing/') 
    //   .then(res => { 
    //     data = res.data; 
    //     this.setState({ 
    //         details : data     
    //     });
    //   }) 
    //   .catch(err => {})
    // }

    // componentDidMount() {
    //    this.getTests()
    // }

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

    // as a best practice I would probably put axios.post in its own function then just call it in the handle submit

    // EXAMPLE:
    // handleCreateTest = (newTest) => {
    //   axios.post("http://localhost:8000/testing/", newTest)
    //   .then((res) => { 
    //     this.componentDidMount();
    //     OR IF EARLIER CODE CHANGED: this.getTests();
    //   })
    //   .catch((err) => {})
    // }

  handleSubmit = (e) => {
    e.preventDefault();
    // Then call here:
    // this.handleCreateTest(this.state)
    // this.setState({ 
    //         name: "", 
    //         number: "", 
    //       });
    //If you uncomment above, then comment out below
    let data ; 

    axios.post("http://localhost:8000/testing/", { 
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

    // get data to reflect updated database
    axios.get('http://localhost:8000/testing/') 
    .then(res => { 
      data = res.data; 
      this.setState({ 
            details : data     
      }); 
    }) 
    .catch(err => {}) 
    //TO HERE
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
// Looks good, just make sure your spacing is correct. I fixed a good amount of it.
export default App;
