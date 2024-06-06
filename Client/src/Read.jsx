import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { apiDomain } from './Utils/apiDomain'

const Read = () => {
    const { id } = useParams()
    const [ student, setStudent ] = useState([])

    useEffect(() => {
        axios.get(`${apiDomain}/student/${id}`)
        .then(res => {
            console.log(res.data)
            setStudent(res.data[0])
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <div className="p-2">
                <h2>Student Detail</h2>
                    <div>
                        <div>
                            <label>ID: </label>
                            <span>{student.ID}</span>
                        </div>
                        <div>
                            <label>Name: </label>
                            <span>{student.name}</span>
                        </div>
                        <div>
                            <label>Email: </label>
                            <span>{student.email}</span>
                        </div>

                        <Link to="/" className="btn btn-primary me-2">Back</Link>
                        <Link to={`/edit/${student.ID}`} className="btn btn-info">Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read