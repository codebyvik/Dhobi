import { Modal, Button, Form } from "react-bootstrap";
import { Rate } from "antd";

const Review = ({ show, onHide }) => {
  const review = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at enim sapiente dolores
          qui porro exercitationem asperiores deserunt odit a debitis, suscipit reiciendis earum
          ipsum repellat quibusdam possimus. Id veniam maxime necessitatibus eaque. Cumque amet
          cupiditate delectus facilis sapiente, enim perspiciatis non nam commodi aliquam debitis
          quisquam pariatur, aut atque?`;
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
        <h3>User Name</h3>
        <Rate className="mb-3" allowHalf defaultValue={3} /> <br />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Review</Form.Label>
            <Form.Control as="textarea" rows={10} value={review} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button className="px-4" variant="outline-danger">
          Delete{" "}
        </Button>
        <Button className="px-4" variant="success">
          Save{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Review;
