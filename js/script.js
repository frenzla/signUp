let psw1 = document.getElementById("psw");
let psw2 = document.getElementById("confirm_psw");
let errorSpace = document.getElementById("confirm_pswError");

psw2.addEventListener("change",checkPsw);

function checkPsw() {
if (psw1.value === psw2.value) {
    errorSpace.textContent = "";
} else {
  errorSpace.textContent = "Password doesn't match";
};
}