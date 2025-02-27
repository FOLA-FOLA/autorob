const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");
        
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
});
        
// Close mobile menu when clicking on overlay
overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
});
        
// Close mobile menu when clicking on a nav link
document.querySelectorAll("nav ul li a").forEach(link => 
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
    })
);

const contactDialog = document.getElementById("confirm-dialog");
const sendButton = document.getElementById("send-message");

contactDialog.addEventListener("click", function (event) {
  if (event.target !== contactDialog) {
    return;
  }
  console.log(event.target.tagName);
  if (
    event.offsetX < 0 ||
    event.offsetX > event.target.offsetWidth ||
    event.offsetY < 0 ||
    event.offsetY > event.target.offsetHeight
  ) {
    closeContactForm();
  }
});

function showContactForm() {
  contactDialog.style.clipPath = "unset";
  contactDialog.showModal();
  contactDialog.style.transform = "scale(1)";
}
function closeContactForm() {
  contactDialog.style.clipPath = "unset";
  contactDialog.style.transform = "scale(0)";
  contactDialog.close();
  sendButton.classList.remove("spinner");
  sendButton.classList.add("hover-effect");
}
function showShowcase() {
  location.hash = "#portfolio";
  document.getElementById("portfolio").scrollIntoView();
}

//only used to get path length for animation.
const logo = document.querySelectorAll("#big-circle");
for (let i = 0; i < logo.length; i++) {
  console.log(logo[i].getTotalLength());
}

sendButton.addEventListener("click", (e) => {
  /*let offsetTop = e.target.offsetTop;
           let offsetLeft = e.target.offsetLeft;
           let offsetHeight = e.target.offsetHeight;*/
  let { offsetLeft, offsetTop, offsetHeight, offsetWidth } = e.target;
  let strClipPath =
    "polygon(" +
    offsetLeft +
    "px " +
    offsetTop +
    "px, " +
    (offsetLeft + offsetWidth + 5) +
    "px " +
    offsetTop +
    "px, " +
    (offsetLeft + offsetWidth + 5) +
    "px " +
    (offsetTop + offsetHeight + 5) +
    "px, " +
    offsetLeft +
    "px " +
    (offsetTop + offsetHeight + 5) +
    "px)";
  contactDialog.style.clipPath = strClipPath;
  contactDialog.style.transform = "translate(-25%, -25%)";

  sendButton.classList.remove("hover-effect");
  sendButton.classList.add("spinner");
  setTimeout(closeContactForm, 1500);
});