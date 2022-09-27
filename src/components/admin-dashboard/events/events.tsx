/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DeleteItem from '../blogs/delete-blog';

interface obj {
  id: string,
  price: string,
  image: string,
  tag: string,
  title: string,
  updatedAt: string
}
function AdminEvents() {
  const [blogs, setBlogs] = useState<obj[]>();
  const location = useLocation();
  useEffect(() => {
    axios.get('programs').then((res) => {
      if (res.data.status.toString() === 'success') {
        setBlogs([...res.data.data, res.data.data]);
      }
    }).catch((err) => err);
  }, []);

  const navigate = useNavigate();

  const handleAddEvent = () => {
    navigate('/admin_dashboard/add-events');
  };

  return (
    <div className={(window.location.pathname.includes('add' || 'edit')) ? 'd-none' : 'events'}>
      <div className="events">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-lg-start text-center">
              <span className="impact--title m-3"> Event</span>
            </div>
            <div className="col-md-6 text-lg-end text-center">
              <button type="button" className="impact--btn" onClick={handleAddEvent}>Add an Event</button>
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
                        <th scope="col">Image</th>
                        <th scope="col">Event title</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Price</th>
                        <th scope="col">Created On</th>
                      </tr>
                    </thead>
                    <tbody className="border-top m-3">
                      {
                    blogs?.map(({
                      image, title, price, updatedAt, tag, id,
                    }, index) => (
                      <>
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td><img src={image} alt="" className="impact__card--img" /></td>
                          <td>{title}</td>
                          <td>{tag}</td>
                          <td>{price}</td>
                          <td>
                            {updatedAt ? moment(updatedAt).format('LL') : false}
                          </td>
                          <Link to={`/admin_dashboard/edit-events/${id}`} className="link">
                            <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                          </Link>
                          <td>
                            <i className="fa-solid fa-trash" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-hidden="true" />
                          </td>
                        </tr>
                        <DeleteItem urlPath="programs" id={id} />
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
export default AdminEvents;
