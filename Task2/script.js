//====================================

// ================ Login popup ======================= //

document.getElementById("loginto").addEventListener("click", function () {
  document.querySelector(".login").style.display = "flex";
});
document.querySelector(".close1").addEventListener("click", function () {
  document.querySelector(".login").style.display = "none";
});

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "eyeclose.png";
  } else {
    password.type = "password";
    eyeicon.src = "eyeopen.png";
  }
};



//======================= Dragable bar
const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon i");
let isDragging = false;
const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});
allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});
const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft)
}
const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}
tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// =============  slider 1 ============ //

let sliderfive = tns({
  container: ".my-sliderfive",
  grabCursor: true,
  speed: 300,
  autoplayspeed: 1000,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    1444: {
      items: 5,
    },
    1200:{
      items : 5,
    },
    1024: {
      items: 3,
    },
    768: {
      items: 2,
    },
    480: {
      items: 1,
    },
  },
});

let slider = tns({
  container: '.my-slider7',
  slideBy: 1,
  infinite: true,
  autoplay: true,
  speed: 400,
  nav: false,
  autoplayButtonOutput: false,
  controlsContainer: '#controls',
  prevButton: '.previous',
  nextButton: '.next',
  responsive: {
    1600: {
      items: 4,
      gutter: 20
    },
    1024: {
      items: 3,
      gutter: 20
    },
    768: {
      items: 2,
      gutter: 20
    },
    480: {
      items: 1
    }
  }
});



