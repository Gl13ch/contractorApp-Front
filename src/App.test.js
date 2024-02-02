import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

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