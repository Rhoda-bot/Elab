/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router';

function AddTraining() {
  const [values, setValues] = useState('');
  const [image, setImage] = useState('');
  const [pdfFile, setPdfFile] = useState('');
  const [pdfError, setPdfError] = useState('');
  const [pdfs, setPdfs] = useState<any>();
  const [fileimg, setFile] = useState<any>();
  const navigate = useNavigate();

  const inputValues = {
    title: '',
    price: '',
    date: '',
    link: '',
  };
  const [inputVal, setInputVals] = useState(inputValues);

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
      setPdfFile(selectedPdfFile[0].name);
      setPdfs(selectedPdfFile[0]);
    }
  };
  const handleSubmit = () => {
    const {
      title, link, date, price,
    } = inputVal;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', fileimg, image);
    formData.append('description', values);
    formData.append('date', date);
    formData.append('link', link);
    formData.append('brochure', pdfs, pdfFile);
    formData.append('price', price);
    axios.post('trainings', formData).then((res) => {
      if (res) {
        console.log(res.data);
      }
    }).catch((err) => err);
  };

  const {
    link, title, price, date,
  } = inputVal;

  return (
    <div className="addblog h-100">
      <div className="container h-100">
        <div className="row">
          <div className="row">
            <div className="col-md-6 text-lg-start text-center">
              <span className="impact--title m-3"> Add a Training</span>
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
                  <label htmlFor="name" className="p-0 fw-bold">Training Title</label>
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
                  <label htmlFor="name" className="p-0 fw-bold">Non-profit description</label>
                  <br />
                  <ReactQuill theme="snow" value={values} onChange={setValues} className="my-2" />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Commencement Date</label>
                  <br />
                  <input type="date" className="name p-3 my-2 content__form--input form-control" id="name" name="date" onChange={handleOnChange} value={date} required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Training link</label>
                  <br />
                  <input type="text" className="name p-3 my-2 content__form--input form-control" id="name" name="link" onChange={handleOnChange} value={link} required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Training Brochure</label>
                  <br />
                  <input type="file" className="name p-3 my-2 content__form--input form-control" id="image" onChange={handleOnChange} required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Training Price(???)</label>
                  <br />
                  <input type="text" className="name p-3 my-2 content__form--input form-control" id="name" name="price" onChange={handleOnChange} value={price} required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Non-profit Image</label>
                  <br />
                  <input type="file" className="name p-3 my-2 content__form--input form-control" id="image" onChange={handleOnChange} required />
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
export default AddTraining;
