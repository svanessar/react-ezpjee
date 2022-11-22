import React, { useState } from 'react';

const Resenia = () => {
  //dEFINIR ESTADOS INICIALES:
  const [rating, setRating] = useState(10);
  const [comment, setComment] = useState('Buen curso, faltan recursos');

  //cambiar el estado del rating
  const addNota = () => {
    setRating((prev) => {
      return prev + 1;
    });
  };

  const restNota = () => {
    setRating((prev) => {
      return prev - 1;
    });
  };
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{comment}</div>
      <button onClick={addNota}>Agregar Nota</button>
      <br></br>
      <button onClick={restNota}>Restar Nota</button>
    </div>
  );
};

export default Resenia;
