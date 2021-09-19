import { Button } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
const ViewShop = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h3 className="mb-5">View Shop</h3>
      <div>
        <div className="d-flex justify-content-between">
          <img className="w-5" src="" alt="Shop image" />
          <h6>Agent Name</h6>
          <div>
            <Link className="me-3" to={`${match.url}/${123}`}>
              <Button variant="primary" size="sm">
                View Shop Info
              </Button>
            </Link>
            <Button variant="outline-danger" size="sm">
              Delete
            </Button>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <img className="w-5" src="" alt="Shop image" />
          <h6>Agent Name</h6>
          <div>
            <Link className="me-3" to={`${match.url}/${123}`}>
              <Button variant="primary" size="sm">
                View Shop Info
              </Button>
            </Link>
            <Button variant="outline-danger" size="sm">
              Delete
            </Button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ViewShop;
