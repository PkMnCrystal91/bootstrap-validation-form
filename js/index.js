// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

/* BARCODE */
const cardNumber = document.querySelector("#card-number");
cardNumber.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cardNumberText.innerText = "1234 5678 9101 1121";
  } else {
    const valuesOfInput = e.target.value.replaceAll(" ", "");

    if (e.target.value.length > 14) {
      e.target.value = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3 $4"
      );
    } else if (e.target.value.length > 9) {
      e.target.value = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3"
      );
    } else if (e.target.value.length > 4) {
      e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
    } else {
      cardNumberText.innerHTML = valuesOfInput;
    }
  }
});

function mostrarTextoLabel() {
  let checkbox = document.getElementById("invalidCheck");
  let textoLabel = document.getElementById("textoLabel");

  if (checkbox.checked) {
    textoLabel.style.display = "block"; // Mostrar el texto
  } else {
    textoLabel.style.display = "none"; // Ocultar el texto
  }
}

function borrarCampos() {
  let formulario = document.getElementById("miFormulario");

  for (let i = 0; i < formulario.elements.length; i++) {
    let elemento = formulario.elements[i];

    if (
      elemento.type === "text" ||
      elemento.type === "password" ||
      elemento.tagName === "TEXTAREA"
    ) {
      elemento.value = "";
    }

    // Verificar si es una casilla de verificación o botón de radio
    else if (elemento.type === "checkbox" || elemento.type === "radio") {
      elemento.checked = false;
    } else if (elemento.tagName === "SELECT") {
      elemento.selectedIndex = 0;
    }
  }

  let textoLabel = document.getElementById("textoLabel");
  textoLabel.style.display = "none";
}
