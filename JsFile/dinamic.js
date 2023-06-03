const passwordInput = document.querySelector(".password-box input"),
    copyInput = document.querySelector(" .copy-icon"),
    rangeInput = document.querySelector(".range-box input"),
    slideNumber = document.querySelector(".range-box .slider-number")
generateButton = document.querySelector(".generate-button");
svg = document.querySelector('svg')
// Characters of [alphabet], number[0-9], and Symbols[]
let allCharacters = "abcdefghijklmnopqrstuvwxzABCEFGHIJKLMNOPQRSTUVWYZ0123456789^$%&|[](){}:;./*+-#@<>~";
const generatePassword = () => {
    let newPassword = "";

    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumbers = Math.floor(Math.random() * allCharacters.length)
        newPassword += allCharacters[randomNumbers]
    }
    passwordInput.value = newPassword;
}
rangeInput.addEventListener("input", () => {
    slideNumber.innerText = rangeInput.value;
    generatePassword()
});
copyInput.addEventListener('click', ()=> {
    navigator.clipboard.writeText(passwordInput.value)
    svg.addEventListener('click', ()=> {
    svg.style.opacity = ".5"
    })
})
generatePassword()
generateButton.addEventListener("click", generatePassword);
