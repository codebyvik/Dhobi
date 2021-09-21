import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./payment";

import axios from "axios";
import { useEffect, useState } from "react";

const StripeContainer = ({ next, prev }) => {
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    axios.get("/api/v1/payment").then((data) => setStripeApiKey(data.data.stripeApiKey));
  }, []);

  const stripePromise = loadStripe(stripeApiKey);

  return (
    <>
      {stripeApiKey && (
        <Elements stripe={stripePromise}>
          <Payment next={next} prev={prev} />
        </Elements>
      )}
    </>
  );
};

export default StripeContainer;
