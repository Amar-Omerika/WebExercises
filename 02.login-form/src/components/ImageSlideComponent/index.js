import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3 } from "../../assets";

const images = [
  {
    img: Image1,
    alt: "img1",
  },
  {
    img: Image2,
    alt: "img2",
  },
  {
    img: Image3,
    alt: "img3",
  },
];

const ImageSlideComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextSlide = (currentIndex + 1) % images.length;
    const timeout = setTimeout(() => {
      setCurrentIndex(nextSlide);
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="mx-4 my-4 w-full relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.img}
          className={`w-full h-full object-fill rounded-tl-3xl rounded-br-3xl absolute transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: index === currentIndex ? 1 : 0 }}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageSlideComponent;
