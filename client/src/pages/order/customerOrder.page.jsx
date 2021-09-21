import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OrderContainer } from "./order.style";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMyOrdersAction } from "../../redux/order/order.action";

const CustomerOrderPage = () => {
  const dispatch = useDispatch();

  const { orders, loading, totalOrders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchMyOrdersAction());
  }, [dispatch]);

  return (
    <Container className="px-2 py-1">
      <h3>Orders</h3>
      {orders &&
        orders.map((o) => (
          <OrderContainer key={o._id}>
            <section className="order-card">
              <section className="order-header ">
                <div className="order-name-status ">
                  <h3>order id #{o._id}</h3>
                  <p>
                    {o.orderStatus === 0
                      ? "Placed"
                      : o.orderStatus === 1
                      ? "In Process"
                      : "Delivered"}
                  </p>
                </div>
              </section>
              <section className="order-info">
                <p>
                  <b>order placed :</b> {new Date(o.createdAt).toLocaleDateString()}
                </p>
                <p>
                  <b>total amount :</b> {o.totalPrice}
                </p>
              </section>
              <Link
                to={{
                  pathname: `/orders/${o._id}`,
                }}
                className="more-link"
              >
                <Button>View order details</Button>
              </Link>
            </section>
          </OrderContainer>
        ))}
    </Container>
  );
};

export default CustomerOrderPage;
