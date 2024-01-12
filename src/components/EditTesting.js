
const handleHideEdit = () => setEditVisibility(false);
const handleShowEdit = () => setEditVisibility(true);

const blankEdit = {
    name: "",
    number: "",
    id: ""
  }

const [jobEdit, setJobEdit] = useState(blankEdit);

const handleEditInput = (e) => {
    setJobEdit({...jobEdit, [e.target.name]:e.target.value})
};


const handleEditJob = (event) => {
    console.log("edit start")
    axios.put(`http://localhost:8000/testing/${jobEdit.id}`,{
        ['name']: jobEdit.name,
        ['number']:jobEdit.number
    })
    .then ((res) => {
    })
    .catch((err) => {});
    console.log("edit end")
    handleHideEdit();
};

