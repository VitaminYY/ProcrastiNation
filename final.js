

let excuses = [
      "The dog ate my Zoom link.",
  "I was busy alphabetizing my feelings.",
  "Gravity stopped working in my room.",
  "My laptop joined a union and went on strike.",
  "I accidentally outsourced my homework to a toddler.",
  "The deadline and I are in a long-distance relationship.",
  "I couldn’t start—my horoscope said Mercury was lazy today.",
  "My chair refused to support me emotionally.",
  "I was waiting for divine inspiration, but it ghosted me.",
  "My notes are written in invisible ink… I swear.",
  "I spent three hours arguing with my reflection and lost.",
  "I was hacked by someone who hates productivity.",
  "My alarm clock filed for bankruptcy.",
  "I started, but then I remembered naps exist.",
 "A time traveler borrowed my homework and never came back.",
  "My laptop joined a cult and refused to turn on.",
  "Gravity stopped working for a while, so everything just floated away.",
  "I accidentally deleted the concept of responsibility.",
  "The deadline saw me coming and ran off.",
  "My goldfish needed emotional support, all night.",
  "The sun was in my eyes. Indoors.",
  "Aliens asked for my password. I couldn’t say no.",
  "I got stuck in a loading screen in real life.",
  "The printer printed my resignation instead.",
  "My shadow went on strike, I couldn’t function alone.",
  "I was kidnapped by Netflix autoplay.",
  "My brain scheduled a meeting with itself and never showed up.",
  "The calendar gaslighted me: said today was yesterday."
];


let btnExcuse = document.getElementById("btnExcuse");


let modal = document.createElement("div");
modal.id = "excuseModal";
modal.innerHTML = `
  <div class="modal-content big">
    <span id="closeModal">&times;</span>
    <h2>Your Perfect Excuse:</h2>
    <p id="excuseText"></p>
  </div>
`;
document.body.appendChild(modal);

let closeModal = document.getElementById("closeModal");
let excuseText = document.getElementById("excuseText");


btnExcuse.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * excuses.length);
  excuseText.textContent = excuses[randomIndex];
  modal.style.display = "flex"; // center modal
});


closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});


let btnMedal = document.getElementById("btnMedal");
let toast = document.getElementById("toast");

btnMedal.addEventListener("click", function () {
  toast.textContent = "🥇 Congrats! You are now a Legendary Procrastinator.";
  toast.hidden = false;
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
    toast.hidden = true;
  }, 3000); 
});



let btnDelay = document.getElementById("btnDelay"); 
let delayWeeks = 32; 

btnDelay.addEventListener("click", function () { 
  delayWeeks += 10; 
  btnDelay.textContent = `Delay for ${delayWeeks} weeks`; 
});
