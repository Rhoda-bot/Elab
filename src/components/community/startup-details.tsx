import React from 'react';
import { Link, useParams } from 'react-router-dom';
import STARTUP__SCHEMA from './startup.json';

// OBJ represents each object from the Startup.json file //
interface obj {
    id: number,
    name: string,
    description: string,
    about: string,
    aboutText: string,
    goal: string,
    goalText: string,
    investment: string,
    investmentText: string,
    image: string
  }

function StartupDetails() {
  const startup: obj[] = STARTUP__SCHEMA;
  const param = useParams();
  const paramName: string = param?.name || '';

  return (
    <div className="startupdetails py-4">
      <div className="container">
        {
            startup?.filter(({ name }) => (name.toString() === paramName)).map(({
              id, name, image, about, aboutText, goal,
              goalText, investment, investmentText,
            }) => (
              <div className="row" key={id}>
                <div className="col-md-6 startupdetails__description" key={id}>
                  <div className="row mb-5">
                    <div className="col-md-4">
                      <img src={image} alt="" className="startup__card--img img-fluid" />
                    </div>
                    <div className="col-md-8 ">
                      <div className="startupdetails__description--title">{name}</div>
                      <p>An edtech product</p>
                    </div>
                  </div>
                  <div className="startupdetails__description--subtitle">
                    {about}
                  </div>
                  <p className='className="startupdetails__description--text'>{aboutText}</p>
                  <div className="startupdetails__description--subtitle">{goal}</div>
                  <p className='className="startupdetails__description--text'>{goalText}</p>
                  <div className="startupdetails__description--subtitle">{investment}</div>
                  <p className='className="startupdetails__description--text'>{investmentText}</p>
                </div>
                <div className="col-md-4 p-4">
                  <div className="card border-0 startupdetails__card p-4 shadow-sm">
                    <h4 className="startupdetails__title">{name}</h4>
                    <div className="row">
                      <div className="col-md-6 payment__card--items"> Founded:</div>
                      <div className="col-md-6">2020</div>
                      <div className="col-md-6 payment__card--items">Team Size:</div>
                      <div className="col-md-6">4</div>
                      <div className="col-md-6 payment__card--items">Location:</div>
                      <div className="col-md-6">Ogbomoso</div>
                    </div>
                  </div>
                </div>
              </div>
            ))

        }
        <button type="button">
          <Link to="/community/startups/details/brochure" className="link">Download Brochure</Link>
        </button>
      </div>
    </div>
  );
}
export default StartupDetails;
