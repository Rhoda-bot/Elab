import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DETAILS__SCHEMA from './packages.json';

 interface details {
    id: string,
    image: string,
    subtitle: string,
    amt: number,
    price: number,
    text: string,
 }
function PackageDetails() {
  const param = useParams();
  const paramId: string = param?.id || '';
  const packDetails: details[] = DETAILS__SCHEMA;

  return (
    <div className="packagedetails ">
      <div className="container">
        {
            packDetails?.filter(({
              id,
            }) => (id === paramId)).map((item) => (
              <div className="row g-0">
                <div className="col-md-6" key={item.id}>
                  <div className="card border-0">
                    <img src={item.image} alt="" className="card-img-top img-fluid p-5" />
                    <div className="card-body p-5">
                      <div className="packagedetails--subtitle">Description of the space</div>
                      <p className="text-start">
                        Et eu ipsum, leo fringilla nunc.
                        Congue lectus mauris eu enim.
                        Ut diam, nec nec quam id suspendisse dapibus eget porta.
                        Ut sed porta interdum vitae sit arcu scelerisque.
                        Mauris, amet, elit enim fermentum, augue amet.
                        Erat imperdiet pulvinar augue volutpat, tincidunt donec.
                        Vel sit nibh tristique et, donec. T
                        ellus pharetra eget dui egestas pellentesque faucibus.
                        Ligula dolor, pretium tortor elementum non.
                        Lorem sit vel lorem pulvinar at facilisi tortor.
                        Ipsum non tincidunt ornare tortor porta pulvinar morbi fermentum arcu.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-5">
                  <div className="packagedetails--title">{item.subtitle}</div>
                  <div className="row">
                    <div className="col-md-6 text-start">
                      <span className="packagedetails--span">
                        NGN
                        {' '}
                        {item.price}
                      </span>
                    </div>
                    <div className="col-md-5">
                      <span className="packagedetails--amount">
                        NGN
                        {' '}
                        {item.amt}
                      </span>
                    </div>
                  </div>
                  <button type="button" className="packagedetails--btn">
                    <Link to={`/programs/packages-details/${param.id}/payment`} className="link"> Make Payment</Link>
                  </button>
                </div>

              </div>
            ))
          }
        <div className="row">
          <div className="col-md-6 text-start" />
        </div>
      </div>
    </div>
  );
}
export default PackageDetails;
