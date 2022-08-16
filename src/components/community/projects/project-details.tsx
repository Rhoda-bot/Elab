/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../../reuseables/footer';
import Hero from '../../reuseables/hero';
import Navbar from '../../reuseables/navbar';

function ProjectDetails() {
  return (
    <>
      <Navbar />
      <Hero title="Epe Impact Project" text="In partnership with Threefold Impact to equip the secondary schools students in Epe with 21st century skills and an opportunity to solve problems in their community." bgImage="/images/program/pro-hero.png" gradient="rgba(6, 0, 22, 0.5)" />
      <div className="projectdetails py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-10 projectdetails__description">
              <div className="projectdetails__description--subtitle">Project Report</div>
              <p className="projectdetails__description--text">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non dui bibendum placerat. Euismod venenatis quam laoreet sit. Sit aliquam ut lobortis posuere hendrerit sit rutrum porttitor. Arcu malesuada ipsum ipsum facilisi scelerisque arcu pellentesque imperdiet. Nullam leo nibh sed in scelerisque erat. Pellentesque egestas netus fusce amet consectetur tellus mauris. Fames faucibus velit nunc pellentesque ut gravida nulla turpis. Gravida cursus proin porttitor aliquam venenatis mauris nunc, nec aliquam. Fames vulputate lectus senectus ut pretium enim vitae integer.
                // eslint-disable-next-line max-len
                Nec, sit vitae non massa maecenas augue quis maecenas. Etiam ultrices diam nulla maecenas. Adipiscing dictum auctor et ut magna pharetra, quis enim sed. Porta eu venenatis pulvinar id. Ipsum tincidunt viverra fusce urna integer pharetra. Iaculis maecenas facilisi a dictum. Sagittis arcu vitae eget morbi eget.
                Id luctus elementum euismtod ultrices in sed enim aliquam et. Dolor leo massa felis, rhoncus. Aliquet quis diam erat posuere venenatis ut lacinia. Tincidunt lacus, suspendisse dignissim eget nunc, consequat venenatis. Id elit quam nunc ac pharetra quis arcu. Ornare maecenas tempus, tempus adipiscing sed ultrices leo pellentesque.
              </p>
              <div className="projectdetails__description--subtitle">Project in Pictures</div>
              <p className="projectdetails__description--text">
                Achievement in figures stays here
                Nisi, urna, urna vel quisque. Sem porttitor viverra at iaculis aliquet adipiscing eu, eget et. Hendrerit ultricies et malesuada egestas sagittis neque. Orci suspendisse bibendum sapien, volutpat scelerisque laoreet. Id ac elit id aliquam massa, risus sit sit eros. Mauris eleifend vestibulum rutrum interdum tempus magnis amet dictum eros. Nunc quis egestas enim orci, pellentesque vel vitae molestie. In sit nunc, aliquet mauris sem aliquam felis. At consequat feugiat velit varius ut massa non lectus.
                Aliquet ultrices lacus, consectetur massa ipsum id purus odio. Quam et placerat consequat, ultrices non, tristique massa. Pellentesque morbi lacinia quisque tristique non. Egestas a enim neque congue sem nibh volutpat ultrices. Dolor at interdum amet ac magna ultrices aenean.
              </p>
              <button type="button" className="projectdetails__description--btn">Download report</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProjectDetails;
