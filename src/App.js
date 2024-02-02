import {useState, useEffect} from 'react'; 
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import SignupPage from './pages/SignupPage.js';
import LoginPage from './pages/LoginPage.js';
import Home from './pages/Home.js';
import EditTesting from './components/EditTesting.js';
import Settings from './pages/Settings.js'
import './views/darkmode.css';

const App = () => {
	const [currUser, setCurrUser] = useState({});
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

  let theme = localStorage.getItem("theme")

  useEffect(() => {
    getJobs();
    // GET DARK MODE OR LIGHT MODE ON LOAD
    if (theme === 'light' || theme === 'dark') {
        document.body.classList.add(theme)
      } else {
        document.body.classList.add('light')
      }
  }, []);

  return (
	<BrowserRouter>
		<Header
		/* handleLogin={handleLogin} toggleLogout={toggleLogout}handleToggleLogout={handleToggleLogout} handleLogout={handleLogout} handleToggleLogin={handleToggleLogin} handleSignup={handleSignup} toggleError={toggleError}
		errorMsg={errorMsg}*/toggleLogin={toggleLogin} currUser={currUser} setCurrUser={setCurrUser}/>
		{/* <Signup handleSignup={handleSignup}/>
		<br />
		<Login handleLogin={handleLogin}/>
		<button onClick={handleLogout}>Logout</button>
		<br />
		<br /> */}
		<Routes>
			<Route path='/' element={<Home getJobs={getJobs} handleDeleteJob={handleDeleteJob} jobs={jobs}/>} exact />
			<Route path='login' element={<LoginPage setCurrUser={setCurrUser}/>}/>
			<Route path='signup' element={<SignupPage setCurrUser={setCurrUser}/>}/>
			<Route path='/jobboard'/>
			<Route path='/user' />
			<Route path='/job/:id'/>
			<Route path='settings' element={<Settings/>}/>
			{/* <Route path='/punchlist' element={<Punchlist/>}/> */}
		</Routes>
		<Footer />
	</BrowserRouter>
  );
};

export default App;