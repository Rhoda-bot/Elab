/* eslint-disable import/no-unresolved */
import React from 'react';
// eslint-disable-next-line import/extensions
import Cards from './card';

function Trainings() {
  return (
    <div className="training">
      <div className="container">
        <div className="row">
          <div className="training--title text-center">Training Opportunities</div>
          <p className="training--text text-center">
            The beautiful thing about learning is that nobody can take it away from you. And
            <br />
            thats why we cant stop delivering exceptional training for all our stakeholders...
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-white">
              <Cards title="Header text for training title stays here" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trainings;
