/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DeleteItem from '../blogs/delete-blog';

interface obj {
  id: string,
 title: string,
 price: string,
 image: string,
 date: string,
updatedAt: string
}
function AdTraining() {
  const [blogs, setBlogs] = useState<obj[]>();
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/trainings/').then((res) => {
      if (res.data.status.toString() === 'success') {
        setBlogs([...res.data.data, res.data.data]);
      }
    }).catch((err) => err);
  }, []);

  const navigate = useNavigate();

  const handleAddTraining = () => {
    navigate('/admin_dashboard/add-training');
  };
  return (
    <div>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-lg-start text-center">
              <span className="impact--title m-3">Training</span>
            </div>
            <div className="col-md-6 text-lg-end text-center">
              <button type="button" className="impact--btn" onClick={handleAddTraining}>Add a Training</button>
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
                        <th scope="col">Title</th>
                        <th scope="col">Price(₦)</th>
                        <th scope="col">Commencment date</th>
                        <th scope="col">Created On</th>
                      </tr>
                    </thead>
                    <tbody className="border-top m-3">
                      {
                    blogs?.map(({
                      title, image, date, price, updatedAt, id,
                    }, index) => (
                      <>
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td><img src={image} alt="" className="impact__card--img" /></td>
                          <td>
                            {' '}
                            {title}
                            {' '}
                          </td>
                          <td>{price}</td>
                          <td>{date ? moment(date).format('LL') : false}</td>
                          <td>
                            {updatedAt ? moment(updatedAt).format('LL') : false}
                          </td>
                          <td>

                            <Link to={`/admin_dashboard/edit-trainings/${id}`} className="link">
                              <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                            </Link>
                          </td>
                          <td>
                            <i className="fa-solid fa-trash" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-hidden="true" />
                          </td>
                        </tr>
                        <DeleteItem urlPath="training" id={id} />
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
export default AdTraining;
