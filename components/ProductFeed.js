import { useEffect } from "react";
import React from "react";
import SingleProduct from "./SingleProduct";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductFeed = ({ products }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
      {products?.slice(0, 3).map((product, i) => (
        <SingleProduct data-aos="fade-up" key={i} product={product} />
      ))}
      <img
        className="col-12 w-100 my-3"
        src="https://links.papareact.com/dyz"
        alt="ads"
      />
      {
        <div className="col-md-6 flex-grow-1 col-xl-6">
          {products?.slice(4, 5).map((product) => (
            <SingleProduct
              data-aos="fade-up"
              key={product.id}
              product={product}
            />
          ))}
        </div>
      }
      {products?.slice(3, products.length).map((product) => (
        <SingleProduct data-aos="fade-up" key={product.id} product={product} />
      ))}
      <img
        className="col-12 w-100 mt-3 mb-4"
        src="https://links.papareact.com/dyz"
        alt="ads"
      />
    </div>
  );
};

export default ProductFeed;
