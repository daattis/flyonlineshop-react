import React from 'react';

function RenderProducts (data) {
    return <div className="container">
              <div id="products-row" className="row">
                <div className="pricing-column col-lg-4 col-md-6 mb-4">
                  <div className="card-deck mb-3 text-center">
                   <div className="card mb-4 shadow-sm">
                      <a href="#!">
                      <img
                      className="card-img-top product-image"
                      src={data.image}
                      alt="Hieno perho"
                      />
                      </a>
                      <div className="card-body">
                          <h4 className="card-title"><a href="#!">{data.title}</a></h4>
                          <h5 className="product-price">{data.price}</h5>
                          <p className="card-text">
                          {data.description}
                          </p>
                          <button
                          type="button"
                          className="addtocart btn btn-lg btn-block btn-outline-primary">
                          Add to cart
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    }

export default RenderProducts;