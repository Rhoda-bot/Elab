import axios from 'axios';
import React from 'react';

type urlPaths = {
    urlPath: any,
    id: any,
}
function DeleteItem({ urlPath, id }: urlPaths) {
  const handleDelete = () => {
    axios.delete(`${urlPath}/${id}`).then((res) => console.log(res.data)).catch((err) => console.log(err));
  };
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-start">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Confirm Delete</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            You are about to delete an entry, are you sure you want to do this?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Confirm Delete</button>
          </div>
        </div>
      </div>
    </div>

  );
}
export default DeleteItem;
