import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Select, Input } from "antd";
import { AddItemsTable } from "./addItems.style";

const { Option } = Select;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

const AddItems = () => {
  const [formValues, setFormValues] = useState([
    {
      cloth: "",
      services: [],
      qty: "",
    },
  ]);

  console.log("formValues", formValues);

  const handleChange = (i, e) => {
    console.log(i, e);
    // formValues[i][e.target.name] = e.target.value;
    // this.setState({ formValues });
  };

  const addFormFields = () => {
    setFormValues([...formValues, { cloth: "", services: [], price: "", qty: "" }]);
  };

  const removeFormFields = (index) => {
    let newData = formValues;
    newData.splice(index, 1);
    setFormValues([...newData]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
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
          {formValues.map((element, index) => (
            <div key={index} className="items ">
              <Select
                defaultValue="shirt"
                name="cloth"
                onChange={(e) => {
                  const newData = formValues;
                  newData[index].cloth = e;
                  setFormValues([...newData]);
                }}
              >
                <Option value="shirt">Shirt</Option>
                <Option value="pant">Pant</Option>
              </Select>

              <Select
                defaultValue="iron"
                mode="multiple"
                name="services"
                className="select-multiple"
                placeholder="Please select"
                onChange={(e) => {
                  console.log(e);
                  const newData = formValues;
                  newData[index].services = e;
                  setFormValues([...newData]);
                }}
              >
                <Option value="iron">Iron - Rs 10</Option>
                <Option value="wash">Wash - Rs 20</Option>
              </Select>

              <Input type="number" onChange={(e) => console.log(e)} size="small" className="qty" />

              {index ? (
                <Button
                  variant="outline-danger"
                  size="sm"
                  className=" remove"
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </Button>
              ) : null}
            </div>
          ))}
          <Button variant="outline-success" size="sm" onClick={() => addFormFields()}>
            Add Field
          </Button>
        </div>
      </AddItemsTable>
      <h5>Grand Total : 1000</h5>
      <Link to="/checkout">
        <Button variant="success">Checkout </Button>
      </Link>
    </Container>
  );
};

export default AddItems;
