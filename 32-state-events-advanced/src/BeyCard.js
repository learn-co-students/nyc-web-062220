import React from "react";

const BeyCard = (props) => {
  return (
    <div>
      <h3>{props.bey.name}</h3>
      <h2>{props.bey.num_of_clicks}</h2>
      <img onClick={function () { props.clickHandler(props.bey.id) }} src={props.bey.img} />
    </div>
  );
};



export default BeyCard;
