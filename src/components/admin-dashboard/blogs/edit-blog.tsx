/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function EditBlog() {
  return (
    <div className="editblog">
      <div className="container py-lg-3">
        <div className="row">
          <div className="col-md-6 text-lg-start text-center">
            <span className="impact--title m-3"> Edit a Blog Post</span>
          </div>
          <div className="col-md-6 text-lg-end text-center pt-2">
            <span>
              <i className="fa-solid fa-arrow-left pe-2" />
              <span className="py-2 px-1 fw-bold">Back </span>
            </span>
          </div>
          <div className="col-lg-12 col-md-10 text-start">
            <div className="content__card w-100 p-5">
              <form className="content__form mx-5">
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Image</label>
                  <br />
                  <input type="file" className="name p-3 my-2 content__form--input form-control" id="image" required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Author</label>
                  <br />
                  <input type="text" className="name p-3 my-2 content__form--input form-control" id="name" name="author" required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditBlog;
