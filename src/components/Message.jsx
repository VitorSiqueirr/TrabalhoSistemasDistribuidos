import React from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = userContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="message owner">
      {/* {<div className="messageInfo">
        <img src="" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>} */}
    </div>
  );
};

export default Message;
