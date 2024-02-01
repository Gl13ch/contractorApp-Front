import {useState} from 'react';
import axios from 'axios';


const Punchlist = ({punches}) => {

    const blankPunch = {
        name: "",
        complete: false,
    };
    
    const [newPunch, setNewPunch] = useState(blankPunch);

    const handleTogglePunch = (id) => {
        axios.get('http://localhost:8000/testing/')
		.then((res) => {
			setJobs(res.data);
		});
        axios.get(`http://localhost:8000/testing/${id}`)
        axios.put(`http://localhost:8000/testing/${id}`,{})
        .then ((res) => {
        })
        .catch((err) => {});
        console.log("punchtoggle end")
    }

    /*const handleEditJob = (event) => {
        console.log("edit start")
        axios.put(`http://localhost:8000/testing/${jobId}`,jobEdit)
        .then ((res) => {
        })
        .catch((err) => {});
        console.log("edit end")
        handleEditClose();
        handleHideEdit();

    };*/


    return (
        <div>
            {punches.map((punch, id) =>  ( 
                <div key={punch.id}>
                    <form>
                        <label><input type='checkbox' value={punch.checked} onClick={ () => handleTogglePunch(punch.id)}/></label>
                    </form>
                </div>
          )
        )}
            <form>
                
            </form>
        </div>
    );

};

export default Punchlist;