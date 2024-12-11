function adult() {
    let age = Number(document.querySelector("#age").value);
    let confirm = document.querySelector(".check");

    console.log(age);

    if (age >= 18) {
        confirm.innerHTML = `<p>You made it!</p>`;
    } else {
        confirm.innerHTML = `<p>Sorry! You're underage!</p>`;
    }
}