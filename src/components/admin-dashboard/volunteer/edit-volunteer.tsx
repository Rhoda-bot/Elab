/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Tag from '../blogs/tags';

function EditVoluteer() {
  const { id } = useParams();
  const inputValues = {
    name: '',
    email: '',
    project: '',
    skills: [],
  };
  const [inputVal, setInputVals] = useState(inputValues);
  const [tags, setTags] = useState<any>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputVals({ ...inputVal, [name]: value });
  };

  useEffect(() => {
    axios.get(`volunteers/${id}`).then((res) => {
      if (res.data.status.toString() === 'success') {
        setInputVals(res.data.data);
      }
    }).catch((err) => err);
  });

  const handleSubmit = () => {
    const {
      name, email, project, skills,
    } = inputVal;
    axios.patch(`volunteers/${id}`, {
      name, email, project, skills,
    }).then((res) => {

    });
  };
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
                  <label htmlFor="name" className="p-0 fw-bold">Title</label>
                  <br />
                  <input
                    type="text"
                    className="name p-3 my-2 content__form--input form-control"
                    value={inputVal.name}
                    id="name"
                    onChange={handleOnChange}
                    name="name"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Author</label>
                  <br />
                  <input type="text" className=" p-3 my-2 content__form--input form-control" onChange={handleOnChange} value={inputVal.email} name="author" required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Project</label>
                  <br />
                  <input type="text" className=" p-3 my-2 content__form--input form-control" onChange={handleOnChange} value={inputVal.project} name="author" required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Skills</label>
                  <br />
                  <Tag sendTags={setTags} tag={inputVal.skills} />
                </div>
                <div className="py-3 py-lg-4 px-0 mx-0">
                  <button className="fw-bold py-3 px-5 content__form--btn" type="button" onClick={handleSubmit}>publish</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditVoluteer;
