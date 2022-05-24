import React from "react";
import Currency from "react-currency-formatter";
import moment from "moment";

const Orders = ({
  order,
  timestamp,
  images,
  amount,
  amountShipping,
  items,
}) => {
  return (
    <div className="position-relative border rounded card">
      <div className="card-header d-flex align-items-center gap-3">
        <div>
          <p className="fw-bold mb-1">ORDER PLACED</p>
          <p className="mb-1">
            {moment.unix(timestamp).format("DD, MMM, YYYY")}
          </p>
        </div>
        <div>
          <p className="fw-bold mb-1">TOTAL</p>
          <p className="mb-1">
            <Currency quantity={amount} currency="GBP" /> -Next Day Delivery{""}
            -
            <Currency
              quantity={amountShipping}
              currency="GBP"
              className="ml-1"
            />
          </p>
        </div>
        <div className="flex-grow-1 ">
          <p className="text-end text-primary mb-1">{items.length} items</p>
          <small className="position-absolute orders">ORDER # {order}</small>
        </div>
      </div>
      <div className="card-body bg-white p-4">
        <div className="overflow-auto d-flex align-items-center">
          {images.map((image) => (
            <img
              src={image}
              className="object-fit-contain order_images"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
