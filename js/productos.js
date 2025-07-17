const firebaseConfig = {
    apiKey: "AIzaSyACm2yHbdzADhcSYFZnSRvLY3b256SbXBI",
    authDomain: "luxdrive-66a6c.firebaseapp.com",
    projectId: "luxdrive-66a6c",
    storageBucket: "luxdrive-66a6c.firebasestorage.app",
    messagingSenderId: "1088365740332",
    appId: "1:1088365740332:web:efa1a35660d86ae31aec89"
};

//INICIAR FIREBASE
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


//tabla
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputCedula = document.querySelector('#cedula');
const inputTelefono = document.querySelector('#telefono');
const inputEmail = document.querySelector('#email');
const inputDireccion = document.querySelector('#direccion');
const inputAuto = document.querySelector('#auto');
const inputPago = document.querySelectorAll('input[name="pago"]');

const formulario = document.querySelector('#formulario');
const botonEnviar = document.querySelector('#boton_enviar');
const registroExitoso = document.querySelector('#registroExitoso');

//errores
const errorNombre = document.querySelector('#errorNombre');
const errorApellido = document.querySelector('#errorApellido');
const errorCedula = document.querySelector('#errorCedula');
const errorTelefono = document.querySelector('#errorTelefono');
const errorEmail = document.querySelector('#errorEmail');
const errorDireccion = document.querySelector('#errorDireccion');
const errorAuto = document.querySelector('#errorAuto');
const errorPago = document.querySelector('#errorPago');

botonEnviar.onmouseenter = () => {
    botonEnviar.style.backgroundColor = "orange";
    botonEnviar.style.color = "white";
};

botonEnviar.onmouseleave = () => {
    botonEnviar.style.backgroundColor = "grey";
    botonEnviar.style.color = "black";
};

const validarNombre = () => {
    const regexNombre = /^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú]+[\s]*)+$/;
    if (inputNombre.value.trim() === "" || !regexNombre.test(inputNombre.value)) {
        errorNombre.textContent = "El nombre es obligatorio y debe contener solo letras";
        inputNombre.classList.add("invalido"); //agrega la clase invalido
        inputNombre.classList.remove("valido"); //remueve la clase valido
        return false; //retorna falso
    } else {
        errorNombre.textContent = "";
        inputNombre.classList.add("valido"); //agregar la clase valido
        inputNombre.classList.remove("invalido"); //remueve la calse invalido
        return true; //retorna verdadero
    }
};

const validarApellido = () => {
    const regexApellido = /^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú]+[\s]*)+$/;
    if (inputApellido.value.trim() === "" || !regexApellido.test(inputApellido.value)) {
        errorApellido.textContent = "El apellido es obligatorio y debe contener solo letras";
        inputApellido.classList.add("invalido");
        inputApellido.classList.remove("valido");
        return false;
    } else {
        errorApellido.textContent = "";
        inputApellido.classList.add("valido");
        inputApellido.classList.remove("invalido");
        return true;
    }
};

const validarCedula = () => {
    const regexCedula = /^\d{10}$/;
    if (inputCedula.value.trim() === "" || !regexCedula.test(inputCedula.value)) {
        errorCedula.textContent = "La cédula es obligatoria y debe contener solo números";
        inputCedula.classList.add("invalido");
        inputCedula.classList.remove("valido");
        return false;
    } else {
        errorCedula.textContent = "";
        inputCedula.classList.add("valido");
        inputCedula.classList.remove("invalido");
        return true;
    }
};
const validarTelefono = () => {
    const regexTelefono = /^\d{10}$/;
    if (inputTelefono.value.trim() === "" || !regexTelefono.test(inputTelefono.value)) {
        errorTelefono.textContent = "El teléfono es obligatorio y debe contener solo números";
        inputTelefono.classList.add("invalido");
        inputTelefono.classList.remove("valido");
        return false;
    } else {
        errorTelefono.textContent = "";
        inputTelefono.classList.add("valido");
        inputTelefono.classList.remove("invalido");
        return true;
    }
};

const validarEmail = () => {
    const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(inputEmail.value)) {
        errorEmail.textContent = "Correo es obligatorio";
        inputEmail.classList.add("invalido"); //agregar la clase invalido
        inputEmail.classList.remove("valido"); //remueve la calse valido
        return false; //retorna falso
    } else {
        errorEmail.textContent = "";
        inputEmail.classList.add("valido"); //agregar la clase valido
        inputEmail.classList.remove("invalido"); //remueve la calse invalido
        return true; //retorna verdadero
    }
};

