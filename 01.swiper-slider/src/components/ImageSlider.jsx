/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ImageContainer } from "./ImageContainer";

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<>
			<p>Car Gallery</p>
			<section className="slider">
				<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
				<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
				{SliderData.map((slide, index) => {
					return (
						<div
							className={index === current ? "slide active" : "slide"}
							key={index}
						>
							{index === current && (
								<ImageContainer image={slide.image} content={slide.content} />
							)}
						</div>
					);
				})}
			</section>
		</>
	);
};

export default ImageSlider;
