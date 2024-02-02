import { useEffect } from 'react';
import MakeTesting from '../components/MakeTesting.js';
import TestingList from '../components/TestingList.js';

const Home = ({getJobs, handleDeleteJob, jobs}) => {

    return(
        <div className='pageContainer'>
            <h1>HOME</h1>
            <h3>CONTENT:</h3>
            <MakeTesting getJobs={getJobs}/>
		    <br />
		    <TestingList handleDeleteJob={handleDeleteJob} jobs={jobs} /> 
        </div>
    );
};

export default Home;