const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]
    
let generateBtnEl = document.getElementById("generate-btn")
let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")
let pass1SpanEl = document.getElementById("pass1-span")
let pass2SpanEl = document.getElementById("pass2-span")
let passLengthEl = document.getElementById("pass-length")
let symbolsEl = document.getElementById("symbols-input")
let numbersEl = document.getElementById("numbers-input")

generateBtnEl.addEventListener("click", function () { generatePasswords() })
pass1El.addEventListener("click", function () {
    pass1El.select();
    document.execCommand("copy");
    pass1SpanEl.classList.remove("invisible")
    pass2SpanEl.classList.add("invisible")
})

pass2El.addEventListener("click", function () {
    pass2El.select();
    document.execCommand("copy");
    pass2SpanEl.classList.remove("invisible")
    pass1SpanEl.classList.add("invisible")
})

function generatePasswords() {

    let passLength = 18
    let characters = letters
    
    if (passLengthEl.value !== "" && passLengthEl.value > 0  && passLengthEl.value < 19) passLength = passLengthEl.value
    
    if(symbolsEl.checked) characters = [...characters, ...symbols]
    if(numbersEl.checked) characters = [...characters, ...numbers]
    
    pass1El.removeAttribute("disabled")
    pass2El.removeAttribute("disabled")
    pass1SpanEl.classList.add("invisible")
    pass2SpanEl.classList.add("invisible")

    let pass1 = ""
    let pass2 = ""

    for (let i = 0; i < passLength; i++) {

        pass1 += characters[Math.floor(Math.random() * characters.length)]
        pass2 += characters[Math.floor(Math.random() * characters.length)]
        pass1El.value = pass1
        pass2El.value = pass2
    }
}