const validarDireccion = () => {

    if (inputDireccion.value.trim() === "") {
        errorDireccion.textContent = "La dirección es obligatoria Ejm: Quito";
        inputDireccion.classList.add("invalido"); //agregar la clase invalido
        inputDireccion.classList.remove("valido"); //remueve la calse valido
        return false; //retorna falso
    } else {
        errorDireccion.textContent = "";
        inputDireccion.classList.add("valido"); //agregar la clase invalido
        inputDireccion.classList.remove("invalido"); //remueve la calse valido
        return true; //retorna verdadero
    }
};

const validarAuto = () => {

    if (inputAuto.value === 'SELECCIONE') {
        errorAuto.textContent = "Seleccione un auto";
        inputAuto.classList.add("invalido");
        inputAuto.classList.remove("valido");
        return false;
    } else {
        errorAuto.textContent = "";
        inputAuto.classList.add("valido");
        inputAuto.classList.remove("invalido");
        return true;
    }
};

const validarPago = () => {
    const seleccionado = Array.from(inputPago).some(radio => radio.checked);

    if (!seleccionado) {
        errorPago.textContent = 'Selecione una forma de pago';
        inputPago.forEach(radio => {
            radio.classList.add('invalido');
            radio.classList.remove('valido');
        });
        return false;
    } else {
        errorPago.textContent = '';
        inputPago.forEach(radio => {
            radio.classList.add('valido');
            radio.classList.remove('invalido');
        });
        return true;
    }
};

const validarFormulario = () => {
    if (validarNombre() && validarApellido() && validarCedula() && validarTelefono() && validarEmail() && validarDireccion() && validarAuto() && validarPago()) {
        botonEnviar.disabled = false;
        return true
    } else {
        botonEnviar.disabled = true;
        return false
    }
};

inputNombre.addEventListener('input', () => {
    validarNombre();
    validarFormulario();
});

inputApellido.addEventListener('input', () => {
    validarApellido();
    validarFormulario();
});

inputCedula.addEventListener('input', () => {
    validarCedula();
    validarFormulario();
});

inputTelefono.addEventListener('input', () => {
    validarTelefono();
    validarFormulario();
});

inputEmail.addEventListener('input', () => {
    validarEmail();
    validarFormulario();
});

inputDireccion.addEventListener('input', () => {
    validarDireccion();
    validarFormulario();
});

inputAuto.addEventListener('change', () => {
    validarAuto();
    validarFormulario();
});

inputPago.forEach(radio => {
    radio.addEventListener('change', () => {
        validarPago();
        validarFormulario();
    });
});

// Guardar los datos de la reserva
const agregarReserva = async (cliente) => {
    try {
        await db.collection("clientes").add(cliente);
    } catch (error) {
        console.error("Error al guardar", error);
    }
};


botonEnviar.onclick = async (event) => {
    event.preventDefault();
    if (!validarFormulario()) {
        registroExitoso.textContent = ''; // Limpia mensaje si hay error
        return;
    }

    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let cedula = document.getElementById('cedula').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let email = document.getElementById('email').value.trim();
    let direccion = document.getElementById('direccion').value.trim();
    let auto = document.getElementById('auto').value.trim();
    let pago = document.querySelector('input[name= "pago"]:checked')?.value.trim() || "No seleccionado";

    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${cedula}</td>
    <td>${telefono}</td>
    <td>${email}</td>
    <td>${direccion}</td>
    <td>${auto}</td>
    <td>${pago}</td>
    `;
    alert("Datos agregados a la tabla");
    document.querySelector("table tbody").appendChild(nuevaFila);

    // OBJETO CLIENTE
    const cliente = {nombre, apellido, cedula, telefono, email, direccion, auto, pago};
    // Decimos que espere y guarde en la base de datos
    await agregarReserva(cliente);



    const mensajeExitoso = document.querySelector('#registroExitoso');
    const enviarFormulario = async () => {
        //hace que siga ejecutandose el resto del programa
        mensajeExitoso.textContent = "Enviando..."
        //espera el tiempo para enviar el mensaje, hace que siga ejecutandose
        await new Promise(resolve => setTimeout(resolve, 150))
        mensajeExitoso.textContent = "Su reserva se agregó correctamente. Gracias!!";
        formulario.reset();
        inputNombre.classList.remove('valido');
        inputApellido.classList.remove('valido');
        inputCedula.classList.remove('valido');
        inputTelefono.classList.remove('valido');
        inputEmail.classList.remove('valido');
        inputDireccion.classList.remove('valido');
        inputAuto.classList.remove('valido');
        inputPago.forEach(radio => radio.classList.remove('valido', 'invalido'));
        botonEnviar.disabled = true;

    };
    enviarFormulario();

};

