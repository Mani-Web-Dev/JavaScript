import React from "react";

import { gmAction, gnAction } from "./Redux/Message/message.action";

import { useDispatch, useSelector } from "react-redux";

const Message = () => {
  let dispatch = useDispatch();
  let message = useSelector((state) => {
    return state.message;
  });

  let gmHandler = () => {
    // dispatching an action
    dispatch(gmAction());
  };
  let gnHandler = () => {
    // dispatching an action
    dispatch(gnAction());
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Message : {message}</h4>
            </div>
            <div className="card-body">
              <button className="btn btn-primary mx-2" onClick={gmHandler}>
                GM
              </button>
              <button className="btn btn-warning" onClick={gnHandler}>
                GN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
