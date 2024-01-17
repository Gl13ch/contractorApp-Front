import {useState, useEffect} from 'react'; 
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Home from './pages/Home.js';
import MakeTesting from './components/MakeTesting.js';
import TestingList from './components/TestingList.js';
import EditTesting from './components/EditTesting.js';
// import Punchlist from './pages/Punchlist.js'
import SignupLogin from './pages/SignupLogin.js'

const App = () => {
	const [currUser, setCurrUser] = useState({});
	// const [toggleError, setToggleError] = useState(false);
	// const [errorMsg, setErrorMsg] = useState('');
  	let [jobs, setJobs] = useState([]);
	//   const [toggleLogout, setToggleLogout] = useState(false);
  	const [toggleLogin, setToggleLogin] = useState(true);

  const getJobs = () => {
    axios.get('http://localhost:8000/testing/')
    .then((res) => {
      setJobs(res.data);
    });
  };

  const handleDeleteJob = (event) => {
    axios.delete(`http://localhost:8000/testing/${event.target.value}`)//,{data:{id:{event.target.value}}})
    .then((res) => { 
      getJobs();
    })
    .catch((err) => {});
  };

	// const handleSignup = (newUserObj) => {
	// 	axios.post('http://localhost:8000/users/', newUserObj)
	// 	.then((res) => {
	// 		if (res.data.email) {
	// 			console.log('success');
	// 			setToggleError(false);
	// 			setErrorMsg('');
	// 			setCurrUser(res.data);
	// 		} else {
	// 			console.log('signup error\n', res.data);
	// 			setErrorMsg(res.data);
	// 			setToggleError(true);
	// 		}
	// 	}).catch(error =>{
	// 		console.log(error);
	// 	});
	// };

	// const handleLogin = (userObj) => {
	// 	axios.put('http://localhost:8000/users/login', userObj)
	// 	.then((res) =>{
	// 		if (res.data.email) {
	// 			console.log('success');
	// 			setToggleError(false);
	// 			setErrorMsg('');
	// 			setCurrUser(res.data);
	// 		} else {
	// 			console.log('error', res.data);
	// 			setErrorMsg(res.data);
	// 			setToggleError(true);
	// 		};
	// 	});   
	// };

//   const handleLogout = () => {
//     setCurrUser({});
//     console.log(currUser);
//     handleToggleLogout();
//   };

//   const handleToggleLogout = () => {
//     if (toggleLogout) {
//       setToggleLogout(false);
//     } else {
//       setToggleLogout(true);
//     };
//   };

//   const handleToggleLogin = () => {
//     if (toggleLogin) {
//       setToggleLogin(false);
//     } else {
//       setToggleLogin(true);
//     };
//   };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <BrowserRouter>
    	<Header
        /* handleLogin={handleLogin} toggleLogout={toggleLogout}handleToggleLogout={handleToggleLogout} handleLogout={handleLogout} handleToggleLogin={handleToggleLogin} handleSignup={handleSignup} toggleError={toggleError}
        errorMsg={errorMsg}*/toggleLogin={toggleLogin} currUser={currUser}/>
	    {/* <Signup handleSignup={handleSignup}/>
      	<br />
	    <Login handleLogin={handleLogin}/>
      	<button onClick={handleLogout}>Logout</button>
      	<br />
		<br /> */}
    	{/* <MakeTesting getJobs={getJobs}/>
        <br />
        <TestingList handleDeleteJob={handleDeleteJob} jobs={jobs} /> */}
      <Routes>
          	<Route path='/' element={<Home/>} exact />
			<Route path='signup' element={<SignupLogin setCurrUser={setCurrUser}/>}/>
			<Route path='/jobboard'/>
			<Route path='/user' />
			<Route path='/job/:id'/>
			{/* <Route path='/punchlist' element={<Punchlist/>}/> */}
      </Routes>
	  <Footer />
    </BrowserRouter>
  );
};

export default App;