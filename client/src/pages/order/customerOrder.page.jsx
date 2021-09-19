import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OrderContainer } from "./order.style";
import { Pagination } from "antd";

const CustomerOrderPage = () => {
  return (
    <div className="px-2 py-1">
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
            <p>
              <b> delivery address :</b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reprehenderit!
            </p>
            <p>
              <b> Shop Name :</b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reprehenderit!
            </p>
            <p>
              <b> Shop Address :</b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reprehenderit!
            </p>
            <p>
              <b>order id : </b>
              Lorem ipsum dolor sit
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
      <section className="pagination">
        <Pagination size="small" total={10} current={1} pageSize={4} hideOnSinglePage />
      </section>
    </div>
  );
};

export default CustomerOrderPage;
