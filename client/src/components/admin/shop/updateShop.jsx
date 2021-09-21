import { StyledAddShopForm } from "./shop.component.style";
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../utils/Loader";
import { getSingleShopAction, updateShopAction } from "../../../redux/shop/shop.action";

const UpdateShop = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { shop, loading, updating } = useSelector((state) => state.shop);

  const [shopDetails, setShopDetails] = useState({
    name: "",
    area: "",
    city: "",
    country: "India",
    pincode: "",
    desc: "",
    phoneNo: "",
    image: null,
    services: [
      {
        service_name: "Iron",
        price: "",
      },
      {
        service_name: "Stain Removal",
        price: "",
      },
      {
        service_name: "Regular Wash",
        price: "",
      },
      {
        service_name: "HandWash",
        price: "",
      },
      {
        service_name: "Advanced Machine Wash",
        price: "",
      },
    ],
  });

  useEffect(() => {
    dispatch(getSingleShopAction(param.id));
  }, [dispatch, param.id]);

  useEffect(() => {
    if (shop) {
      setShopDetails({
        name: shop.name,
        area: shop.location.area,
        city: shop.location.city,
        country: shop.location.country,
        pincode: shop.location.pincode,
        desc: shop.desc,
        phoneNo: shop.phoneNo,
        services: [
          {
            service_name: shop.services[0].service_name,
            price: shop.services[0].price,
          },
          {
            service_name: shop.services[1].service_name,
            price: shop.services[1].price,
          },
          {
            service_name: shop.services[2].service_name,
            price: shop.services[2].price,
          },
          {
            service_name: shop.services[3].service_name,
            price: shop.services[3].price,
          },
          {
            service_name: shop.services[4].service_name,
            price: shop.services[4].price,
          },
        ],
      });
    }
    return;
  }, [shop]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onloadend = () => {
        setShopDetails({ ...shopDetails, image: reader.result });
      };
    }
    return;
  };

  const { name, phoneNo, area, city, pincode, country, desc, services, image } = shopDetails;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopDetails({ ...shopDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ShopData = {
      id: shop._id,
      name,
      phoneNo,
      desc,
      location: {
        area,
        city,
        pincode,
        country,
      },
      services,
      image,
    };
    dispatch(updateShopAction(ShopData));
  };

  return (
    <Container>
      <h1 className="text-center">Update Shop</h1>
      {loading ? (
        <Loader size={44} type="big" />
      ) : (
        <StyledAddShopForm onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Shop Name</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              name="name"
              type="text"
              value={name}
              placeholder="Enter Shop Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone no</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              name="phoneNo"
              type="text"
              value={phoneNo}
              placeholder="Enter phone no"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              name="area"
              type="text"
              value={area}
              placeholder="Enter Area"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              name="city"
              type="text"
              value={city}
              placeholder="Enter City"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              name="pincode"
              type="text"
              value={pincode}
              placeholder="Enter Pincode"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleInputChange}
              name="desc"
              value={desc}
              placeholder="Enter Description"
              required
            />
          </Form.Group>

          {services.map((service, idx) => (
            <Form.Group key={idx} className="mb-3" controlId="formBasicEmail">
              <Form.Label>{service.service_name}</Form.Label>
              <Form.Control
                type="Number"
                name={service.service_name}
                value={service.price}
                placeholder="Enter Price"
                onChange={(e) => {
                  const { name, value } = e.target;

                  const newServices = services;
                  newServices[idx].price = value;

                  setShopDetails({ ...shopDetails, services: [...newServices] });
                }}
                required
              />
            </Form.Group>
          ))}

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select Image</Form.Label>
            <Form.Control onChange={handleFileChange} type="file" />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button className="d-flex  align-items-center" variant="primary " type="submit">
              <span className="me-2"> Update Shop </span>
              {updating && <Loader size={16} type="small" />}
            </Button>
          </div>
        </StyledAddShopForm>
      )}
    </Container>
  );
};

export default UpdateShop;
