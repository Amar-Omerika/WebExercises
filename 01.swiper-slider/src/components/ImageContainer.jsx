/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';

export const ImageContainer = ({ image, content }) => {
  return (
    <div className="imagecontainer">
      <img src={image} alt="car image" className="image" />
      <div className="content">
        <h3>Production Year: {content.productionYear}</h3>
        <h4>Type: {content.type}</h4>
        <h5>Horsepower {content.HP}</h5>
      </div>
    </div>
  );
};
