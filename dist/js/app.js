jQuery(document).ready(function ($) {
   testWebPFunction();
   initMobileMenu();
   initScrollTo();
   initSubmenu();
   initAccordion();
   initAccordionHover();
   if ($("#read-more").length > 0) {
      initReadMore();
   }
   if ($("#typewriter").length > 0) {
      initTypeWriter();
   }
   if (
      $(".other-articles-slider").length > 0 ||
      $(".team-slider").length > 0 ||
      $(".cases-slider").length > 0 ||
      $(".articles-slider").length > 0
   ) {
      initSwiper();
   }
   initTabs();
   if ($(".about-slider").length > 0) {
      initAboutSlider();
   }
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

function initMobileMenu() {
   const headerBurger = $(".header__burger");
   const headerMenu = $(".header__menu");
   const body = $("body");
   const headerOverlay = $(".overlay");
   const headerMenuLink = $(".header__link");
   const headerBtnConsultation = $(".header .btn-full");

   function closeMenu() {
      headerBurger.removeClass("active");
      headerMenu.removeClass("active");
      body.removeClass("lock");
   }

   headerBurger.on("click", function () {
      headerBurger.toggleClass("active");
      headerMenu.toggleClass("active");
      body.toggleClass("lock");
   });

   headerOverlay
      .add(headerMenuLink)
      .add(headerBtnConsultation)
      .on("click", function () {
         if (
            body.hasClass("lock") &&
            headerMenu.hasClass("active") &&
            headerBurger.hasClass("active")
         ) {
            closeMenu();
         }
      });
}

function initScrollTo() {
   $("a.scroll-to").click(function () {
      $("html, body").animate(
         {
            scrollTop: $($(this).attr("href")).offset().top + "px",
         },
         {
            duration: 700,
            easing: "swing",
         }
      );
      return false;
   });
}

function initSubmenu() {
   $(".menu-item-submenu a").mouseenter(function () {
      $(".submenu").addClass("show");
      $(this).addClass("active");
   });
   $(".header").mouseleave(function () {
      $(".submenu").removeClass("show");
      $(".menu-item-submenu a").removeClass("active");
   });
}

function initAccordion() {
   let acc = document.getElementsByClassName("trigger-accordion-js");
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

function initAccordionHover() {
   let acc = document.getElementsByClassName("accordion-hover__btn");
   let isHoverEnabled = window.innerWidth >= 1280 && window.innerWidth <= 1920;

   for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener(
         isHoverEnabled ? "mouseover" : "click",
         function () {
            let isActive = this.classList.contains("active");

            for (let j = 0; j < acc.length; j++) {
               if (!isActive) {
                  acc[j].classList.remove("active");
                  let panel = acc[j].nextElementSibling;
                  panel.style.maxHeight = null;
               }
            }

            if (!isActive) {
               this.classList.add("active");
               let panel = this.nextElementSibling;
               panel.style.maxHeight = panel.scrollHeight + "px";
            }
         }
      );
   }
}

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

   let swiperOtherArticles = new Swiper(".other-articles-slider", {
      pagination: {
         el: ".pagination-other-articles",
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

   let swiperCases = new Swiper(".cases-slider", {
      navigation: {
         nextEl: ".button-next-cases",
         prevEl: ".button-prev-cases",
      },
      pagination: {
         el: ".pagination-cases",
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

   let swiperArticles = new Swiper(".articles-slider", {
      navigation: {
         nextEl: ".button-next-articles",
         prevEl: ".button-prev-articles",
      },
      pagination: {
         el: ".pagination-articles",
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
}

function initAboutSlider() {
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

function initTabs() {
   $(function () {
      $(".tabs__caption").on("click", "button:not(.active)", function () {
         $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
      });
   });
}

if ($('[data-fancybox=""]').length > 0) {
   $('[data-fancybox=""]').fancybox({
      autoFocus: false,
      touch: false,
   });
}
