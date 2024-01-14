import React, {useState, useEffect} from 'react';
import EditTesting from './EditTesting.js';

const TestingList = ({handleDeleteJob,jobs}) => {
    const [jobId,setJobId] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleEditClick = (id) => {
        setJobId(id);
        setVisible(true);
        console.log("start edit");
    };

    const handleEditClose = () => {
        setVisible(false);
    };
    /*
    async () => {
              setJobEdit({...jobEdit, ['id']:job.id})
              handleShowEdit()
            }
    */

/*
    useEffect(() => {
            //setVisible(true);
        }, []);*/

    return (
        <div>
        {jobs.map((job, id) =>  ( 
        <div key={job.id} className="test">
            <button value={job.id} name='id' onClick={handleDeleteJob}>Delete</button> 
            <button onClick={() => handleEditClick(job.id)}>Edit</button>
            <p>name:{job.name} <br></br>
            number:{job.number}</p>
          </div>
          )
        )}
        <EditTesting handleEditClose = {handleEditClose} jobId={jobId} visible={visible} />
      </div>
    )
}

export default TestingList;