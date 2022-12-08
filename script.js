let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");

submit.addEventListener("click", storeInfo);


function storeInfo () {
    let objectInfo = {
        nameS : name.value,
        emailS : email.value,
        messageS : message.value
    }
    let user = localStorage.setItem("user", JSON.stringify(objectInfo));
}

let pastLog = localStorage.getItem("user");
console.log(JSON.parse(pastLog))
