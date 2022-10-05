/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddEvent() {
  const [values, setValues] = useState('');
  const [image, setImage] = useState('');
  const [fileimg, setFile] = useState<any>();
  const inputValues = {
    title: '',
    date: '',
    link: '',
    price: '',
    tag: '',
  };
  const [inputVal, setInputVals] = useState(inputValues);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files;
    if (file) {
      setImage(file[0].name);
      setFile(file[0]);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputVals({ ...inputVal, [name]: value });
  };

  const handleSubmit = () => {
    const {
      title, date, link, price, tag,
    } = inputVal;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', fileimg, image);
    formData.append('description', values);
    formData.append('date', date);
    formData.append('link', link);
    formData.append('tag', tag);
    formData.append('price', price);
    axios.post('programs', formData).then((res) => {
      if (res) {
        console.log(res.data);
      }
    }).catch((err) => err);
  };

  const {
    title, tag, price, date, link,
  } = inputVal;

  return (
    <div className="addblog h-100">
      <div className="container h-100">
        <div className="row">
          <div className="row">
            <div className="col-md-6 text-lg-start text-center">
              <span className="impact--title m-3"> Add a Event Post</span>
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
                  <input type="file" className=" p-3 my-2 content__form--input form-control" id="image" onChange={handleImage} required />
                </div>
                <div className="row ">
                  <div className="col">
                    <span>Commencement Date</span>
                    <input type="date" name="date" value={date} onChange={handleOnChange} className="p-3 my-2 content__form--input form-control" required />
                  </div>
                  <div className="col">
                    <span>Event Price(₦)</span>
                    <input type="text" name="price" value={price} onChange={handleOnChange} className="p-3 my-2 content__form--input form-control" required />
                  </div>
                </div>
                <div className="py-2">
                  <input type="text" className="p-3 my-2 content__form--input form-control" id="name" name="tag" onChange={handleOnChange} value={tag} required />
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
export default AddEvent;
