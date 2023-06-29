export function valida(input){
        const tipoDeInput = input.dataset.tipo;
        if (validadores[tipoDeInput]) {
            validadores[tipoDeInput](input);
        }

        if (input.validity.valid) {
            input.parentElement.classList.remove("input-container--invalid");
            input.parentElement.querySelector(".input-message-error").innerHTML ="";
        }else{
            input.parentElement.classList.add("input-container--invalid");
            input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
        }

};


const mensajesDeError={
    nombre:{
        valueMissing:"Este campo no puede estar vacio"
    },
    email:{
        valueMissing:"Este campo no puede estar vacio",
        typeMismatch:"El correo no es valido"
    },
    password:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"Al menos 6 caracteres,maximo 12  debe contener una letra minuscula,una letra mayuscula, un numero y no puede contener caracteres especiales"
    },
    nacimiento:{
        valueMissing:"Este campo no puede estar vacio",
        customError:"Dedes ser mayor de 18 años"
    },

};

const validadores ={
    nacimiento: input =>validarNacimiento(input)
};


function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje =""

    return mensaje
}



function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje ="";
    if(!mayorDeEdad(fechaCliente)){
        mensaje ="Dedes ser mayor de 18 años";
    }else{}

    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear()+18,
        fecha.getUTCMonth(),
        fecha.getUTCDate());
    return diferenciaFechas < fechaActual;
}