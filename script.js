const buttons = document.querySelectorAll("button");
const ergebnis = document.querySelector(".ergebnis");

const operatoren = [ "=", "%", "+", "*", "/", "-"];
let ausgabe = "";

const berechnen = (valueBtn) => {
            if(valueBtn === "=" && ausgabe !== ""){
                ausgabe = eval(ausgabe.replace("%", "/100"))
            }else if(valueBtn === "AC"){
                ausgabe = "";
            }else if(valueBtn === "DEL"){
                ausgabe = ausgabe.toString().slice(0, -1);
            }else{
                if(ausgabe === "" && operatoren.includes(valueBtn)) return;
                ausgabe += valueBtn;
            }
        ergebnis.value = ausgabe;
}


buttons.forEach((button) => {
    button.addEventListener("click", (e) => berechnen(e.target.dataset.value));
});