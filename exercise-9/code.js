const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
        resultado.classList.remove("green");
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
});

const validarCampos = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const materia = document.getElementById("materia").value.trim();

    let error = [];

    if (nombre.length < 5) {
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 caracteres";
        return error;
    } else if (nombre.length > 40) {
        error[0] = true;
        error[1] = "El nombre no puede contener más de 40 caracteres";
        return error;
    } else if (
        email.length < 5 ||
        email.length > 40 ||
        email.indexOf("@") === -1 ||
        email.indexOf(".") === -1
    ) {
        error[0] = true;
        error[1] = "El mail es inválido";
        return error;
    } else if (materia.length < 4 || materia.length > 40) {
        error[0] = true;
        error[1] = "La materia no existe";
        return error;
    }

    error[0] = false;
    return error;
};
