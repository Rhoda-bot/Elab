import React from 'react';

function WorkSpaces() {
  return (
    <div className="workspaces py-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-6 workspaces__description pt-5">
            <div className="workspaces__description--title">
              The perfect
              <br />
              Workspace for you

            </div>
            <p className="workspaces__description--text mt-4">
              Whether you are an individual or a team,
              we have an affordable and flexible space just for you.
            </p>
            <button type="button" className="workspaces__description--btn mt-4">See available option</button>
          </div>
          <div className="col-md-6">
            <img src="/images/cowork/workspaceman.png" alt="" className="workspaces__description--img" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkSpaces;
