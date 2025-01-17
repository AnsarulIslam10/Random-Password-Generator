const passwordBox = document.getElementById("password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "@#$%^&*(){}[]?/-=_+~"

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){

    copy.src = "images/copy.png"

    function getRandomLenght(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomLenght = getRandomLenght(8, 16);
    const lenght = randomLenght;

    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    copy.src = "images/check.png"
    passwordBox.value = ""; /*passwordBox will automatically be empty
                            after clicking on the copy icon*/
}