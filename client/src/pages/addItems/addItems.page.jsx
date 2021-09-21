import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Select, Input } from "antd";
import { AddItemsTable } from "./addItems.style";
import { getSingleShopAction } from "../../redux/shop/shop.action";
import { saveItemsInfo } from "../../redux/order/order.action";

const { Option } = Select;

const AddItems = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const history = useHistory();
  const { shop } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getSingleShopAction(param.shopId));
  }, [param.shopId]);

  const [OrderItems, setOrderItems] = useState([
    {
      cloth: "",
      service_name: "",
      price: 0,
      qty: 1,
    },
  ]);

  console.log("OrderItems", OrderItems);

  const clothes = ["pant", "shirt", "saree", "kurta"];

  // calculate price
  let totalPrice = [];
  let price = 0;
  const calculateTotal = () => {
    for (let i = 0; i < OrderItems.length; i++) {
      price = price + OrderItems[i].price;
      totalPrice.push(price * OrderItems[i].qty);
      price = 0;
    }
  };

  calculateTotal();

  const subTotal = totalPrice.reduce((prev, next) => prev + next);

  const addItemField = () => {
    setOrderItems([
      ...OrderItems,
      {
        cloth: "",
        service_name: "",
        price: 0,
        qty: 1,
      },
    ]);
  };

  const removeOrderItemField = (index) => {
    let newData = OrderItems;
    newData.splice(index, 1);
    setOrderItems([...newData]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(OrderItems);
  };

  const handleCheckout = () => {
    const data = {
      items: OrderItems,
      totalPrice: subTotal,
      shop: param.shopId,
    };
    dispatch(saveItemsInfo(data));
    history.push("/checkout");
  };

  return (
    <Container>
      <h3>Add Items</h3>

      <AddItemsTable>
        <div className="item-header">
          <p>Cloth</p>
          <p>Service name</p>

          <p>QTY</p>
        </div>
        <div className="items-container">
          {OrderItems.map((element, index) => (
            <div key={index} className="items ">
              <Select
                defaultValue="shirt"
                name="cloth"
                onChange={(e) => {
                  console.log(e);
                  const newData = OrderItems;
                  newData[index].cloth = e;
                  setOrderItems([...newData]);
                }}
              >
                {clothes.map((c) => (
                  <Option key={c} value={c}>
                    {c}
                  </Option>
                ))}
              </Select>

              <Select
                defaultValue="iron"
                name="services"
                className="select-multiple"
                placeholder="Please select"
                onChange={(e) => {
                  const newData = OrderItems;
                  let data = shop.services.find((i) => i.service_name === e);
                  newData[index].service_name = e;
                  newData[index].price = data.price;
                  setOrderItems([...newData]);
                }}
              >
                {shop &&
                  shop.services.map((s, i) => (
                    <Option key={i} value={s.service_name}>
                      {s.service_name} - {s.price}
                    </Option>
                  ))}
              </Select>

              <Input
                type="number"
                onChange={(e) => setOrderItems((OrderItems[index].qty = Number(e.target.value)))}
                size="small"
                className="qty"
                value={OrderItems[index].qty}
              />

              {index ? (
                <Button
                  variant="outline-danger"
                  size="sm"
                  className=" remove"
                  onClick={() => removeOrderItemField(index)}
                >
                  Remove
                </Button>
              ) : null}
            </div>
          ))}
          <Button variant="outline-success" size="sm" onClick={() => addItemField()}>
            Add Field
          </Button>
        </div>
      </AddItemsTable>
      <h5>Grand Total : {subTotal}</h5>

      <Button onClick={() => handleCheckout()} variant="success">
        Checkout{" "}
      </Button>
    </Container>
  );
};

export default AddItems;
