var contactsBtn = document.querySelector(".contacts__button");
var modalFeedback = document.querySelector(".feedback");
var closeFeedback = document.querySelector(".feedback__close");
var mapBtn = document.querySelector(".contacts__map-link");
var modalMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map__close");

var formFeedback = document.querySelector(".feedback__form");
var userFeedback = document.querySelector("#user-name");
var mailFeedback = document.querySelector("#user-mail");
var textFeedback = document.querySelector("#feedback-text");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userFeedback");
} catch (err) {
  isStorageSupport = false;
}

contactsBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  if (storage) {
    userFeedback.value = storage;
    mailFeedback.focus();
  } else {
    userFeedback.focus();
  }
});

closeFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});

mapBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

// закрытие по кнопке esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
    } else if (modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-show");
    }
  }
});

formFeedback.addEventListener("submit", function(evt) {
  if (!userFeedback.value || !mailFeedback.value || !textFeedback.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");

    if (!userFeedback.value) {
      userFeedback.classList.add("feedback__field--invalid");
    } else {
      userFeedback.classList.remove("feedback__field--invalid");
    }
    if (!mailFeedback.value) {
      mailFeedback.classList.add("feedback__field--invalid");
    } else {
      mailFeedback.classList.remove("feedback__field--invalid");
    }
    if (!textFeedback.value) {
      textFeedback.classList.add("feedback__field--invalid");
    } else {
      textFeedback.classList.remove("feedback__field--invalid");
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userFeedback", userFeedback.value);
    }
  }
});

// Слайдер серивисов
var allServicesTab = Array.prototype.slice.call(document.querySelectorAll(".services-tab__link"));
var servicesSlide = document.querySelectorAll(".services-list__item");
var servicesTab = document.querySelectorAll(".services-tab__link");
allServicesTab.forEach(function(button, n) {
  button.addEventListener("click", function() {
    for (var i = 0; i < servicesSlide.length; i++) {
      servicesSlide[i].classList.remove("services-list__item--current");
      allServicesTab[i].classList.remove("services-tab__link--current");
    }
    servicesTab[n].classList.add("services-tab__link--current");
    servicesSlide[n].classList.add("services-list__item--current");
  });

  button.addEventListener("focus", function() {
    for (var i = 0; i < servicesSlide.length; i++) {
      servicesSlide[i].classList.remove("services-list__item--current");
      allServicesTab[i].classList.remove("services-tab__link--current");
    }
    servicesTab[n].classList.add("services-tab__link--current");
    servicesSlide[n].classList.add("services-list__item--current");
  });
});

// Слайдер услуг
var allPopularTab = Array.prototype.slice.call(document.querySelectorAll(".slider-toggles__button"));
var popularSlide = document.querySelectorAll(".promo-slider__item");
var popularTab = document.querySelectorAll(".slider-toggles__button");
allPopularTab.forEach(function(button, n) {
  button.addEventListener("click", function() {
    for (var i = 0; i < popularSlide.length; i++) {
      popularSlide[i].classList.remove("promo-slider__item--current");
      allPopularTab[i].classList.remove("slider-toggles__button--current");
    }
    popularTab[n].classList.add("slider-toggles__button--current");
    popularSlide[n].classList.add("promo-slider__item--current");
  });

  button.addEventListener("focus", function() {
    for (var i = 0; i < popularSlide.length; i++) {
      popularSlide[i].classList.remove("promo-slider__item--current");
      allPopularTab[i].classList.remove("slider-toggles__button--current");
    }
    popularTab[n].classList.add("slider-toggles__button--current");
    popularSlide[n].classList.add("promo-slider__item--current");
  });
});
