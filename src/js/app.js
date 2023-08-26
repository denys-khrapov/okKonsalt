jQuery(document).ready(function ($) {
   testWebPFunction();
   initAccordion();
   initReadMore();
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
