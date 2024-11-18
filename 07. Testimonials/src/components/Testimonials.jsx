import { useState } from "react";
import "../index.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I no longer have to sniff other dogs for my daily walk. I just open my front door and let the world come to me.",
      author: "Buddy",
    },
    {
      quote:
        "My owner used to ignore me. Now, I'm the center of attention. My social life has improved dramatically.",
      author: "Princess",
    },
    {
      quote:
        "I was skeptical about the product, but it has improved the quality of my life. I can't believe I was living without it.",
      author: "Reginald",
    },
    {
      quote:
        "This is the best product since the ball. I can't go back to my old life now. I'm addicted.",
      author: "Samantha",
    },
    {
      quote:
        "I can't believe I've gone so long without this product. My life has been a nightmare. Now, I'm living the dream.",
      author: "Doug",
    },
  ];

  const handleClickPrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleClickNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  // The handleClick function can be refactored to use a single function that accepts a direction argument.
  // const handleClick = (direction) => {
  //   setCurrentIndex((prevIndex) => {
  //     if (direction === "prev") {
  //       return (prevIndex + testimonials.length - 1) % testimonials.length;
  //     } else {
  //       return (prevIndex + 1) % testimonials.length;
  //     }
  //   });
  // };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>

      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handleClickPrev}>Prev</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
};
export default Testimonials;
