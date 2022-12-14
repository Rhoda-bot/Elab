/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router';
import { start } from 'repl';

function AddProject() {
  const [values, setValues] = useState('');
  const [image, setImage] = useState('');
  const location = useLocation();
  const [brochure, setBrochure] = useState('');
  const [fileimg, setFile] = useState<any>();

  const inputValues = {
    title: '',
    startDate: '',
    endDate: '',
  };
  const [inputVal, setInputVals] = useState(inputValues);
  const [pdfs, setPdfs] = useState<any>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputVals({ ...inputVal, [name]: value });
    const file = e?.target?.files;
    if (file) {
      setImage(file[0].name);
      setFile(file[0]);
    }
    const selectedPdfFile = e?.target.files;
    if (selectedPdfFile) {
      setBrochure(selectedPdfFile[0].name);
      setPdfs(selectedPdfFile[0]);
    }
  };

  const handleSubmit = () => {
    const {
      title, startDate, endDate,
    } = inputVal;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', fileimg, image);
    formData.append('description', values);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('brochure', pdfs, brochure);
    axios.post('projects', formData).then((res) => {
      if (res) {
        console.log(res.data);
      }
    }).catch((err) => err);
  };

  const {
    title, startDate, endDate,
  } = inputVal;

  return (
    <div className="addblog h-100">
      <div className="container h-100">
        <div className="row">
          <div className="row">
            <div className="col-md-6 text-lg-start text-center">
              <span className="impact--title m-3"> Add a Project</span>
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
                <div className="row ">
                  <div className="col">
                    <span>Start Date</span>
                    <input type="date" name="startDate" value={startDate} onChange={handleOnChange} className="p-3 my-2 content__form--input form-control" required />
                  </div>
                  <div className="col">
                    <span>End Date</span>
                    <input type="date" name="endDate" value={endDate} onChange={handleOnChange} className="p-3 my-2 content__form--input form-control" required />
                  </div>
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Non-profit brochure</label>
                  <br />
                  <input type="file" className="name p-3 my-2 content__form--input form-control" id="image" onChange={handleOnChange} required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Image</label>
                  <br />
                  <input type="file" className=" p-3 my-2 content__form--input form-control" id="image" onChange={handleOnChange} required />
                </div>
                <div className="py-3 py-lg-4 px-0 mx-0">
                  <button className="fw-bold py-3 px-5 content__form--btn" type="button" onClick={handleSubmit}>Save Project</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProject;
