import {useState} from 'react';
import axios from 'axios';

const MakeTesting = ({getJobs}) => {
        
    const blankJob = {
        name: "",
        number: "",
    }

    const [jobDetails, setJobDetails] = useState(blankJob);

    const handleInput = (e) => {
        setJobDetails({...jobDetails, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateJob(jobDetails);
    setJobDetails(blankJob);
    }


    const handleCreateJob = (newJob) => {
    axios.post("http://localhost:8000/testing/", newJob)
    .then((res) => { 
        getJobs();
    })
    .catch((err) => {});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name"><input type="text" placeholder="Name" id="name" value={jobDetails.name} name="name" onChange={handleInput} required/></label>
            <br></br>
            <label htmlFor="number"><input type="text" placeholder="Number" id="number" value={jobDetails.number} name="number" onChange={handleInput} required/></label>
            <br></br>
            <input type="submit"/>
            </form>
        </div>
    )
}

export default MakeTesting