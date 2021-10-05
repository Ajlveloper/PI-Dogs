
const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    num: /^\d{1,2}$/, //solo números
    alt: /^.{2}$/, // 1 a 2 digitos.
    pes: /^.{1,2}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


export const validate = (input) => {
    let errors = {};

    /* Verificacion de nombre de raza__________ */
    if (!input.name) {
        errors.name = 'Se requiere el nombre de la raza';
    } else if (!expresiones.name.test(input.name)) {
        errors.name = 'Solo se permiten Letras y un máximo de 20 caracteres';
    }

    /* Verificacion de altura mínima________ */
    else if (!input.altMin) {
        errors.altMin = 'Se requiere una altura mínima máximo de dos dígitos';
    } else if (!expresiones.num.test(input.altMin)) {
        errors.altMin = 'Solo se permiten números y/o positivos';
    }


    /* Verificacion de altura máxima__________ */
    else if (!input.altMax) {
        errors.altMax = 'Se requiere una altura máxima de dos dígitos'
    } else if (!expresiones.num.test(input.altMax)) {
        errors.altMax = 'Solo se permiten números y/o positivos';
    } else if (input.altMin >= input.altMax) {
        errors.altMax = 'La altura máxima no puede ser menor o igual que la altura mínima';
    }


    /* Verificacion de peso mínimo__________ */
    else if (!input.pesMin) {
        errors.pesMin = 'Se requiere un peso mínimo';
    } else if (!expresiones.num.test(input.pesMin)) {
        errors.pesMin = 'Solo se permiten números y/o positivos';
    }

    /* Verificacion de peso máximo______________ */
    else if (!input.pesMax) {
        errors.pesMax = 'Se requiere un peso máximo';
    } else if (!expresiones.num.test(input.pesMax)) {
        errors.pesMax = 'Solo se permiten números y/o positivos';
    } else if (input.pesMin >= input.pesMax) {
        errors.pesMax = 'El peso máximo no puede ser menor o igual que el peso mínimo';
    }

    return errors;

}