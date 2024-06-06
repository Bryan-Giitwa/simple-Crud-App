import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiDomain } from "./Utils/apiDomain";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiDomain}/students`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${apiDomain}/delete/${id}`);
    axios
      .delete(`${apiDomain}/delete/${id}`)
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <h2>Student List</h2>
          <div className="d-flex justify-content-end">
            <Link to="/create" className="btn btn-sm btn-success">
              Add New
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((student, index) => (
                  <tr key={index}>
                    <td>{student.ID}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>
                      <Link
                        to={`/read/${student.ID}`}
                        className="btn btn-sm btn-info"
                      >
                        Read
                      </Link>
                      <Link
                        to={`/edit/${student.ID}`}
                        className="btn btn-sm btn-primary mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(student.ID)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
