/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router';

function AddNonProfit() {
  const [values, setValues] = useState('');
  const [image, setImage] = useState('');
  const [pdfFile, setPdfFile] = useState('');
  const [pdfs, setPdfs] = useState<any>();
  const [pdfError, setPdfError] = useState('');
  const [fileimg, setFile] = useState<any>();
  const navigate = useNavigate();

  const inputValues = {
    title: '',
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

    // const fileType = ['application/pdf'];
    // const selectedPdfFile = e?.target.files;
    // if (selectedPdfFile) {
    //   if (selectedPdfFile && fileType.includes(selectedPdfFile[0].type)) {
    // const reader = new FileReader();
    // reader.readAsDataURL(selectedPdfFile[0]);
    // reader.onloadend = (a: any) => {
    //   setPdfFile(a.currentTarget.result);
    //       setPdfError('');
    //     };
    //   } else {
    //     setPdfFile(null);
    //     setPdfError('Please set valid pdf file');
    //   }
    // } else {
    //   console.log('select your file');
    // }
  };
  const handleSubmit = () => {
    const { title, link } = inputVal;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', fileimg, image);
    formData.append('description', values);
    formData.append('pdfFile', pdfs, pdfFile);
    formData.append('link', link);
    axios.post('non-profits', formData).then((res) => {
      if (res) {
        console.log(res.data);
      }
    }).catch((err) => err);
  };

  const { link, title } = inputVal;

  return (
    <div className="addblog h-100">
      <div className="container h-100">
        <div className="row">
          <div className="row">
            <div className="col-md-6 text-lg-start text-center">
              <span className="impact--title m-3"> Add a Blog Post</span>
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
                  <label htmlFor="name" className="p-0 fw-bold">Non-profit title</label>
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
                  <label htmlFor="name" className="p-0 fw-bold">Non-profit brochure</label>
                  <br />
                  <input type="file" className="name p-3 my-2 content__form--input form-control" onChange={handleOnChange} required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Non-profit Image</label>
                  <br />
                  <input type="file" className="name p-3 my-2 content__form--input form-control" onChange={handleOnChange} required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Non-profit website link</label>
                  <br />
                  <input type="text" className="name p-3 my-2 content__form--input form-control" name="link" onChange={handleOnChange} value={link} required />
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
export default AddNonProfit;
