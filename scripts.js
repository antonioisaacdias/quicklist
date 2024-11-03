const newItem = document.querySelector("#new-item");
const list = document.querySelector("ul");
const form = document.querySelector("form");
const warning = document.querySelector(".warning-wrapper");
const warningBtnClose = document.querySelector(".warning-wrapper button");
const alertBox = document.querySelector(".alert");
const alertBoxBtnClose = document.querySelector(".alert-box button")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (newItem.value == "") {
        alertBox.style.display = "flex";
    } else {
            
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const checkImage = document.createElement("span");
    checkImage.classList.add("check-image");

    const checkWrapper = document.createElement("span");
    checkWrapper.classList.add("check-wrapper");
    checkWrapper.append(checkbox, checkImage);

    const p = document.createElement("p");
    p.textContent = newItem.value;

    const button = document.createElement("button");
    button.addEventListener("click", (event) => {
        button.parentElement.remove();
        warning.style.display = "flex";
    });

    li.append(checkWrapper, p, button);

    list.append(li);

    newItem.value = "";

    }
});

warningBtnClose.addEventListener("click", function() {
    warning.style.display = "none";
});

alertBoxBtnClose.addEventListener("click", function() {
    alertBox.style.display = "none";
})






