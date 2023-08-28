jQuery(document).ready(function ($) {
   testWebPFunction();
   initAccordion();
   // initAccordionHover();
   initReadMore();
   initTypeWriter();
   initSwiper();
});

function testWebPFunction() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
      let className = support === true ? "webp" : "no-webp";
      document.documentElement.classList.add(className);
   });
}

function initAccordion() {
   let acc = document.getElementsByClassName("accordion__btn");
   let i;

   for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
         let isActive = this.classList.contains("active");

         for (let j = 0; j < acc.length; j++) {
            acc[j].classList.remove("active");
            let panel = acc[j].nextElementSibling;
            panel.style.maxHeight = null;
         }

         if (!isActive) {
            this.classList.add("active");
            let panel = this.nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
         }
      });
   }
}

// function initAccordionHover() {
//    let acc = document.getElementsByClassName("accordion__btn");
//    let isHoverEnabled = window.innerWidth >= 1280 && window.innerWidth <= 1920; // Check window width

//    for (let i = 0; i < acc.length; i++) {
//       acc[i].addEventListener(
//          isHoverEnabled ? "mouseover" : "click",
//          function () {
//             let isActive = this.classList.contains("active");

//             for (let j = 0; j < acc.length; j++) {
//                acc[j].classList.remove("active");
//                let panel = acc[j].nextElementSibling;
//                panel.style.maxHeight = null;
//             }

//             if (!isActive) {
//                this.classList.add("active");
//                let panel = this.nextElementSibling;
//                panel.style.maxHeight = panel.scrollHeight + "px";
//             }
//          }
//       );
//    }
// }

function initReadMore() {
   var moreText = document.getElementById("more");
   var readMoreBtn = document.getElementById("read-more");
   var readMoreText = document.getElementById("read-more-text");
   var isExpanded = false;

   readMoreBtn.addEventListener("click", function () {
      isExpanded = !isExpanded;
      moreText.style.display = isExpanded ? "flex" : "none";
      moreText.classList.toggle("active");
      this.classList.toggle("active");
      readMoreText.textContent = isExpanded ? "ЗГОРНУТИ" : "ПОКАЗАТИ ЩЕ";
   });
}

function initTypeWriter() {
   let tagForPrint = document.getElementById("typewriter");
   let phrase = "Бухгалтерію та фінанси ми беремо на себе!";
   let printIterator = 0;

   const newInterval = setInterval(() => {
      tagForPrint.textContent += phrase[printIterator];
      printIterator++;
      if (printIterator === phrase.length) {
         clearInterval(newInterval);
         setTimeout(() => {
            tagForPrint.textContent = "";
            printIterator = 0;
            initTypeWriter();
         }, 5000);
      }
   }, 100);
}

function initSwiper() {
   let swiperTeam = new Swiper(".team-slider", {
      navigation: {
         nextEl: ".button-next-team",
         prevEl: ".button-prev-team",
      },
      pagination: {
         el: ".pagination-team",
         clickable: true,
      },
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: false,
      breakpoints: {
         1280: {
            spaceBetween: 24,
         },
      },
   });

   function initializeSwiper() {
      if (window.innerWidth >= 1280) {
         return new Swiper(".about-slider", {
            navigation: {
               nextEl: ".button-next-about",
               prevEl: ".button-prev-about",
            },
            pagination: {
               el: ".pagination-about",
               clickable: true,
            },
            slidesPerView: "auto",
            spaceBetween: 24,
            loop: false,
         });
      } else {
         return null;
      }
   }
   let swiperAbout = initializeSwiper();
   window.addEventListener("resize", () => {
      if (swiperAbout) {
         swiperAbout.destroy();
      }
      swiperAbout = initializeSwiper();
   });
}
