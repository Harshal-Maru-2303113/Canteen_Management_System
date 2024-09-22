import React, { useRef, useState } from "react";
import menucard from "../CSS/MenuCardCarousel.module.css";

export default function MenuCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputsRef = useRef([]);

  const updateCarousel = (direction) => {
    const inputs = inputsRef.current;
    inputs[currentIndex].checked = false;
    const newIndex = (currentIndex + direction + inputs.length) % inputs.length;
    setCurrentIndex(newIndex);
    inputs[newIndex].checked = true;
  };

  const handleLeftClick = () => updateCarousel(-1);
  const handleRightClick = () => updateCarousel(1);

  const carouselTexts = [
    "Beautiful Scenery 1",
    "Beautiful Scenery 2",
    "Beautiful Scenery 3",
    "Beautiful Scenery 4",
    "Beautiful Scenery 5"
  ];

  return (
    <div className={menucard['carousel-container']}>
      {/* Carousel Inputs */}
      {Array.from({ length: 5 }).map((_, index) => (
        <input
          key={index}
          type="radio"
          name="s"
          ref={(el) => (inputsRef.current[index] = el)}
          id={`s${index + 1}`}
          style={{
            backgroundImage: `url('https://picsum.photos/500/300?random=${index + 1}')`,
          }}
          title={`Random Picture ${index + 1}`}
          defaultChecked={index === 0}
        />
      ))}

      {/* Overlay Text */}
      <div className={menucard['carousel-text']}>
        {carouselTexts[currentIndex]}
      </div>

      {/* Navigation Buttons */}
      <div
        className={`${menucard["nav-button"]} ${menucard["nav-left"]}`}
        onClick={handleLeftClick}
        aria-label="Previous slide"
      >
        ⥪
      </div>
      <div
        className={`${menucard["nav-button"]} ${menucard["nav-right"]}`}
        onClick={handleRightClick}
        aria-label="Next slide"
      >
        ⥭
      </div>
    </div>
  );
}
