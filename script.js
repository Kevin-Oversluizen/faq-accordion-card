"use strict";

const buttonAccordion = document.querySelectorAll(".js-accordion-toggle");

buttonAccordion.forEach((button) => {
  button.addEventListener("click", () => {
    const parentAccordionItem = button.parentNode;
    const content = parentAccordionItem.querySelector(".accordion_content");
    const arrow = parentAccordionItem.querySelector(".svg-arrow"); // Select the image

    if (button.classList.contains("accordion__toggle--openend")) {
      button.classList.remove("accordion__toggle--openend");
      content.classList.remove("accordion_content-opened");
      arrow.classList.remove("svg-arrow-rotated"); // Remove the rotated class
      return;
    }

    // Remove classes from all buttons, content, and arrows
    buttonAccordion.forEach((otherButton) => {
      otherButton.classList.remove("accordion__toggle--openend");
      const otherParentAccordionItem = otherButton.parentNode;
      const otherContent =
        otherParentAccordionItem.querySelector(".accordion_content");
      const otherArrow = otherParentAccordionItem.querySelector(".svg-arrow"); // Select the other images
      otherContent.classList.remove("accordion_content-opened");
      otherArrow.classList.remove("svg-arrow-rotated"); // Remove the rotated class from other images
    });

    // Add classes to the clicked button, content, and arrow
    button.classList.add("accordion__toggle--openend");
    content.classList.add("accordion_content-opened");
    arrow.classList.add("svg-arrow-rotated"); // Add the rotated class to the clicked image
  });
});
