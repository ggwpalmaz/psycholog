const cards = document.querySelectorAll(".people__cards");
const peopleInner = document.querySelector(".people__inner");
const peopleWraps = document.querySelector(".people__wraps");
const dotsItem = document.querySelectorAll(".dots__item");
let width;
let step = 0;
let isDragging = false;
let startX;
let currentX;
let currInd = 0;

peopleWraps.addEventListener("mousedown", (event) => {
  isDragging = true;
  const parentRect = peopleWraps.getBoundingClientRect().left;
  const cursorX = event.clientX;
  const offsetX = cursorX - parentRect;
  const percentage = (offsetX / width) * 100;
  startX = percentage;
});
peopleWraps.addEventListener("mousemove", (event) => {
  const parentRect = peopleWraps.getBoundingClientRect().left;
  const cursorX = event.clientX;
  // console.log(cursorX);
  const offsetX = cursorX - parentRect;
  const percentage = (offsetX / width) * 100;
  currentX = percentage;
});

peopleWraps.addEventListener("mouseup", (event) => {
  if (currentX > startX) {
    if (isDragging) {
      dotsItem.forEach((el, index) => {
        if (el.classList.contains("dots__item_active")) {
          currInd = index - 1;
          if (index > 0) {
            el.classList.remove("dots__item_active");
            dotsItem[currInd].classList.add("dots__item_active");
            step = width * currInd;
            peopleInner.style.left = `-${step}px`;
          }
        }
      });
    }
  } else if (currentX < startX) {
    if (isDragging) {
      let x = 0;
      dotsItem.forEach((el, index) => {
        if (el.classList.contains("dots__item_active")) {
          if (x === 0) {
            currInd = index + 1;
            if (index < dotsItem.length - 1) {
              el.classList.remove("dots__item_active");
              dotsItem[currInd].classList.add("dots__item_active");
              step = width * currInd;
              peopleInner.style.left = `-${step}px`;
            }
            x = 1;
          }
        }
      });
    }
  }
});
peopleWraps.addEventListener("mouseup", (event) => {
  isDragging = false;
});
peopleWraps.addEventListener("mouseleave", (event) => {
  isDragging = false;
});
// =====================================
function card() {
  cards.forEach((item) => {
    const card = item.querySelectorAll(".people__card");

    card.forEach((el) => {
      el.style.display = "flex";
    });

    if (window.innerWidth <= 767) {
      card.forEach((el) => {
        if (card[0] !== el) {
          el.style.display = "none";
        }
      });
    } else if (window.innerWidth <= 930) {
      if (card.length > 3) {
        card[3].style.display = "none";
      }
    }

    // console.log(window.innerWidth);
  });
}

function init() {
  width = peopleWraps.offsetWidth;
  peopleInner.style.width = width * cards.length + "px";
  cards.forEach((item) => {
    item.style.width = width + "px";
  });
  dotsItem.forEach((element, index) => {
    if (element.classList.contains("dots__item_active")) {
      step = width * index;
      peopleInner.style.left = `-${step}px`;
    }
  });
}

window.addEventListener("resize", () => {
  init();
  card();
});

init();
card();

dotsItem.forEach((elem, index) => {
  elem.addEventListener("click", (event) => {
    dotsItem.forEach((element) => {
      if (event.target === element) {
        element.classList.add("dots__item_active");
      } else {
        element.classList.remove("dots__item_active");
      }
    });
    step = width * index;
    peopleInner.style.left = `-${step}px`;
  });
});
// ============================================
// ============================================
// ============================================
const reviewsWrapp = document.querySelector(".reviews__wrapp");
const reviewsCards = document.querySelector(".reviews__cards");
const reviewsCard = document.querySelectorAll(".reviews__card");
const dotsItem1 = document.querySelectorAll(".dots__item1");
const reviewsCard1 = reviewsCard[0];
let reviewsCard1Width = parseFloat(getComputedStyle(reviewsCard1).width);
// console.log(reviewsCard1Width);
let step1 = 0;
let gap = 20;
let width1;
let isDragging1 = false;
let startX1;
let currentX1;
let currInd1 = 0;

