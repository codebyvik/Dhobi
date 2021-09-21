import { useEffect, useState } from "react";
import { Rate } from "antd";
import { Link, useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import { ShopDescription, ShopReview, StyledShopDetails } from "./shopDetails.style";
import Review from "../../components/review/review.component";
import { useDispatch, useSelector } from "react-redux";
import { getSingleShopAction } from "../../redux/shop/shop.action";

const ShopDetails = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.auth);
  const { shop } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getSingleShopAction(param.shopId));
  }, [param.shopId]);

  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleReviewModal = () => {
    setShowReviewModal(!showReviewModal);
  };

  const userReview = shop?.reviews.find((r) => r.user === user?._id);

  return (
    <Container>
      <Review
        show={showReviewModal}
        onHide={handleReviewModal}
        userReview={userReview}
        shopId={shop?._id}
      />
      {shop && (
        <>
          <h1>{shop.name}</h1>

          <StyledShopDetails>
            <div className="shop-img">
              <img src={shop.image.url} alt="Shop1" />
            </div>
            <div className="h-100">
              <h3>{shop.name}</h3>
              <p>{(shop.location.area, shop.location.city, shop.location.pincode)}</p>
              <Rate className="mb-3" disabled allowHalf defaultValue={shop.ratings} /> <br />
              <Link className="mb-auto" to={`/shops/${param.shopId}/addItems`}>
                <Button className="px-5" variant="success" size="sm">
                  Add Items
                </Button>
              </Link>
            </div>
          </StyledShopDetails>
          <hr />
          <ShopDescription>
            <h3>Description</h3>
            <p>{shop.desc}</p>
          </ShopDescription>
          <hr />
          <ShopReview>
            <h3>Reviews</h3>
            <div>
              {userReview ? (
                <Button
                  onClick={handleReviewModal}
                  className="px-5"
                  variant="outline-primary"
                  size="sm"
                >
                  Edit / Delete
                </Button>
              ) : (
                <Button
                  className="px-5"
                  variant="outline-primary"
                  size="sm"
                  onClick={handleReviewModal}
                >
                  ADD Review
                </Button>
              )}

              <hr />
            </div>
            {shop.reviews.map((r) => (
              <div key={r.user} className="review">
                <h5>{r.name}</h5>
                <Rate className="" allowHalf defaultValue={3} /> <br />
                <p>{r.comment}</p>
                <hr />
              </div>
            ))}
          </ShopReview>
        </>
      )}
    </Container>
  );
};

export default ShopDetails;
