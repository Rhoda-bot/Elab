import React from 'react';

function Partner() {
  return (
    <div className="partner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 card impact__card border-0 p-5">
              <table className="table table-borderless p-4">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Figure</th>
                    <th scope="col">Impact in words</th>
                    <th scope="col">Created On</th>
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
                      <i className="fa-solid fa-pen-to-square m-2 link" />
                      <i className="fa-solid fa-trash link" />
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
export default Partner;
