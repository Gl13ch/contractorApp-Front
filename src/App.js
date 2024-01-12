import {useState, useEffect} from 'react'; 
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Home from './pages/Home.js';

const App = () => {
	const [currUser, setCurrUser] = useState({});
	const [toggleError, setToggleError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
  let [jobs, setJobs] = useState([]);
  const [editVisibility, setEditVisibility] = useState(false);
  const [toggleLogout, setToggleLogout] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(true);
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
  const [jobEdit, setJobEdit] = useState(blankEdit);

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
    handleToggleLogout();
  };

  const handleToggleLogout = () => {
    if (toggleLogout) {
      setToggleLogout(false);
    } else {
      setToggleLogout(true);
    };
  };

  const handleToggleLogin = () => {
    if (toggleLogin) {
      setToggleLogin(false);
    } else {
      setToggleLogin(true);
    };
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <BrowserRouter>
      <Header/>
	    <Signup handleSignup={handleSignup}/>
      <br />
	    <Login handleLogin={handleLogin}/>
      <button onClick={handleLogout}>Logout</button>
      <br />
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
    <Home/>
    </BrowserRouter>
  );
};

export default App;