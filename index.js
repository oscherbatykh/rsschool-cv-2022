console.log(" Вёрстка валидная +10\n Вёрстка семантическая +20\n Вёрстка соответствует макету +48\n Требования к css + 12\n Интерактивность, реализуемая через css +20\n Общая оценка 100 баллов.")


  //select
  const selectSingle = document.querySelector(".__select");
  const selectSingle_title = selectSingle.querySelector(".__select__title");
  const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

  // Toggle menu
  selectSingle_title.addEventListener("click", () => {
      if ("active" === selectSingle.getAttribute("data-state")) {
          selectSingle.setAttribute("data-state", "");
      } else {
          selectSingle.setAttribute("data-state", "active");
      }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener("click", (evt) => {
          selectSingle_title.textContent = evt.target.textContent;
          selectSingle.setAttribute("data-state", "");
      });
  }

  //prices

  let inputElem = document.getElementsByClassName("clickable");

  for (var i = 0; i < inputElem.length; i++) {
      inputElem[i].addEventListener(
          "click",
          function () {
              this.classList.toggle("showtext");
          },
          false
      );
  }

  //mobile menu
  let menuMobile = document.querySelector(".mobile-main");
  let mobileMenu = document.querySelector(".header_list");
  menuMobile.addEventListener("click", function () {
    mobileMenu.classList.toggle("showmenu");
    this.classList.toggle("close-icon");
},false)