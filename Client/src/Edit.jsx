import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { apiDomain } from './Utils/apiDomain'

function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${apiDomain}/student/${id}`)
        .then(res => {
            console.log(res.data)
            setValues({...values, name: res.data[0].Name, email: res.data[0].Email})
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const [values, setValues] = useState({
        name: "",
        email: "",
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`${apiDomain}/edit/${id}`, values)
        .then(res => {
            console.log(res.data)
            navigate("/")
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">

            <form onSubmit={handleUpdate}>
            <h2>Update Student</h2>

            <div className="mb-2">
                <label>Name</label>
                <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                />
            </div>

            <div className="mb-2">
                <label>Email</label>
                <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                />
            </div>

            <button className="btn btn-success">Update</button>
            </form>
        </div>
        </div>
    )
}

export default Edit