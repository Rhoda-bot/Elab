/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteItem from '../blogs/delete-blog';

interface obj {
  id: string,
 name: string,
 email: string,
 project: string,
 skills: string,
updatedAt: string
}
function AdVolunteers() {
  const [blogs, setBlogs] = useState<obj[]>();
  const navigate = useNavigate();
  const handleAddVolunteer = () => {
    navigate('/admin_dashboard/add-volunteer');
  };
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/volunteers/').then((res) => {
      if (res.data.status.toString() === 'success') {
        setBlogs([...res.data.data, res.data.data]);
      }
    }).catch((err) => err);
  }, []);

  return (
    <div>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-lg-start text-center">
              <span className="impact--title m-3">Volunteers</span>
            </div>
            <div className="col-md-6 text-lg-end text-center">
              <button type="button" className="impact--btn" onClick={handleAddVolunteer}>Add a Volunteer</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 m-3">
              <div className="card border-0 impact__card p-3">
                <div className="col-md-6 m-3">
                  <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback" />
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </div>
                <div className="row">
                  <table className="table table-borderless p-4">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Project</th>
                        <th scope="col">Skills</th>
                        <th scope="col">Created On</th>
                      </tr>
                    </thead>
                    <tbody className="border-top m-3">
                      {
                    blogs?.map(({

                      name, email, project, skills, updatedAt, id,
                    }, index) => (
                      <>
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {name}
                          </td>
                          <td>{email}</td>
                          <td>{project}</td>
                          <td>{skills}</td>
                          <td>
                            {updatedAt ? moment(updatedAt).format('LL') : false}
                          </td>
                          <td>
                            <Link to={`/admin_dashboard/edit-volunteer/${id}`} className="link">
                              <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                            </Link>
                          </td>
                          <td>
                            <i className="fa-solid fa-trash" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-hidden="true" />
                          </td>
                        </tr>
                        <DeleteItem urlPath="posts" id={id} />
                      </>
                    ))
                  }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdVolunteers;
