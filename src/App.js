import {useState, useEffect} from 'react'; 
import axios from 'axios';
import './App.css';

const App = () => {
  let [jobs, setJobs] = useState([]);
  
  const blankJob = {
    name: "",
    number: "",
  }

  const [jobDetails, setJobDetails] = useState(blankJob);

  const getJobs = () => {
    axios.get('http://localhost:8000/testing/')
    .then((res) => {
      setJobs(res.data);
    });
  };

  const handleInput = (e) => {
    setJobDetails({...jobDetails, [e.target.name]:e.target.value})
  }

  const handleCreateJob = (newJob) => {
    axios.post("http://localhost:8000/testing/", newJob)
    .then((res) => { 
      getJobs();
    })
    .catch((err) => {})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateJob(jobDetails);
    setJobs(blankJob);
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label for="name"><input type="text" placeholder="Name" id="name" value={jobDetails.name} name="name" onChange={handleInput} required/></label>
          <br></br>
          <label for="number"><input type="text" placeholder="Number" id="number" value={jobDetails.number} name="number" onChange={handleInput} required/></label>
          <br></br>
          <input type="submit"/>
        </form>
      </div>

      <div>
        {jobs.map((jobDetails, id) =>  ( 
          <div key={id} class="test">
            name:{jobDetails.name}
            <br/>
            number:{jobDetails.number}
          </div>
          )
        )} 
      </div>
    </div>
  );
};
export default App;

// class App extends React.Component {
//     state = { 
//       details : [], 
//       name: "",
//       number: "",
//     }

//     //I know I did this part, but I would redo it like:
//     getTests() {
//       let data ;
//       axios.get('http://localhost:8000/testing/') 
//       .then(res => { 
//         data = res.data; 
//         this.setState({ 
//             details : data     
//         });
//       }) 
//       .catch(err => {})
//     }

//     componentDidMount() {
//        this.getTests()
//     }

//     // componentDidMount() {
//     //   let data ; 
//     //   axios.get('http://localhost:8000/testing/') 
//     //   .then(res => { 
//     //     data = res.data; 
//     //     this.setState({ 
//     //         details : data     
//     //     });
//     //   }) 
//     //   .catch(err => {}) 
//     // } 

//     handleInput = (e) => { 
//       this.setState({ 
//         [e.target.name]: e.target.value, 
//       }); 
//     }

//     // as a best practice I would probably put axios.post in its own function then just call it in the handle submit

//     // EXAMPLE:
    // handleCreateTest = (newTest) => {
    //   axios.post("http://localhost:8000/testing/", {
    //     name:newTest.name,
    //     number:newTest.number,
    //   })
    //   .then((res) => { 
    //     this.getTests();
    //   })
    //   .catch((err) => {})
    // }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // Then call here:
//     this.handleCreateTest(this.state)
//     this.setState({ 
//             name: "", 
//             number: "", 
//           });
//     //If you uncomment above, then comment out below
//     // let data ; 

//     // axios.post("http://localhost:8000/testing/", { 
//     //   name: this.state.name, 
//     //   number: this.state.number, 
//     // })
//     // .then((res) => { 
//     //   this.setState({ 
//     //     name: "", 
//     //     number: "", 
//     //   }); 
//     // }) 
//     // .catch((err) => {})

//     // // get data to reflect updated database
//     // axios.get('http://localhost:8000/testing/') 
//     // .then(res => { 
//     //   data = res.data; 
//     //   this.setState({ 
//     //         details : data     
//     //   }); 
//     // }) 
//     // .catch(err => {}) 
//     // //TO HERE
//   }
  
//   render() { 
//     return( 
      // <div> 
      //   <div></div>
      //   <div>
      //     <form onSubmit={this.handleSubmit}>
      //       <label for="name"><input type="text" placeholder="Name" id="name" value={this.state.name} name="name" onChange={this.handleInput} required/></label>
      //       <br></br>
      //       <label for="number"><input type="text" placeholder="Number" id="number" value={this.state.number} name="number" onChange={this.handleInput} required/></label>
      //       <br></br>
      //       <input type="submit"/>
      //     </form>
      //   </div>

      //   <div>
      //     {this.state.details.map((detail, id) =>  ( 
      //     <div key={id} class="test">
      //       name:{detail.name}
      //       <br/>
      //       number:{detail.number}
      //     </div>
      //     )
      //     )} 
      //   </div>
      //   <Login/>
      // </div> 
//     ); 
//   } 
// } 
// // Looks good, just make sure your spacing is correct. I fixed a good amount of it.
// export default App;
