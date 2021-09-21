import { Modal, Button, Form } from "react-bootstrap";
import { Rate, message } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReviewAction, deleteReviewAction } from "../../redux/shop/shop.action";
const Review = ({ show, onHide, userReview, shopId }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0 || userReview?.rating);
  const [comment, setComment] = useState("" || userReview?.comment);

  const handleOk = () => {
    if (!rating || !comment) {
      return message.warning("fill all fields");
    }
    dispatch(addReviewAction({ rating, comment, shopId }));
  };

  const handleDelete = (shopId, id) => {
    dispatch(deleteReviewAction({ shopId: shopId, id: id }));
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Review</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Rate onChange={(e) => setRating(e)} className="mb-3" allowHalf value={rating} /> <br />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Review</Form.Label>
            <Form.Control
              onChange={(e) => setComment(e.target.value)}
              as="textarea"
              rows={10}
              value={comment}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          onClick={() => handleDelete(shopId, userReview._id)}
          className="px-4"
          variant="outline-danger"
        >
          Delete{" "}
        </Button>
        <Button onClick={() => handleOk()} className="px-4" variant="success">
          Save{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Review;
