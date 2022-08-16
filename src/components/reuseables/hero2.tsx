import React from 'react';

interface Props {
    title?: string,
    text?: string,
    button?: string,
    bgImage?: string,
    gradient?: string,
  }
//   rgba(0, 0, 0, 0.6),
//   rgba(0, 0, 0, 0.6)
function Hero2({
  title, text, button, bgImage, gradient,
}: Props) {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(${gradient},${gradient}),url(${bgImage})`,
        }}
      >
        <div className="container">
          <div className="row text-start">
            <div className="hero--title">
              { title && title }
            </div>
            <div className="col-md-6">
              <p className="hero--text">
                { text && text }
              </p>
              { button && <button type="button" className="hero--btn col-sm-3 mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{button}</button>}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade border-0" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog bg-white">
          <div className="modal-content p-4">
            <div className="modal-header border-0 p-4">
              <h5 className="modal-title benefits__modal--title" id="exampleModalLabel">Join Trybe by eLab</h5>
              <button type="button" className="btn-close bg-dark rounded" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p className="modal-text benefits__modal--text">
                Supply the details below to join the community
              </p>
              <form>
                <div className="mb-3">
                  <span>Full Name: </span>
                  <input type="text" id="fullname" className="form-control" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                  <span>Email:</span>
                  <input type="text" className="form-control" placeholder="Email Address" />
                </div>
                <div className="mb-2">
                  <button type="button" className="benefits--btn">Join Tyrbe Community</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Hero2.defaultProps = {
  title: '',
  text: '',
  button: '',
  bgImage: '',
  gradient: '',
};
export default Hero2;
