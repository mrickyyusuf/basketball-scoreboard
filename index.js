/*
1. watch this instruction of project (7:03:08) https://youtu.be/LzMnsfqjzkA?si=2nWm9BM6brYA4Lsi
2. watch this figma tutorial https://youtu.be/fZ-OU_7aBv4?si=VLUW6vdtWZaatiDj
3. paste this design in figma to css https://www.figma.com/design/YC48MCx4frBFtYoz6rNJE6/Basketball-Scoreboard?node-id=0-1&p=f&t=oXsYOczQZz3clH8T-0
4. start code this solo project basketball scoreboard!
5. improve to complex code (don't mind to googling/ai prompting!)
*/

const home = document.getElementById("hm-score");
const guest = document.getElementById("gst-score");
const plusOneHome = document.getElementById("plus-one-point-home");
const plusTwoHome = document.getElementById("plus-two-point-home");
const plusThreeHome = document.getElementById("plus-three-point-home");
const plusOneGuest = document.getElementById("plus-one-point-guest");
const plusTwoGuest = document.getElementById("plus-two-point-guest");
const plusThreeGuest = document.getElementById("plus-three-point-guest");
let counterHome = 0;
let counterGuest = 0;

plusOneHome.addEventListener("click", () => {
  counterHome++;
  home.textContent = counterHome;
});

plusTwoHome.addEventListener("click", () => {
  counterHome++;
  counterHome++;
  home.textContent = counterHome;
});

plusThreeHome.addEventListener("click", () => {
  counterHome++;
  counterHome++;
  counterHome++;
  home.textContent = counterHome;
});

plusOneGuest.addEventListener("click", () => {
  counterGuest++;
  guest.textContent = counterGuest;
});
plusTwoGuest.addEventListener("click", () => {
  counterGuest++;
  counterGuest++;
  guest.textContent = counterGuest;
});

plusThreeGuest.addEventListener("click", () => {
  counterGuest++;
  counterGuest++;
  counterGuest++;
  guest.textContent = counterGuest;
});
