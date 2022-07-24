/*=============================================
=            Section dark mode            =
=============================================*/
const iconMoon = document.querySelector(".icon_moon");
const bodyDarkmod = document.querySelector("body");
iconMoon.addEventListener("click", () => {
  bodyDarkmod.classList.toggle("dark_mod");
});
/*=====  End of Section dark mode  ======*/
/*=============================================
=            Section btn_toggle            =
=============================================*/
const navToggle = document.querySelector(".nav_btn_toggle");
const navbarLinks = document.querySelector(".navbar_links");
const navBtnToggle = document.querySelector(".nav_btn_toggle");
navToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("navbar_phone");
  navBtnToggle.classList.toggle("nav_close");
});
/*=====  End of Section btn_toggle  ======*/

/*=============================================
=            Section loader            =
=============================================*/

const loaderContainer = document.querySelector(".loader-container");
window.addEventListener("load", () => {
  loaderContainer.classList.add("loader-container-hidden");
});

/*=====  End of Section loader  ======*/

/*=============================================
=            Section text control            =
=============================================*/

const controlBtn1 = document.querySelector(".control_btn1");
const controlBtn2 = document.querySelector(".control_btn2");
const controlBtn3 = document.querySelector(".control_btn3");
const mainText = document.querySelector(".main_text");
controlBtn1.addEventListener("click", () => {
  controlBtn1.classList.add("active");
  controlBtn2.classList.remove("active");
  controlBtn3.classList.remove("active");
  mainText.classList.remove("text_control_middle");
  mainText.classList.remove("text_control_small");
});

controlBtn2.addEventListener("click", () => {
  controlBtn2.classList.add("active");
  controlBtn1.classList.remove("active");
  controlBtn3.classList.remove("active");
  mainText.classList.remove("text_control_small");
  mainText.classList.add("text_control_middle");
});
controlBtn3.addEventListener("click", () => {
  controlBtn3.classList.add("active");
  controlBtn1.classList.remove("active");
  controlBtn2.classList.remove("active");
  mainText.classList.remove("text_control_middle");
  mainText.classList.add("text_control_small");
});

/*=====  End of Section text control  ======*/

/*global console*/
var comment = document.getElementById("comment"),
  addComment = document.getElementById("add-comment"),
  discription = document.getElementById("comment_discription");
(commentsContainer = document.getElementById("comments-container")),
  (commentCounter = document.getElementById("comment-counter"));
addComment.addEventListener("click", function () {
  var numberOfComments = Number(commentCounter.textContent),
    date = new Date();
  numberOfComments++;
  commentCounter.textContent = numberOfComments;
  commentsContainer.style.display = "block";
  commentsContainer.innerHTML += `<div class="comment">
  <div class="comment_date">
  <i class="date_icon far fa-clock"></i>
  <span>منذ يوم</span>
            <span class="date"> ${date.toLocaleDateString()}</span>
            <span class="icon-remove"> <i class="fa fa-trash"></i></span>
            </div>
  <h6 class="comment_name">${comment.value}</h6>
  <p class="comment_text">${discription.value}</p>

         </div>`;
  comment.value = "";
  discription.value = "";
  var deleteIcons = document.querySelectorAll(".icon-remove");
  for (let i = 0; i < deleteIcons.length; i++) {
    deleteIcons[i].addEventListener("click", function () {
      this.parentElement.parentElement.style.display = "none";
      numberOfComments--;
      commentCounter.textContent = numberOfComments;
    });
  }
});
