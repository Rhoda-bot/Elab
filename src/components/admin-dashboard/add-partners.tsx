import React from 'react';

function AddPartners() {
  return (
    <div className="addpartner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 impact__card">
              <form className="form-row">
                <div className="md-3">
                  <span>{'Partner\'s name'}</span>
                  <input type="text" className="form-control form-control-lg" />
                </div>
                <div className="md-3">
                  <span>
                    {' '}
                    {'Parner\'s logo'}
                    {' '}
                  </span>
                  <input type="file" className="form-control form-control-lg" />
                </div>
                <div className="md-3">
                  <button type="button">save Partner</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPartners;
