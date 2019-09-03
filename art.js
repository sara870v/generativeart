"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {
  let div = document.createElement("div");
  let div2 = document.createElement("div");

  for (let i = 100; i <= 300; i += 20) {
    console.log(i);
    div = document.createElement("div");
    div.classList.add("box");
    document.querySelector("#artwork1").appendChild(div);
    div.style.height = i + "px";
    div.style.width = i + "px";
  }

  for (let i = 0; i <= 90; i += 10) {
    console.log(i);
    div = document.createElement("div");
    div.classList.add("box");
    document.querySelector("#artwork2").appendChild(div);
    div.style.transform = `rotate(${i}deg)`;
  }

  for (let i = 0; i <= 200; i += 10) {
    console.log(i);
    div = document.createElement("div");
    div.classList.add("circle");
    document.querySelector("#artwork3").appendChild(div);
    div.style.height = i + "px";
    div.style.width = i + "px";
  }

  for (let i = -90; i <= 90; i += 20) {
    console.log(i);
    div = document.createElement("div");
    div.classList.add("box");
    document.querySelector("#artwork4").appendChild(div);
    div.style.transform = `translateX(${i}px)translateY(${i}px)`;
  }

  for (let i = 1; i <= 512; i *= 2) {
    console.log(i);
    div = document.createElement("div");
    div.classList.add("circle");
    document.querySelector("#artwork5").appendChild(div);
    div.style.height = i + "px";
    div.style.width = i + "px";
  }

  for (let i = -25; i <= 45; i += 5) {
    console.log(i);
    div = document.createElement("div");
    div.classList.add("circle");
    document.querySelector("#artwork6").appendChild(div);
    div.style.transform = `translateX(${i - 50}px)rotate(${i * 4}deg)`;
  }

  for (let i = 0; i <= 200; i += 10) {
    console.log(i);
    div = document.createElement("div");
    div.classList.add("circle");
    document.querySelector("#artwork7").appendChild(div);
    div.style.transform = `translateX(${i}px)translateY(${i / -2}px)`;
    div.style.height = i + "px";
    div.style.width = i + "px";
  }

  for (let i = 50; i <= 200; i += 10) {
    console.log(i);
    div = document.createElement("div");
    div.classList.add("box");
    document.querySelector("#artwork8").appendChild(div);
    div.style.transform = `translateX(${i / 2}px)rotate(${i}deg)`;
    div.style.height = i + "px";
    div.style.width = i + "px";
  }

  for (let i = 50; i <= 200; i += 30) {
    console.log(i);
    div = document.createElement("div");
    div2 = document.createElement("div");
    div.classList.add("circle");
    div2.classList.add("box");
    document.querySelector("#artwork9").appendChild(div);
    document.querySelector("#artwork9").appendChild(div2);
    div.style.height = i + "px";
    div.style.width = i + "px";
    div2.style.height = i + "px";
    div2.style.width = i + "px";
  }
}