function init1() {
  if (window.innerWidth <= 767) {
    reviewsCards.style.width =
      reviewsWrapp.offsetWidth * reviewsCard.length +
      gap * reviewsCard.length -
      20 +
      "px";
    reviewsCard1Width = reviewsWrapp.offsetWidth;
    reviewsCard.forEach((el) => {
      el.style.width = reviewsWrapp.offsetWidth + "px";
      // console.log(el.style.width);
    });
  } else {
    reviewsCard1Width = parseFloat(getComputedStyle(reviewsCard1).width);
    reviewsCard.forEach((el) => {
      el.style.width = 0 + "px";
    });
  }
  // console.log(reviewsCard1Width);
  dotsItem1.forEach((element, index) => {
    if (element.classList.contains("dots__item1_active")) {
      if (index !== 0) {
        step1 = reviewsCard1Width * index + gap * index;
      } else {
        step1 = reviewsCard1Width * index;
      }
      reviewsCards.style.left = `-${step1}px`;
    }
  });
}
init1();

dotsItem1.forEach((item) => {
  item.addEventListener("click", (event) => {
    dotsItem1.forEach((el, index) => {
      if (el === event.target) {
        el.classList.add("dots__item1_active");
        if (index === 0) {
          step1 = reviewsCard1Width * index;
        } else {
          step1 = reviewsCard1Width * index + gap * index;
        }

        reviewsCards.style.left = `-${step1}px`;
      } else {
        el.classList.remove("dots__item1_active");
      }
    });
  });
});
window.addEventListener("resize", () => {
  // console.log(reviewsCard1Width);
  // console.log("gg");
  init1();
});
// =======================================
reviewsWrapp.addEventListener("mousedown", (event) => {
  isDragging1 = true;
  const parentRect = reviewsWrapp.getBoundingClientRect().left;
  const cursorX = event.clientX;
  const offsetX = cursorX - parentRect;
  const percentage = (offsetX / width) * 100;
  startX1 = percentage;
});
reviewsWrapp.addEventListener("mousemove", (event) => {
  const parentRect = reviewsWrapp.getBoundingClientRect().left;
  const cursorX = event.clientX;
  // console.log(cursorX);
  const offsetX = cursorX - parentRect;
  const percentage = (offsetX / width) * 100;
  currentX1 = percentage;
});

reviewsWrapp.addEventListener("mouseup", (event) => {
  if (currentX1 > startX1) {
    if (isDragging1) {
      dotsItem1.forEach((el, index) => {
        if (el.classList.contains("dots__item1_active")) {
          currInd1 = index - 1;
          if (index > 0) {
            el.classList.remove("dots__item1_active");
            dotsItem1[currInd1].classList.add("dots__item1_active");
            step1 = reviewsCard1Width * currInd1 + gap * currInd1;
            reviewsCards.style.left = `-${step1}px`;
          }
        }
      });
    }
  } else if (currentX1 < startX1) {
    if (isDragging1) {
      let x = 0;
      dotsItem1.forEach((el, index) => {
        if (el.classList.contains("dots__item1_active")) {
          if (x === 0) {
            currInd1 = index + 1;
            if (index < dotsItem1.length - 1) {
              el.classList.remove("dots__item1_active");
              dotsItem1[currInd1].classList.add("dots__item1_active");
              step1 = reviewsCard1Width * currInd1 + gap * currInd1;
              reviewsCards.style.left = `-${step1}px`;
            }
            x = 1;
          }
        }
      });
    }
  }
});
reviewsWrapp.addEventListener("mouseup", (event) => {
  isDragging1 = false;
});
reviewsWrapp.addEventListener("mouseleave", (event) => {
  isDragging1 = false;
});
