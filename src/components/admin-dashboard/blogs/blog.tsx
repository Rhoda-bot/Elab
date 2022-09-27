/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteItem from './delete-blog';

interface obj {
  id: string,
  author: string,
  content: string,
  createdAt: string,
  image: string,
  slug: string,
  tags: string[],
  title: string,
  updatedAt: string
}
function Blogs() {
  const [blogs, setBlogs] = useState<obj[]>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/posts/').then((res) => {
      if (res.data.status.toString() === 'success') {
        setBlogs([...res.data.data, res.data.data]);
      } else {
        setIsLoading(true);
      }
    }).catch((err) => err);
  }, []);
  const navigate = useNavigate();

  const handleAddBlog = () => {
    navigate('/admin_dashboard/add-blog');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-lg-start text-center">
            <span className="impact--title m-3"> Blog</span>
          </div>
          <div className="col-md-6 text-lg-end text-center">
            <button type="button" className="impact--btn" onClick={handleAddBlog}>
              Add a Blog post
            </button>
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
                      <th scope="col">Blog title</th>
                      <th scope="col">Author</th>
                      <th scope="col">Created On</th>
                    </tr>
                  </thead>
                  <tbody className="border-top m-3">
                    {isLoading && (
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                    {
                   blogs?.map(({
                     id, image, title, author, createdAt,
                   }, index) => (
                     <>
                       <tr key={index}>
                         <td>{index + 1}</td>
                         <td><img src={image} alt="" className="impact__card--img" /></td>
                         <td>{title}</td>
                         <td>{author}</td>
                         <td>
                           {' '}
                           {createdAt ? moment(createdAt).format('LL') : false}
                         </td>
                         <td>
                           <Link to={`/admin_dashboard/edit-blog/${id}`}>
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
  );
}
export default Blogs;
