

function weather() {
    let qualityNumber = Number(document.querySelector("#weather-condition").value);
    let evaluation = document.querySelector(".result-weather");

    console.log(qualityNumber);

    if (qualityNumber >= 8) {
         evaluation.innerHTML = `<p>Super</p>`;
    } else if (qualityNumber >= 6) {
        evaluation.innerHTML = `<p>Gut</p>`;
    } else if (qualityNumber >= 3) {
        evaluation.innerHTML = `<p>Okay</p>`;
    }  else {
        evaluation.innerHTML = `<p>Schlecht</p>`;
    }
       
}