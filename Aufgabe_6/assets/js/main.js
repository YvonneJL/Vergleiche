
function shisha() {
    event.preventDefault();
    let age = Number(document.querySelector("#age").value);
    let confirm = document.querySelector(".check");

    console.log(age);

    if (age >= 18) {
        confirm.innerHTML = `<p>Du darfst Shisha rauchen</p>`;
    } else {
        confirm.innerHTML = `<p>Sorry! Du darfst keine Shisha rauchen</p>`;
    }
}


// -->event.preventDefault() verhindert hier, dass das Dokument abgeschickt wird