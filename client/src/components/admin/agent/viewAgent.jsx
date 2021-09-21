import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../../utils/Loader";

import { Popconfirm } from "antd";
import { deleteAgentAction, getAllAgentsAction } from "../../../redux/agents/agent.action";

const ViewAgent = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const { agents, loading } = useSelector((state) => state.agents);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [keyword, setKeyword] = useState("");

  function confirm(id) {
    dispatch(deleteAgentAction(id));
  }

  useEffect(
    () => {
      dispatch(getAllAgentsAction({ keyword, page }));
    }, // eslint-disable-next-line
    [dispatch, page]
  );
  // eslint-disable-next-line
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    dispatch(getAllAgentsAction({ keyword }));
  };

  return (
    <div>
      <h3 className="mb-5">View Agent</h3>
      <div>
        {loading ? (
          <Loader size={44} />
        ) : (
          agents &&
          agents.map((agent) => (
            <>
              <div key={agent._id} className="d-flex justify-content-between">
                <h6>{agent.name}</h6>
                <div>
                  <Link className="me-3" to={`${match.url}/${agent._id}`}>
                    <Button variant="primary" size="sm">
                      View Profile
                    </Button>
                  </Link>
                  <Popconfirm
                    title="Deleting Shop?"
                    onConfirm={() => confirm(agent._id)}
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

export default ViewAgent;
