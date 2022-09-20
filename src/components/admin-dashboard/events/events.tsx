/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

interface obj {
 price: string,
  image: string,
  tag: string,
  title: string,
  updatedAt: string
}
function AdminEvents() {
  const [blogs, setBlogs] = useState<obj[]>();
  useEffect(() => {
    axios.get('programs').then((res) => {
      if (res.data.status.toString() === 'success') {
        setBlogs([...res.data.data, res.data.data]);
      }
    }).catch((err) => err);
  }, []);

  const navigate = useNavigate();

  const handleAddEvent = () => {
    navigate('/admin_dashboard/events/add-events');
  };
  const handleEditEvent = () => {
    navigate('/admin_dashboard/blog/edit-blog');
  };

  return (
    <>
      <div className={(window.location.pathname === '/admin_dashboard/events/add-events') || (window.location.pathname === '/admin_dashboard/events/edit-events') ? 'd-none' : 'events'}>
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
                      image, title, price, updatedAt, tag,
                    }, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img src={image} alt="" className="impact__card--img" /></td>
                        <td>{title}</td>
                        <td>{tag}</td>
                        <td>{price}</td>
                        <td>
                          {updatedAt ? moment(updatedAt).format('LL') : false}
                        </td>
                      </tr>
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
      <Outlet />
    </>
  );
}
export default AdminEvents;