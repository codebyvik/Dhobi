import { useState } from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Shop1 from "../../assets/shop1.jpg";
import { ShopDescription, ShopReview, StyledShopDetails } from "./shopDetails.style";
import Review from "../../components/review/review.component";

const ShopDetails = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleReviewModal = () => {
    setShowReviewModal(!showReviewModal);
  };

  return (
    <Container>
      <Review show={showReviewModal} onHide={handleReviewModal} />
      <h1>Shopname</h1>
      <StyledShopDetails>
        <div className="shop-img">
          <img src={Shop1} alt="Shop1" />
        </div>
        <div className="h-100">
          <h3>Shop name</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, nam?</p>
          <Rate className="mb-3" disabled allowHalf defaultValue={3} /> <br />
          <Link className="mb-auto" to="/shopDetails/add-items">
            <Button className="px-5" variant="success" size="sm">
              Add Items
            </Button>
          </Link>
        </div>
      </StyledShopDetails>
      <hr />

      <ShopDescription>
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse excepturi, sit quas sed
          fuga, unde minima quos laboriosam corrupti quae, ipsam quia autem quod maxime! Pariatur
          explicabo ducimus libero impedit dolore nesciunt rerum nam quisquam eum? Temporibus
          accusamus sed iusto blanditiis obcaecati, quo consectetur laudantium modi cupiditate rerum
          error voluptatum facilis incidunt eligendi culpa repudiandae, amet magni perspiciatis unde
          nihil molestiae? Non repudiandae laborum repellendus consectetur amet, vitae voluptas et
          eligendi tenetur neque libero totam ipsa, optio quasi in delectus voluptatibus. Sed
          laudantium sequi, rem excepturi iusto culpa officia? Aspernatur in odio laudantium
          repellat fugit sed eaque nostrum perspiciatis provident.
        </p>
      </ShopDescription>
      <hr />
      <ShopReview>
        <h3>Reviews</h3>
        <div>
          <Button className="px-5" variant="outline-primary" size="sm" onClick={handleReviewModal}>
            ADD Review
          </Button>
          <Button className="px-5" variant="outline-primary" size="sm">
            Edit / Delete
          </Button>
          <hr />
        </div>
        <div className="review">
          <h5>User name</h5>
          <Rate className="" allowHalf defaultValue={3} /> <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, accusamus.</p>
          <hr />
        </div>
        <div className="review">
          <h5>User name</h5>
          <Rate className="" allowHalf defaultValue={3} /> <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat adipisci
            atque autem itaque fugit laboriosam enim dolore nihil asperiores optio sapiente aliquid
            commodi dicta, qui minus doloremque? Perspiciatis distinctio, voluptatibus corrupti
            minus fugit eos aspernatur dignissimos numquam, quos veniam ut libero amet iste sequi
            qui consequatur explicabo a voluptates.
          </p>
        </div>
      </ShopReview>
    </Container>
  );
};

export default ShopDetails;
