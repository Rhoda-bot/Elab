import React from 'react';

function Impact() {
  return (
    <div className="impact">
      <div className="container">
        <div className="row">
          <div className="impact--title">
            Impact
          </div>
          <button type="button" className="impact--btn col-xs-3 col-sm-2">Add on Impact</button>
          <div className=" col-sm-12">
            <div className="card impact__card border-0 p-5">
              <table className="table table-borderless p-4">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Figure</th>
                    <th scope="col">Impact in words</th>
                    <th scope="col">Created On</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
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
