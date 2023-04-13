import React from "react";

function Card({ name, email, id }) {
  return (
    <div className="bg-mid-gray tc white dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?set=set2`} alt="Robots photos" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
