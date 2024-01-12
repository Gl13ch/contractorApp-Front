import {useState, useEffect} from 'react'; 
// import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';

const App = () => {
	const [currUser, setCurrUser] = useState({});
	const [toggleError, setToggleError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
  const [jobs, setJobs] = useState([])

  const getJobs = () => {
    axios.get('http://localhost:8000/job/')
    .then((res) => {
      setJobs(res.data)
    })
  };

	const handleSignup = (newUserObj) => {
		axios.post('http://localhost:8000/users/', newUserObj)
		.then((res) => {
			if (res.data.email) {
				console.log('success');
				setToggleError(false);
				setErrorMsg('');
				setCurrUser(res.data);
			} else {
				console.log('signup error\n', res.data);
				setErrorMsg(res.data);
				setToggleError(true);
			}
		}).catch(error =>{
			console.log(error);
		});
	};

	const handleLogin = (userObj) => {
		axios.put('http://localhost:8000/users/login', userObj)
		.then((res) =>{
			if (res.data.email) {
				console.log('success');
				setToggleError(false);
				setErrorMsg('');
				setCurrUser(res.data);
			} else {
				console.log('error', res.data);
				setErrorMsg(res.data);
				setToggleError(true);
			}
		})     
	};

  const handleLogout = () => {
    setCurrUser({});
    console.log(currUser);
  };

////////////////////////////////////////////////////
//   let [jobs, setJobs] = useState([]);

//   const [editVisibility, setEditVisibility] = useState(false);
//   const handleHideEdit = () => setEditVisibility(false);
//   const handleShowEdit = () => setEditVisibility(true);
  
//   const blankJob = {
//     name: "",
//     number: "",
//   };

//   const blankEdit = {
//     name: "",
//     number: "",
//     id: ""
//   };

//   const [jobDetails, setJobDetails] = useState(blankJob);
//   const [jobEdit, setJobEdit] = useState(blankEdit);

//   const getJobs = () => {
//     axios.get('http://localhost:8000/testing/')
//     .then((res) => {
//       setJobs(res.data);
//     });
//   };

//   const handleInput = (e) => {
//     setJobDetails({...jobDetails, [e.target.name]:e.target.value})
//   };

//   const handleEditInput = (e) => {
//     setJobEdit({...jobEdit, [e.target.name]:e.target.value})
//   };

//   const handleCreateJob = (newJob) => {
//     axios.post("http://localhost:8000/testing/", newJob)
//     .then((res) => { 
//       getJobs();
//     })
//     .catch((err) => {});
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleCreateJob(jobDetails);
//     setJobDetails(blankJob);
//   };

//   const handleDeleteJob = (event) => {
//     axios.delete(`http://localhost:8000/testing/${event.target.value}`)//,{data:{id:{event.target.value}}})
//     .then((res) => { 
//       getJobs();
//     })
//     .catch((err) => {});
//   };

//   const handleEditJob = (event) => {
//     console.log("edit start")
//     axios.put(`http://localhost:8000/testing/${jobEdit.id}`,{
//       //document.getElementById("")
//       [event.target.name]: event.target.value
//     })
//     .then ((res) => {
//       getJobs();
//     })
//     .catch((err) => {});
//     console.log("edit end")
//     handleHideEdit();
//   };

//   const openEditForm = (event) => {
//     let val = document.getElementsByClassName("form-popup").value
//   };


//   useEffect(() => {
//     getJobs();
//   }, []);

// //<button value={job.id} onClick={handleEditJob}>Edit</button>
////////////////////////////////////////////////////
  return (
    <BrowserRouter>
      <Header/>
	    <Signup handleSignup={handleSignup}/>
      <br />
	    <Login handleLogin={handleLogin}/>
      <button onClick={handleLogout}>Logout</button>
    {/* 
    <div>
      <Header/>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"><input type="text" placeholder="Name" id="name" value={jobDetails.name} name="name" onChange={handleInput} required/></label>
          <br></br>
          <label htmlFor="number"><input type="text" placeholder="Number" id="number" value={jobDetails.number} name="number" onChange={handleInput} required/></label>
          <br></br>
          <input type="submit"/>
        </form>
      </div>
      <Signup/>
      <Login/>
      <br />
      <div>
        {jobs.map((job, id) =>  ( 
        <div key={job.id} className="test">
            <button value={job.id} onClick={handleDeleteJob}>Delete</button> <button id="toggle_button" value={false} onClick={handleShowEdit}>Edit</button>
            <br/>
            <p>name:{job.name}</p>
            <br/>
            <p>number:{job.number}</p>
          </div>
          )
        )}
      </div>
      <Modal show={editVisibility} onClick={handleShowEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='form-popup' onSubmit={handleEditJob}>
            <label>name:<input type="text" name='name' value={jobEdit.name} onChange={handleEditInput}/></label>
            <br/>
            <label>number:<input type="text" name='number' value={jobEdit.number} onChange={handleEditInput} /></label>
            <br/>
            <input type="submit" value="Edit"/>
          </form>
        </Modal.Body>
        <button onClick={handleHideEdit}>Close</button>
      </Modal>
    </div> 
    */}
    </BrowserRouter>
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




/*


import {useState, useEffect} from 'react'; 
//import { Modal } from 'bootstrap';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';
import './App.css';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  let [jobs, setJobs] = useState([]);

  const [editVisibility, setEditVisibility] = useState(false);
  const handleHideEdit = () => setEditVisibility(false);
  const handleShowEdit = () => setEditVisibility(true);
  
  const blankJob = {
    name: "",
    number: "",
  }

  const blankEdit = {
    name: "",
    number: "",
    id: ""
  }

  const [jobDetails, setJobDetails] = useState(blankJob);
  const [jobEdit, setJobEdit] = useState(blankEdit)

  const getJobs = () => {
    axios.get('http://localhost:8000/testing/')
    .then((res) => {
      setJobs(res.data);
    });
  };

  const handleInput = (e) => {
    setJobDetails({...jobDetails, [e.target.name]:e.target.value})
  }

  const handleEditInput = (e) => {
    setJobEdit({...jobEdit, [e.target.name]:e.target.value})
  }

  const handleCreateJob = (newJob) => {
    axios.post("http://localhost:8000/testing/", newJob)
    .then((res) => { 
      getJobs();
    })
    .catch((err) => {});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateJob(jobDetails);
    setJobDetails(blankJob);
  }

  const handleDeleteJob = (event) => {
    axios.delete(`http://localhost:8000/testing/${event.target.value}`)//,{data:{id:{event.target.value}}})
    .then((res) => { 
      getJobs();
    })
    .catch((err) => {});
  }

  const handleEditJob = (event) => {
    console.log("edit start")
    axios.put(`http://localhost:8000/testing/${jobEdit.id}`,{
      ['name']: jobEdit.name,
      ['number']:jobEdit.number
    })
    .then ((res) => {
    })
    .catch((err) => {});
    console.log("edit end")
    handleHideEdit();
  };

  const handleCloseEdit = (e) => {
    handleHideEdit();
    setJobEdit(blankEdit);
  };

  useEffect(() => {
    getJobs();
  }, []);

//<button value={job.id} onClick={handleEditJob}>Edit</button>
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"><input type="text" placeholder="Name" id="name" value={jobDetails.name} name="name" onChange={handleInput} required/></label>
          <br></br>
          <label htmlFor="number"><input type="text" placeholder="Number" id="number" value={jobDetails.number} name="number" onChange={handleInput} required/></label>
          <br></br>
          <input type="submit"/>
        </form>
      </div>
      <Signup/>
      <Login/>
      <br />
      <div>
        {jobs.map((job, id) =>  ( 
        <div key={job.id} className="test">
            <button value={job.id} name='id' onClick={handleDeleteJob}>Delete</button> <button id="toggle_button" value={false} onClick={async () => {
              setJobEdit({...jobEdit, ['id']:job.id})
              handleShowEdit()
            }}>Edit</button>
            <p>name:{job.name} <br></br>
            number:{job.number}</p>
          </div>
          )
        )}
      </div>
      <Modal show={editVisibility} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='form-popup' onSubmit={handleEditJob}>
            <label>name:<input type="text" name='name' value={jobEdit.name} onChange={handleEditInput}/></label>
            <br/>
            <label>number:<input type="text" name='number' value={jobEdit.number} onChange={handleEditInput} /></label>
            <br/>
            <input type="submit" value="Edit"/>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default App;



*/