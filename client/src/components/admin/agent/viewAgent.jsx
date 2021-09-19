import { Button } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
const ViewAgent = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h3 className="mb-5">View Agent</h3>
      <div>
        <div className="d-flex justify-content-between">
          <h6>Agent Name</h6>
          <div>
            <Link className="me-3" to={`${match.url}/${123}`}>
              <Button variant="primary" size="sm">
                View Profile
              </Button>
            </Link>
            <Button variant="outline-danger" size="sm">
              Delete
            </Button>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h6>Agent Name</h6>
          <div>
            <Link className="me-3" to={`${match.url}/${123}`}>
              <Button variant="primary" size="sm">
                View Profile
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

export default ViewAgent;
