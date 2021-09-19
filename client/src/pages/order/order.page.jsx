import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OrderContainer } from "./order.style";
import { Pagination } from "antd";

const OrderPage = () => {
  return (
    <div className="px-2 py-1 w-100 ">
      <h3>Orders</h3>
      <OrderContainer>
        <section key={1} className="order-card">
          <section className="order-header ">
            <div className="order-name-status ">
              <h3>name</h3>
              <p>status</p>
            </div>
          </section>
          <section className="order-info">
            <p>
              <b>+ 5 items</b>
            </p>

            <p>
              <b>order placed :</b> {new Date().toLocaleDateString()}
            </p>
            <p>
              <b>total amount :</b> 1000/-
            </p>
          </section>
          <Link
            to={{
              pathname: `/admin/dashboard/orders/123`,
              state: { from: "dashboard" },
            }}
            className="more-link"
          >
            <Button>View order details</Button>
          </Link>
        </section>
      </OrderContainer>
      <section className="pagination w-full d-flex justify-content-center mt-5">
        <Pagination size="small" total={10} current={1} pageSize={4} hideOnSinglePage />
      </section>
    </div>
  );
};

export default OrderPage;
