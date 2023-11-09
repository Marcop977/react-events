import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ img, titolo, descrizione, durata, prezzo }) => {
  return (
    <div className='card w-50 shadow border-0'>
      <div className='card-image'>
        <img
          className='img-fluid'
          style={{ width: "700px", height: "400px" }}
          src={img}
          alt={titolo}
        />
      </div>
      <div className='card-body'>
        <div className='card-title'>
          <h5>{titolo}</h5>
        </div>
        <div className='card-text'>
          <p>{descrizione}</p>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='card-text text-secondary'>{durata}</div>
          <div className='card-text text-secondary'>{prezzo} €</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
