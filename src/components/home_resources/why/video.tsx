/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../reuseables/footer';
import Navbar from '../../reuseables/navbar';
import WHY__SCHEMA from './why.json';

interface obj {
    id: number,
    image: string,
    text: string,
    title: string
}

function VideoPage() {
  const why: obj[] = WHY__SCHEMA;
  const params = useParams();
  const paramId: string = params?.id || '';
  return (
    <>

      <Navbar />
      <div className="videos py-5">
        <div className="container">
          <div className="row py-5 justify-content-center text-center">
            {
                why?.filter(({ id }) => (id.toString() === paramId)).map(({ id, title }) => (
                  <div className="videos--title" key={id}>{title}</div>
                ))
            }
            <div className="col-md-10">
              <div className="card border-0">
                <video controls />
              </div>
              <p className="text">
                Consequat eget nisl tellus,
                sed turpis. Nulla et lectus vel mauris.
                Cursus nulla viverra interdum et
                interdum egestas ornare neque.
                Vulputate sapien, sed cursus tortor ante purus ultrices.
                At viverra gravida integer malesuada diam non elit.
                Sed luctus fringilla in mattis quis risus aliquam enim tristique.
                Molestie vestibulum malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default VideoPage;
