import { OrdersWrapper } from "./ordersPage.style";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOrderDetailsAction, updateOrderAction } from "../../redux/order/order.action";

import { Select } from "antd";

const { Option } = Select;

const OrderDetails = ({ customerOrder }) => {
  const param = useParams();

  const dispatch = useDispatch();

  const { order, loading } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchOrderDetailsAction(param.id));
  }, [dispatch, param.id]);

  function handleChange(value) {
    dispatch(updateOrderAction({ id: param.id, status: value }));
  }

  return (
    <OrdersWrapper className="container">
      <h1>Order Details</h1>
      {order && (
        <>
          <section className="order-details">
            <div>
              <b>Shipping Address</b>
              <p>
                {order.shippingInfo.address} {order.shippingInfo.area} {order.shippingInfo.city}
                {order.shippingInfo.pincode}
              </p>
            </div>
            <div>
              <b>Payment Status</b>
              <p>{order.paymentInfo.status}</p>
            </div>
            <div className="summary">
              <b>Order Summary</b>
              <p>order# {order._id}</p>

              <span>
                <b>Grand Total :</b>&#8377;{order.totalPrice}
              </span>
            </div>
          </section>
          <section className="orderDetails-product-card">
            <section className="order-header">
              <div className="order-name-status">
                <h3> {order.orderItems[0].cloth}</h3>
              </div>
            </section>

            <section className="orderDetails-info">
              <p>
                <b>Order placed :</b> {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p>
                <b>Last Updated :</b> {new Date(order.updatedAt).toLocaleDateString()}
                {new Date(order.updatedAt).toLocaleTimeString()}
              </p>
              <p>
                <b>Order Status : </b>
                {order.orderStatus === 0
                  ? "Placed"
                  : order.orderStatus === 1
                  ? "In Process"
                  : "Delivered"}
              </p>

              {user && user.role === "agent" ? (
                <>
                  <p>
                    <b>Update Status :</b>
                  </p>
                  <Select
                    defaultValue={order.orderStatus}
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="0">Processing</Option>
                    <Option value="1">Cleaning</Option>
                    <Option value="2">Delivered</Option>
                  </Select>
                </>
              ) : (
                ""
              )}
            </section>
          </section>
        </>
      )}
    </OrdersWrapper>
  );
};
export default OrderDetails;
