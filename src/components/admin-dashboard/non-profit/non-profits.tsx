/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

interface obj {
 title: string,
 image: string,
updatedAt: string
}
function AdNonProfit() {
  const [blogs, setBlogs] = useState<obj[]>();
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/non-profits').then((res) => {
      if (res.data.status.toString() === 'success') {
        setBlogs([...res.data.data, res.data.data]);
      }
    }).catch((err) => err);
  }, []);
  const navigate = useNavigate();

  const handleAddNonProfit = () => {
    navigate('/admin_dashboard/non-profit/add-non-profit');
  };
  const handleEditNonProfit = () => {
    navigate('/admin_dashboard/non-profit/edit-non-profit');
  };

  return (
    <>
      <div className={(window.location.pathname === '/admin_dashboard/non-profit/add-non-profit') || (window.location.pathname === '/admin_dashboard/non-profit/edit-non-profit') ? 'd-none' : 'blog'}>
        <div className="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-lg-start text-center">
                <span className="impact--title m-3"> Non-Profit</span>
              </div>
              <div className="col-md-6 text-lg-end text-center">
                <button type="button" className="impact--btn" onClick={handleAddNonProfit}>Add a Non-profit</button>
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
                          <th scope="col">Non-profit title</th>
                          <th scope="col">Created On</th>
                        </tr>
                      </thead>
                      <tbody className="border-top m-3">
                        {
                    blogs?.map(({
                      image, title, updatedAt,
                    }, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img src={image} alt="" className="impact__card--img" /></td>
                        <td>{title}</td>
                        <td>
                          { updatedAt ? moment(updatedAt).format('LL') : false}
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
export default AdNonProfit;
