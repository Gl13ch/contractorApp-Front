import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

const EditTesting = ({handleEditClose,jobId,visible}) => {

    const [editVisibility, setEditVisibility] = useState(visible);
    const handleHideEdit = () => setEditVisibility(false);
    const handleShowEdit = () => setEditVisibility(true);

    const blankEdit = {
        name: "",
        number: "",
    }

    const [jobEdit, setJobEdit] = useState(blankEdit);

    const handleEditInput = (e) => {
        setJobEdit({...jobEdit, [e.target.name]:e.target.value})
    };

    const handleEditJob = (event) => {
        console.log("edit start")
        axios.put(`http://localhost:8000/testing/${jobId}`,jobEdit)
        .then ((res) => {
        })
        .catch((err) => {});
        console.log("edit end")
        handleEditClose();
        handleHideEdit();

    };

    const handleCloseEdit = (e) => {
        console.log("stop edit")
        setJobEdit(blankEdit);
        handleEditClose();
        handleHideEdit();
    };
    
    useEffect(() => {
        setEditVisibility(visible);
    }, [visible]);

    return (
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
    )
}

export default EditTesting;