import React from 'react';

const Card = ({ name, type, attack, defense }) => {
  return (
    <>
      <h2>{name}</h2>
      <p><strong>Tipo:</strong> {type}</p>
      <p><strong>Ataque:</strong> {attack}</p>
      <p><strong>Defesa:</strong> {defense}</p>

      {attack >= 6 && (
        <span>
          forte
        </span>
      )}
    </>
  );
};

export default Card;