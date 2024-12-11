let newContent = [
  "I know now what the DOM is 🙌",
  "I know how to access / select elements in the DOM. 👊🏿",
  "I know how to use the style methods to change the style of an element in the DOM! ✅",
  "I know how the styling properties differ in JS from CSS 👍",
  "Yes! I did it! I manipulated the DOM and styled my elements 🤩🤩🤩🤩"
];


let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");
let line5 = document.getElementById("line5");


line1.addEventListener("click", () => {
  line1.textContent = newContent[0];
  line1.className = "line after-line-1";
});

line2.addEventListener("dblclick", () => {
  line2.textContent = newContent[1];
  line2.className = "line after-line-2";
});


line3.addEventListener("mouseover", () => {
  line3.textContent = newContent[2];
  line3.className = "line after-line-3";
});


line4.addEventListener("click", () => {
  line4.textContent = newContent[3];
  line4.className = "line after-line-4";
});


line5.addEventListener("dblclick", () => {
  line5.textContent = newContent[4];
  line5.className = "line after-line-5";
});


let showImageBtn = document.getElementById("showImageBtn");
let hideImageBtn = document.getElementById("hideImageBtn");
let imageContainer = document.getElementById("imageContainer");


showImageBtn.addEventListener("click", () => {
  imageContainer.style.display = "block";
  showImageBtn.style.display = "none";
  hideImageBtn.style.display = "inline-block";
});


hideImageBtn.addEventListener("click", () => {
  imageContainer.style.display = "none";
  showImageBtn.style.display = "inline-block";
  hideImageBtn.style.display = "none";
});
  





 