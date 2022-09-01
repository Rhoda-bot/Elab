/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

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
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/posts/').then((res) => {
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
              <span className="impact--title m-3"> Blog</span>
            </div>
            <div className="col-md-6 text-lg-end text-center">
              <button type="button" className="impact--btn">Add a Blog post</button>
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
                      {
                    blogs?.map(({
                      image, title, author, createdAt,
                    }, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img src={image} alt="" className="impact__card--img" /></td>
                        <td>{title}</td>
                        <td>{author}</td>
                        <td>
                          {' '}
                          {createdAt ? moment(createdAt).format('LL') : false}
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
export default Blogs;
