import React from "react";

const PersonCard = ({ person }) => {
  const { name, phone } = person;

  return (
    <div className="PersonCard well">
      <h1>{name}</h1>
      <dl>
        <dt>Phone</dt>
        <dd>{phone}</dd>
      </dl>
    </div>
  );
};

export default PersonCard;
