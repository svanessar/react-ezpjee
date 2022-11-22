import React from 'react';
const ReseniaList = ({ listaresenias }) => {
  return (
    <div className="feeback-list">
      {/*Recorrer la listaresenias*/}
      {listaresenias.map((resenia) => (
        <div className="card">
          {resenia.id}
          {resenia.rating}
          {resenia.text}
        </div>
      ))}
    </div>
  );
};
export default ReseniaList;
