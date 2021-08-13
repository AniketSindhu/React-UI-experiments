import React from "react";
import "../componentsCss/event.css";

function Event(props) {
  return (
    <div className="Container">
      <h3 className="Title">{props.element.title.toString()}</h3>
    </div>
  );
}

export default Event;
