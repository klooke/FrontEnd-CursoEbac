let form = document.querySelector("form")
let num_a = document.getElementById("field_a");
let num_b = document.getElementById("field_b");
let val_msg = document.getElementById("msg");

function clearMessage() {
    val_msg.classList = [];
    val_msg.innerText = "";
}

function showMessage(className, message) {
    clearMessage();

    val_msg.classList.add(className);
    val_msg.innerText = message;
}

function onInvalid(event) {
    event.target.classList.add("incorrect-input");
}

function onInput(event) {
    event.target.classList.remove("incorrect-input");
    
    clearMessage();
}

num_a.addEventListener("invalid", onInvalid);
num_b.addEventListener("invalid", onInvalid);

num_a.addEventListener("input", onInput);
num_b.addEventListener("input", onInput);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (parseInt(num_b.value) <= parseInt(num_a.value)) {
        showMessage("incorrect-msg", "Inválido: o valor de B tem que ser maior que o valor de A.");
    } else {
        showMessage("correct-msg", "Válido: o valor de B é maior que o valor de A.");
    }
})