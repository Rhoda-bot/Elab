/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';
import Tag from '../blogs/tags';

function AddVoluteer() {
  const inputValues = {
    name: '',
    email: '',
    project: '',
  };
  const [inputVal, setInputVals] = useState(inputValues);
  const [tags, setTags] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputVals({ ...inputVal, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const {
      name, email, project,
    } = inputVal;
    axios.post('volunteers', {
      name, email, project, skills: tags,
    }).then((res) => {
      if (res.data.status === 'success') {
        setIsLoading(false);
        // setInputVals();
      }
    }).catch((err) => console.log(err));
  };
  const { name, email, project } = inputVal;
  return (
    <div className="editblog">
      <div className="container py-lg-3">
        <div className="row">
          <div className="col-md-6 text-lg-start text-center">
            <span className="impact--title m-3"> Add a Volunteer</span>
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
                  <label htmlFor="name" className="p-0 fw-bold">Name</label>
                  <br />
                  <input
                    type="text"
                    className="name p-3 my-2 content__form--input form-control"
                    value={name}
                    id="name"
                    onChange={handleOnChange}
                    name="name"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Email</label>
                  <br />
                  <input type="text" className=" p-3 my-2 content__form--input form-control" onChange={handleOnChange} value={email} name="email" required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Project</label>
                  <br />
                  <input type="text" className=" p-3 my-2 content__form--input form-control" onChange={handleOnChange} value={project} name="project" required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Skills</label>
                  <br />
                  <Tag sendTags={setTags} tag={tags} />
                </div>
                <div className="py-3 py-lg-4 px-0 mx-0">
                  <button className="fw-bold py-3 px-5 content__form--btn" type="button" onClick={handleSubmit}>
                    {!isLoading && 'Publish'}
                    {isLoading && (
                    <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">posting...</span>
                      </div>
                    </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddVoluteer;
