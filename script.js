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
const reviewsCards = document.querySelector(".reviews__cards");
const reviewsCard = document.querySelectorAll(".reviews__card");
const dotsItem1 = document.querySelectorAll(".dots__item1");
const reviewsCard1 = reviewsCard[0];
let reviewsCard1Width = parseFloat(getComputedStyle(reviewsCard1).width);
console.log(reviewsCard1Width);
let step1 = 0;
let gap = 20;

dotsItem1.forEach((item) => {
  item.addEventListener("click", (event) => {
    dotsItem1.forEach((el, index) => {
      if (el === event.target) {
        el.classList.add("dots__item1_active");
        if (index === 0) {
          step1 = reviewsCard1Width * index;
        } else {
          step1 = reviewsCard1Width * index + (gap * index + 20);
          console.log(step1);
        }

        reviewsCards.style.left = `-${step1}px`;
      } else {
        el.classList.remove("dots__item1_active");
      }
    });
  });
});
// dotsItem1.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     dotsItem1.forEach((el) => {
//       if (event.target === el) {
//         el.classList.add("dots__item1_active");
//       } else {
//         el.classList.remove("dots__item1_active");
//       }
//       reviewsCard.forEach((elem) => {
//         elem.classList.remove("reviews__card_op");
//       });
//       if (event.target === dotsItem1[0]) {
//         step1 = 0;
//         reviewsCard[2].classList.add("reviews__card_op");
//       } else if (event.target === dotsItem1[1]) {
//         step1 = -570;
//         reviewsCard[3].classList.add("reviews__card_op");
//       } else if (event.target === dotsItem1[2]) {
//         step1 = -1140;
//         reviewsCard[4].classList.add("reviews__card_op");
//       } else if (event.target === dotsItem1[3]) {
//         step1 = -1710;
//         reviewsCard[5].classList.add("reviews__card_op");
//       } else if (event.target === dotsItem1[4]) {
//         step1 = -2280;
//       }
//       reviewsCards.style.left = `${step1}px`;
//     });
//   });
// });
