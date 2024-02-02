import {useState, useEffect} from 'react';

const Settings = () => {

	let clickedClass = "clicked"
	// const body = document.body
	// const lightTheme = "light"
	// const darkTheme = "dark"
	// let theme

	let theme = localStorage.getItem("theme")

	const [toggleButton, setToggleButton] = useState(localStorage.getItem('toggleButton') === 'true');
	
	// if (localStorage) {
	// 	theme = localStorage.getItem("theme")
	// }
	
	if (theme === 'light' || theme === 'dark') {
		document.body.classList.add(theme)
	} else {
		document.body.classList.add('light')
	}
	
	const switchTheme = e => {
		if (theme === 'dark') {
		document.body.classList.replace('dark', 'light');
		e.target.classList.remove(clickedClass)
		localStorage.setItem('theme', 'light')
		theme = 'light'
		} else {
		document.body.classList.replace('light', 'dark')
		e.target.classList.add(clickedClass)
		localStorage.setItem('theme', 'dark')
		theme = 'dark'
		}
		localStorage.setItem('toggleButton',`${e.target.checked}`);
	
		setToggleButton(e.target.checked);
	}

	return(
		<div className='pageContainer'>
			<h1>SETTINGS</h1>
			DARK MODE:
			<label className='switch'>
				<input type='checkbox' checked={toggleButton} onChange={e => switchTheme(e)}/>
				<span className='slider'></span>
			</label>
		</div>
	) 
}


export default Settings