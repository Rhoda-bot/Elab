/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

interface obj {
 image: string,
 title: string,
 startDate: string,
 endDate: string,
updatedAt: string
}
function AdProject() {
  const [blogs, setBlogs] = useState<obj[]>();
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/projects/').then((res) => {
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
              <span className="impact--title m-3"> Projects</span>
            </div>
            <div className="col-md-6 text-lg-end text-center">
              <button className="impact--btn" type="button">Add a Project</button>
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
                        <th scope="col">Project title</th>
                        <th scope="col">Start date</th>
                        <th scope="col">End date</th>
                        <th scope="col">Created On</th>
                      </tr>
                    </thead>
                    <tbody className="border-top m-3">
                      {
                    blogs?.map(({
                      image, title, startDate, endDate, updatedAt,
                    }, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img src={image} alt="" className="impact__card--img" /></td>
                        <td>{title}</td>
                        <td>{moment(startDate).format('LL')}</td>
                        <td>
                          {moment(endDate).format('LL')}
                        </td>
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
  );
}
export default AdProject;