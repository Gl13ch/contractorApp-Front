

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

const handleDeleteJob = (event) => {
    axios.delete(`http://localhost:8000/testing/${event.target.value}`)//,{data:{id:{event.target.value}}})
    .then((res) => { 
      getJobs();
    })
    .catch((err) => {});
  }