"use strict";

const addTODO = document.querySelector(".addTODO");
const cancelBtn = document.querySelector(".cancelBtn");

cancelBtn.addEventListener("click", function () {
  console.log("A");
  addTODO.classList.add("hidden");
});

const addTask = document.querySelectorAll(".addTask");

addTask.forEach((el) =>
  el.addEventListener("click", function () {
    addTODO.classList.remove("hidden");
  })
);
