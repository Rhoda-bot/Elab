/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddServices() {
  const [image, setImage] = useState('');
  const [values, setValues] = useState('');

  const inputValues = {
    title: '',
    link: '',
  };
  const [inputVal, setInputVals] = useState(inputValues);
  const [fileimg, setFile] = useState<any>();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputVals({ ...inputVal, [name]: value });
    const file = e.target?.files;
    if (file) {
      setImage(file[0].name);
    }
  };

  const handleSubmit = () => {
    const {
      title, link,
    } = inputVal;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', fileimg, image);
    formData.append('description', values);
    formData.append('link', link);
    axios.post('mentions', formData).then((res) => {
      if (res) {
        console.log(res.data);
      }
    }).catch((err) => err);
  };

  const {
    title, link,
  } = inputVal;

  return (
    <div className="addblog h-100">
      <div className="container h-100">
        <div className="row">
          <div className="row">
            <div className="col-md-6 text-lg-start text-center">
              <span className="impact--title"> Add a Service</span>
            </div>
            <div className="col-md-6 text-lg-end text-center pt-2">
              <span>
                <i className="fa-solid fa-arrow-left pe-2" />
                <span className="py-2 px-1 fw-bold">Back </span>
              </span>
            </div>
          </div>
          <div className="col-lg-12 col-md-10  text-start">
            <div className="content__card w-100 p-5">
              <form className="content__form mx-5">
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Title</label>
                  <br />
                  <input
                    type="text"
                    className="name p-3 my-2 content__form--input form-control"
                    value={title}
                    id="name"
                    onChange={handleOnChange}
                    name="title"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Description</label>
                  <br />
                  <ReactQuill theme="snow" value={values} onChange={setValues} className="my-2" />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Link</label>
                  <br />
                  <input type="text" className="p-3 my-2 content__form--input form-control" id="name" name="link" onChange={handleOnChange} value={link} required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Image</label>
                  <br />
                  <input type="file" className=" p-3 my-2 content__form--input form-control" id="image" onChange={handleOnChange} required />
                </div>
                <div className="py-3 py-lg-4 px-0 mx-0">
                  <button className="fw-bold py-3 px-5 content__form--btn" type="button" onClick={handleSubmit}>Save Event</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddServices;
