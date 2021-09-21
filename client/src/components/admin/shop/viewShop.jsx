import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteShopAction, getAllShopsAction } from "../../../redux/shop/shop.action";
import Loader from "../../../utils/Loader";

import { Popconfirm } from "antd";

const ViewShop = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const { shops, loading } = useSelector((state) => state.shop);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [keyword, setKeyword] = useState("");

  function confirm(id) {
    dispatch(deleteShopAction(id));
  }

  useEffect(
    () => {
      dispatch(getAllShopsAction({ keyword, page }));
    }, // eslint-disable-next-line
    [dispatch, page]
  );
  // eslint-disable-next-line
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    dispatch(getAllShopsAction({ keyword }));
  };

  return (
    <div>
      <h3 className="mb-5">View Shop</h3>
      <div>
        {loading ? (
          <Loader size={44} />
        ) : (
          shops &&
          shops.map((shop) => (
            <>
              <div key={shop._id} className="d-flex justify-content-between align-items-center">
                <img width="150" height="100" src={shop.image.url} alt={shop.name} />
                <h6>{shop.name}</h6>
                <div>
                  <Link className="me-3" to={`${match.url}/${shop._id}`}>
                    <Button variant="primary" size="sm">
                      View Shop Info
                    </Button>
                  </Link>

                  <Popconfirm
                    title="Deleting Shop?"
                    onConfirm={() => confirm(shop._id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button variant="outline-danger" size="sm">
                      Delete
                    </Button>
                  </Popconfirm>
                </div>
              </div>
              <hr />
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewShop;
