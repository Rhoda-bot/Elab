import React from 'react';

function Ourstory() {
  return (
    <div className="ourstory py-5">
      <div className="container">
        <div className="row text-start align-items-center">
          <div className="col-md-6 ourstory__description">
            <div className="ourstory__description--title mb-3">Our Story</div>
            <div className="ourstory__description--subtitle mb-5">
              Building resilient innovation
              ecosystems is underserved university communities
            </div>
            <div className="col-md-6">
              <img src="/images/grouped-img.png" alt="" className="ourstory__description--img img-fluid p-6 d-block d-md-none" />
            </div>
            <p className="ourstory__description--text">
              Ennovate Lab is an innovation hub that seeks to promote
              innovation and enterprise thinking success in underserved
              Universities beginning from Ogbomoso.
            </p>
            <p className="ourstory__description--text">
              We support grassroots talents working
              on tech-enabled businesses with advisory services,
              mentorship, funding, tech support and networking.
            </p>
            <button type="button" className="ourstory__description--btn">Learn More</button>
          </div>
          <div className="col-md-6">
            <img src="/images/grouped-img.png" alt="" className="ourstory__description--img w-40 img-fluid p-6 d-none d-md-block" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ourstory;
