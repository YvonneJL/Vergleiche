function checkAirQuality() {
    let range = Number(document.querySelector("#air-condition").value);
    const body = document.querySelector("body");
    let concern = document.querySelector(".concern");
    let effect = document.querySelector(".effect");
    let airquality = document.querySelector("h3");

    if (range <= 55) {
        body.style.backgroundColor = "green";
        concern.innerHTML = `<p>Level of health concern: Good</p>`;
        effect.innerHTML = `<p>Level of health effect: Little or no risk</p>`;
        airquality.innerText = `Luftqualität: <= 55`
    } else if (range <= 105) {
        body.style.backgroundColor = "yellow";
        concern.innerHTML = `<p>Level of health concern: Moderate</p>`;
        effect.innerHTML = `<p>Level of health effect: Acceptable quality</p>`;
        airquality.innerText = `Luftqualität: <= 105`
    } else {
        body.style.backgroundColor = "orange";
        concern.innerHTML = `<p>Level of health concern: Unhealthy for sensitive groups</p>`;
        effect.innerHTML = `<p>Level of health effect: Generable publics not likely affected</p>`;
        airquality.innerText = `Luftqualität: <= 150`
    }
}