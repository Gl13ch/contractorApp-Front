import { useEffect } from 'react';
import MakeTesting from '../components/MakeTesting.js';
import TestingList from '../components/TestingList.js';
import '../views/home.css';

const Home = ({getJobs, handleDeleteJob, jobs}) => {

    return(
        <div className='pageContainer'>
            <div className='bannerImgContainer'>
                <img id='bannerImg' src={require('../images/banner.png')} alt="NLR Remodeling Logo"/>
            </div>
            <h1>HOME</h1>
            <ul>
                <li>What type of services?</li>
                <li>Finished Projects</li>
                <li>Client Stories</li>
                <li>What we stand for</li>
                <li>Free estimate</li>
            </ul>
            {/* <MakeTesting getJobs={getJobs}/>
		    <br />
		    <TestingList handleDeleteJob={handleDeleteJob} jobs={jobs} />  */}

        </div>
    );
};

export default Home;