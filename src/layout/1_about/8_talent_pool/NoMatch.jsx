import React from "react";

const NoMatch = ({ message }) => {
  return (
    <div className="row">
      <div className="col-md-6 mx-auto text-center">
        <div className="speech-bubble p-5">
          <h3>{message}</h3>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
