/**
 * Created by Serj on 11.03.2017.
 */
'use strict';
var menu = document.querySelector(".main-nav");
var menuControl = menu.querySelector(".main-nav__control");
var menuList = menu.querySelector(".main-nav__list");
var button = menu.querySelector(".main-nav__toggle");

button.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--closed");
  menuControl.classList.toggle("main-nav__control--closed");
  menuList.classList.toggle("main-nav__list--closed");
});
