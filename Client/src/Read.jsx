import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { apiDomain } from "./Utils/apiDomain";

const Read = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null); // Change initial state to null

  useEffect(() => {
    axios
      .get(`${apiDomain}/student/${id}`)
      .then((res) => {
        console.log(res.data);
        setStudent(res.data); // No need for [0] if you expect only one student
      })
      .catch((error) => {
        console.log(error);
        // Handle error, maybe set an error state to display a message to the user
      });
  }, [id]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="card w-50">
        <div className="card-body ">
          <h2 className="card-title">Student Detail</h2>
          {student && (
            <div>
              <div className="mb-3">
                <label className="fw-bold">No: </label>
                <span> {student.ID}</span>
              </div>
              <div className="mb-3">
                <label className="fw-bold">Name: </label>
                <span> {student.name}</span>
              </div>
              <div className="mb-3">
                <label className="fw-bold">Email: </label>
                <span> {student.email}</span>
              </div>

              <div>
                <Link to="/" className="btn btn-primary me-2">
                  Back
                </Link>
                <Link to={`/edit/${student.ID}`} className="btn btn-info">
                  Edit
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Read;
