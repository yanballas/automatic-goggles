//styles
import "swiper/css";
import "./main.scss";

//modules
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const error = new Error("Error in main.js");

  const initialSlider = (classSelector) => {
    const newSlider = new Swiper(`.${classSelector} .swiper`, {
      loop: true,
      spaceBetween: 32,
      modules: [Pagination, Autoplay],
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: `.${classSelector} .swiper-pagination`,
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      },
    });

    if (newSlider) return newSlider;

    return null;
  };

  const mainSlideSelector = "main__about-slider";
  try {
    initialSlider(mainSlideSelector);
  } catch {
    console.error(error);
  }
});
