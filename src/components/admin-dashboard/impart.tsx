import React from 'react';

function Impact() {
  return (
    <div className="impact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-lg-start text-center">
            <span className="impact--title"> Impact</span>
          </div>
          <div className="col-md-6 text-lg-end text-center">
            <button type="button" className="impact--btn">Add on Impact</button>
          </div>
        </div>
        <div className="row">
          <div className=" col-sm-12">
            <div className="card impact__card border-0 p-5">
              <table className="table table-borderless p-4 text-center justify-content-center">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Figure</th>
                    <th scope="col">Impact in words</th>
                    <th scope="col">Created On</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody className="align-items-center text-center">
                  <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    {/* <td>@twitter</td> */}
                    <td>
                      <i className="fa-solid fa-pen-to-square" />
                      <i className="fa-solid fa-trash" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Impact;
