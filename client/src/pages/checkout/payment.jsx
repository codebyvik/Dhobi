import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {
  useStripe,
  useElements,
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

import axios from "axios";
import { useHistory } from "react-router";

import { message } from "antd";
import { createOrderAction } from "../../redux/order/order.action";

const options = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",

      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const history = useHistory();
  const { items, shippingInfo, totalPrice, shop } = useSelector((state) => state.order);

  const OrderData = {
    orderItems: items,
    shippingInfo,
    shop,
  };

  const total = Math.round(totalPrice);

  const paymentData = {
    amount: Math.round(total * 100),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/v1/payment/process", paymentData);

      const payload = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });
      if (payload.error) {
        message.error(`${payload.error.message}`);
      } else {
        OrderData.paymentInfo = {
          id: payload.paymentIntent.id,
          status: payload.paymentIntent.status,
        };
        OrderData.totalPrice = total;
        dispatch(createOrderAction(OrderData));
        history.push({
          pathname: "/order/success",
          state: {
            from: "payment",
          },
        });
      }
    } catch (error) {
      message.error(`${error.message}`);
    }
  };

  return (
    <div className="container">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number</label>
          <CardNumberElement className="input-text" options={options} />
        </div>
        <div>
          <label>Card Expiry</label>
          <CardExpiryElement className="input-text" options={options} />
        </div>
        <div>
          <label>CVC</label>
          <CardCvcElement className="input-text" options={options} />
        </div>
        <section className="pay-btn">
          <Button id="pay_btn" type="submit">
            Pay
          </Button>
        </section>
      </form>
    </div>
  );
};

export default Payment;
