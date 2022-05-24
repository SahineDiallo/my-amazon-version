import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const success = () => {
    const router = useRouter();
  return (
    <div className="success_container bg-white">
      <div className="d-flex align-items-center">
        <CheckCircleIcon className="text-green" />
        <h3>Thank You, your orders has been confirmed.</h3>
      </div>
      <p>
        Thank you for shopping with us. We will send you a confirmation once
        your item(s) has shipped. If you would like to check the status orders,
        please feel free to press the link down below.
      </p>

      <button onClick={()=> router.push('/orders')} className="amazon__btn">Go to my Orders</button>
    </div>
  );
};

export default success;
