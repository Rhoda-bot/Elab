/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

interface obj {
 image: string,
 title: string,
 pricePerHour: string,
 discount: string,
 useInternet: string,
 useOfficeAddress: string,
updatedAt: string
availability: any;
}
function AdWorkPlans() {
  const [blogs, setBlogs] = useState<obj[]>();
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/workspaces/').then((res) => {
      if (res.data.status.toString() === 'success') {
        setBlogs([...res.data.data, res.data.data]);
        console.log(res.data.data);
      }
    }).catch((err) => err);
  }, []);

  return (
    <div>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-lg-start text-center">
              <span className="impact--title m-3">Workspace Plans</span>
            </div>
            <div className="col-md-6 text-lg-end text-center">
              <button type="button" className="impact--btn">Add a Plan</button>
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
                        <th scope="col">Plan title</th>
                        <th scope="col">Spaces Avail.</th>
                        <th scope="col">Price per hour(₦)</th>
                        <th scope="col">Discount(%)</th>
                        <th scope="col">Address Use(₦)</th>
                        <th scope="col">Created On</th>
                      </tr>
                    </thead>
                    <tbody className="border-top m-3">
                      {
                    blogs?.map(({
                      image, title, pricePerHour, availability, discount, updatedAt,
                      useOfficeAddress,
                    }, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img src={image} alt="" className="impact__card--img" /></td>
                        <td>{title}</td>
                        <td>-</td>
                        <td>{pricePerHour}</td>
                        <td>{discount}</td>
                        <td>{useOfficeAddress}</td>
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
export default AdWorkPlans;
