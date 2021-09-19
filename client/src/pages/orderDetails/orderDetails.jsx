import { OrdersWrapper } from "./ordersPage.style";

// import {  Select } from "antd";
// import { useParams } from "react-router-dom";

// const { Option } = Select;

const OrderDetails = ({ customerOrder }) => {
  // const param = useParams();

  return (
    <OrdersWrapper className="container">
      <h1>Order Details</h1>

      <>
        <section className="order-details">
          <div>
            <b>Shipping Address</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, culpa.</p>
          </div>
          <div>
            <b>Payment Status</b>
            <p>status</p>
          </div>
          <div className="summary">
            <b>Order Summary</b>
            <p>order# 123456789</p>

            <span>
              <p>Item(s) SubTotal :</p> &#8377;12045
            </span>
            <span>
              <p>Shipping :</p> &#8377;1245
            </span>
            <span>
              <p>Total :</p>&#8377;1234
            </span>
            <span>
              <b>Grand Total :</b>&#8377;1234
            </span>
          </div>
        </section>
        <section className="orderDetails-product-card">
          <section className="order-header">
            <div className="order-name-status">
              <h3>item name </h3>
            </div>
          </section>

          <section className="orderDetails-info">
            <p>
              <b>Order placed :</b> {new Date().toLocaleDateString()}
            </p>
            <p>
              <b>Last Updated :</b> {new Date().toLocaleDateString()}
              {new Date().toLocaleTimeString()}
            </p>
            <p>
              <b>Order Status : </b>
              status
            </p>

            {/* {user && user.role === "seller" ? (
                  <>
                    <p>
                      <b>Update Status :</b>
                    </p>
                    <Select
                      defaultValue={order.orderStatus}
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      <Option value="Processing">Processing</Option>
                      <Option value="Shipped">Shipped</Option>
                      <Option value="Delivered">Delivered</Option>
                    </Select>
                  </>
                ) : (
                  ""
                )} */}

            <p>
              <b>Update Status :</b>
            </p>
          </section>
        </section>
      </>
    </OrdersWrapper>
  );
};
export default OrderDetails;
