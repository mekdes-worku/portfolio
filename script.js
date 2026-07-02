console.log("portofolio loaded successfully");
const developerName = "Mekdes Worku";
const profession = "frontend Web Develper";
const heading = document.getElementById("developer-name");
console.log(heading);
console.log(profession);
heading.textContent = `Hi, I,m ${developerName} | ${profession}`;
function showWelcomeMessage(name) {
    alert("Hello Mekdes Worku");
    alert( name);
}
//showWelcomeMessage();
const downloadButton = document.getElementById("download-btn"); 
downloadButton.addEventListener("click" , function(event) {
    event.preventDefault();
    showWelcomeMessage("Welcome to my Portfolio");
});
const themeButton =document.getElementById("theme-btn");
themeButton.addEventListener("click" , function () {
    document.body.classList.toggle("dark-mode");   
}) ;
const typingText = document.getElementById("typing-text");
const professions = ["Computer Science Student","Frontend Web Developer","Future Freelancer"];
let index = 0;
function changeProfession() {
    typingText.textContent = professions[index];
    index++;
    if (index >= professions.length){
        index=0;
    }
}
changeProfession();
setInterval(changeProfession,2000);
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit" , function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
        alert("please fill in all fields.");
    } else {
        alert("Message sent successfully!");
    }
});
console.log(contactForm);
const hiddenSections = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
hiddenSections.forEach(function(section){
    observer.observe(section);
});



