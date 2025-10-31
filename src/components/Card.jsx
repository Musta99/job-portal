import React from "react";

function Card({
  cardTitle,
  cardDescription,
  buttonText,
  cardColor,
  buttonColor,
}) {
  return (
    <div className={`card h-48 ${cardColor} p-4 card-xs shadow-sm sm:w-2/3`}>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{cardTitle}</h2>
        <p className="text-xl">{cardDescription}</p>
        <div className="justify-end card-actions">
          <button className={`btn ${buttonColor} `}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
