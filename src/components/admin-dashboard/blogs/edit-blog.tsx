/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router';
import Tag from './tags';

function EditBlog() {
  const { id } = useParams();
  const inputValues = {
    title: '',
    author: '',
    content: '',
    tagg: [],
  };
  const [inputVal, setInputVals] = useState(inputValues);
  const [values, setValues] = useState('');
  const [image, setImage] = useState('');
  const [tags, setTags] = useState<any>([]);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files;
    if (file) {
      setImage(file[0].name);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputVals({ ...inputVal, [name]: value });
  };

  useEffect(() => {
    axios.get(`posts/${id}`).then((res) => {
      if (res.data.status.toString() === 'success') {
        setInputVals(res.data.data);
      }
    }).catch((err) => err);
  }, [id]);

  const handleSubmit = () => {
    const { title, author, content } = inputVal;
    axios.patch(`posts/${id}`, {
      title, image, author, content, tags,
    }).then((res) => {
      if (res) {
        console.log(res.data);
      }
    }).catch((err) => err);
  };

  const {
    title, content, author, tagg,
  } = inputVal;
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
                    value={title}
                    id="name"
                    onChange={handleOnChange}
                    name="title"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Image</label>
                  <br />
                  <input type="file" className=" p-3 my-2 content__form--input form-control" onChange={handleImage} required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Author</label>
                  <br />
                  <input type="text" className=" p-3 my-2 content__form--input form-control" onChange={handleOnChange} value={author} name="author" required />
                </div>
                <div className="py-2">
                  <label htmlFor="name" className="p-0 fw-bold">Contents</label>
                  <br />
                  <ReactQuill theme="snow" value={content} onChange={setValues} className="my-2" />
                </div>
                <div className="py-2">
                  <Tag sendTags={setTags} tag={tagg} />
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
export default EditBlog;
