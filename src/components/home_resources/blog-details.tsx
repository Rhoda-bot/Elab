import React from 'react';

function BlogDetails() {
  return (
    <div className="blogdetails py-5 mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 blogdetails__description p-3">
            <div className="card blogdetails__card border-0 p-5">
              <div className="row">
                <div className="col-md-2">
                  <span className="p-3">back</span>
                </div>
                <div className="col-md-8">
                  <button type="button" className="blogdetails__description--btn">Community Design</button>
                  <div className="blogdetails--title ml-3">Blog Title stays here and it can take the entire length if need be. </div>
                  <div className="d-flex">
                    <b className="p-3 blogdetails--span">Community Design</b>
                    <span className="p-3">Community Design</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="row py-5">
            <div className="blogdetails--subtitle">Appropriate Header</div>
            <p className="blogdetails--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam non dui bibendum placerat. Euismod venenatis quam
              laoreet sit. Sit aliquam ut lobortis posuere hendrerit sit rutrum porttitor.
              Arcu malesuada ipsum ipsum facilisi scelerisque arcu pellentesque imperdiet.
              Nullam leo nibh sed in scelerisque erat.
              Pellentesque egestas netus fusce amet consectetur tellus mauris.
              Fames faucibus velit nunc pellentesque ut gravida nulla turpis.
              Gravida cursus proin porttitor aliquam venenatis mauris nunc,
              nec aliquam. Fames vulputate lectus senectus ut pretium enim vitae integer.
              Nec, sit vitae non massa maecenas augue quis maecenas. Etiam ultrices diam nul
              la maecenas. Adipiscing dictum auctor et ut magna pharetra, quis enim sed.
              Porta eu venenatis pulvinar id. Ipsum tincidunt viverra fusce urna integer pharetra.
              Iaculis maecenas facilisi a dictum. Sagittis arcu vitae eget morbi eget.
              Id luctus elementum euismtod ultrices in sed enim aliquam et. Dolor leo massa felis,
              rhoncus. Aliquet quis diam erat posuere venenatis ut lacinia. Tincidunt lacus,
              suspendisse dignissim eget nunc, consequat venenatis.
              Id elit quam nunc ac pharetra quis arcu.
              Ornare maecenas tempus, tempus adipiscing sed ultrices leo pellentesque.
            </p>

            Appropriate Header
            <div className="blogdetails--subtitle">
              Appropriate Header
            </div>
            <p className="blogdetails--text">
              Nisi, urna, urna vel quisque.
              Sem porttitor viverra at iaculis aliquet adipiscing eu, eget et.
              Hendrerit ultricies et malesuada egestas sagittis neque.

              Orci suspendisse bibendum sapien,
              volutpat scelerisque laoreet. Id ac elit id aliquam massa, risus sit sit eros.
              Mauris eleifend vestibulum rutrum interdum tempus magnis amet dictum eros.
              Nunc quis egestas enim orci, pellentesque vel vitae molestie. In sit nunc,
              aliquet mauris sem aliquam felis.
              At consequat feugiat velit varius ut massa non lectus.
              Aliquet ultrices lacus, consectetur massa ipsum id purus odio.
              Quam et placerat consequat, ultrices non, tristique massa.
              Pellentesque morbi lacinia quisque tristique non.
              Egestas a enim neque congue sem nibh volutpat ultrices.
              Dolor at interdum amet ac magna ultrices aenean.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
export default BlogDetails;
