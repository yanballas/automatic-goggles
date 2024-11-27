//styles
import "swiper/css";
import "./main.scss";

//modules
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const error = new Error("Error in main.js");
  const mainSlideSelector = "main__about-slider";

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

  const navigation = () => {
    const nav = document.querySelector(".nav");
    const openButton = document.querySelector(".header__burger button");
    const closeButton = document.querySelector(".nav__button");

    const handleClick = () => {
      if (nav.classList.contains("nav__active"))
        return nav.classList.remove("nav__active");

      return nav.classList.add("nav__active");
    };

    openButton.addEventListener("click", handleClick);
    closeButton.addEventListener("click", handleClick);
  };

  const formSubmit = () => {
    const form = document.querySelector(".main__join-form form");
    const inputs = Array.from(form.querySelectorAll("input"));
    const submitButton = form.querySelector(".page__button");

    const user = {
      name: "",
      surname: "",
      email: "",
      zip: "",
    };

    const handleInput = (e) => {
      validateInput(e.target);
      checkFormValidity();
    };

    const validateInput = (input) => {
      const value = input.value.trim();
      let isValid = false;

      if (value) {
        switch (input.name) {
          case "name":
            user.name = value;
            isValid = true;
            break;

          case "surname":
            user.surname = value;
            isValid = true;
            break;

          case "email":
            user.email = value;
            isValid = true;
            break;

          case "zip":
            user.zip = value;
            isValid = true;
            break;
        }
      }

      return isValid;
    };

    const checkFormValidity = () => {
      const isValid = inputs.every((input) => {
        if (input.type === "checkbox") {
          return input.checked;
        }
        return validateInput(input);
      });

      if (isValid) {
        submitButton.classList.add("--active");
      } else {
        submitButton.classList.remove("--active");
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      checkFormValidity();

      if (submitButton.classList.contains("--active")) {
        alert(`отправлена форма ${JSON.stringify(user)}`);
      } else {
        alert('форма заполнена неправильно')
      }
    };

    form.addEventListener("submit", handleSubmit);
    inputs.forEach((input) => {
      input.addEventListener("input", handleInput);
    });
  };

  try {
    navigation();
    initialSlider(mainSlideSelector);
    formSubmit();
  } catch {
    console.error(error);
  }
});
