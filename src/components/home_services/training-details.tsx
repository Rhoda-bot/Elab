import React from 'react';

function TrainingDetails() {
  return (
    <div className="trainingdetails py-5">
      <div className="container">
        <div className="row text-center align-items-center justify-content-center">
          <div className="trainingdetails--title">About the Training</div>
          <p className="trainingdetails--text">
            Pulvinar proin enim cursus mauris ullamcorper interdum arcu.
            Egestas pretium nullam urna,
            orci vitae. Tristique sit nulla et, placerat. Lorem aliquet
            vitae id at. Bibendum nunc purus
            ipsum etiam diam enim sapien nulla. Aliquam, auctor enim massa,
            donec porttitor sed. Proin nisl dictum dapibus
            condimentum volutpat ut donec aliquet. Proin.
          </p>
        </div>
        <div className="row text-center align-items-center justify-content-center">
          <div className="trainingdetails--title">Instructors</div>
          <div className="col-md-3 p-3">
            <img src="/images/services/instructor1.png " className="img-fluid p-4" alt="" />
            <div className="trainingdetails--subtitle">Name of Instructor</div>
            <p className="trainingdetails--text">Designation</p>
          </div>
          <div className="col-md-3 p-3">
            <img src="/images/services/instructor2.png " className="img-fluid p-4" alt="" />
            <div className="trainingdetails--subtitle">Name of Instructor</div>
            <p className="trainingdetails--text">Designation</p>
          </div>
        </div>

      </div>
    </div>
  );
}
export default TrainingDetails;
