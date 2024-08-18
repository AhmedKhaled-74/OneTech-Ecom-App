//  super Section  //

// tabs

function tabingChange(Section) {
  let btnsArray = Array.from(
    document.querySelectorAll(`${Section} .tabs button`)
  );
  let superArray = Array.from(
    document.querySelectorAll(`${Section} .items-list`)
  );
  var i = 0;
  btnsArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btnsArray.forEach((b) => {
        b.setAttribute("data-show", "false");
      });
      i = btnsArray.indexOf(btn);
      superArray.forEach((arr) => {
        arr.classList.replace("d-flex", "d-none");
      });
      e.target.setAttribute("data-show", "true");
      superArray[i].classList.replace("d-none", "d-flex");
    });
  });
}
tabingChange("#super");
tabingChange("#newArrival");
// time offer
const offerTime = Array.from(document.querySelectorAll(".time-end"));
let nowTime = new Date();
let endTime = new Date("Sep 16, 2024 16:35:00");

let timer = setInterval(() => {
  nowTime = new Date();
  let timeDifference = endTime.getTime() - nowTime.getTime();
  if (timeDifference > 0) {
    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    days < 10 ? (days = "0" + days) : "";

    hours = hours % 24;
    hours < 10 ? (hours = "0" + hours) : "";
    minutes = minutes % 60;
    minutes < 10 ? (minutes = "0" + minutes) : "";
    seconds = seconds % 60;
    seconds < 10 ? (seconds = "0" + seconds) : "";

    offerTime.forEach((time) => {
      time.innerHTML = `<b> ${days} :  ${hours} : ${minutes} : ${seconds}</b>`;
    });
  } else {
    offerTime.forEach((time) => {
      time.innerHTML = "This Offer ends";
    });
    clearInterval(timer);
  }
}, 1000);
///////////////////

//  Trends Section  //

let nextBtnTrend = document.querySelector(".next-trend-btn");

let pervBtnTrend = document.querySelector(".perv-trend-btn");
let trends = document.querySelector(".trend-flex");

let x = 0;

nextBtnTrend.addEventListener("click", () => {
  x += 100;
  if (x > trends.clientWidth - 900) {
    x = trends.clientWidth - 900;
  }
  trends.style.transform = `translateX(${-x}px)`;
  console.log(x);
});

pervBtnTrend.addEventListener("click", () => {
  x -= 100;
  if (x < 0) {
    x = -100;
  }
  trends.style.transform = `translateX(${-x}px)`;
  console.log(x);
});

//  Brands Section  //

const brandsScroller = document.querySelector(".brands-flex");
const brandsInner = Array.from(brandsScroller.children);

brandsInner.forEach((brandI) => {
  const dupl = brandI.cloneNode(true);
  brandsScroller.appendChild(dupl);
});

//  Aside arrow Section  //
const arrow = document.querySelector(".arrowUp");
const hero = document.getElementById("home");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        arrow.classList.remove("showArrow");
      } else {
        arrow.classList.add("showArrow");
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(hero);
