import React from 'react';

function Enterpreneurs() {
  return (
    <div className="enterpreneur">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-4">
            <p className="enterpreneur--text p-5">
              Become a part of an exclusive community for entrepreneurs and tech-enthusiasts.
            </p>
            <button type="button" className="ml-4 enterpreneur--btn">Be a Member, Today!</button>
          </div>
          <div className="col-md-6">
            <img src="/images/program/bg.png" className=" enterpreneur--img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Enterpreneurs;
