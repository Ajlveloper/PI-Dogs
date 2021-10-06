
const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    num: /^\d{1,2}$/, //solo números
}



export const validate = (input) => {
    let errors = {};

/* EL ORDEN DE CONDICIONNALES ES SUMAMENTE IMPORTANTE PORQUE SINO NO SE RENDERIZA LO DESEADO */

    /* Verificacion de nombre de raza__________ */
    if (!input.name) {
        errors.name = 'Se requiere el nombre de la raza';
    } else if (!expresiones.name.test(input.name)) {
        errors.name = 'Solo se permiten Letras y un máximo de 20 caracteres';
    }

    /* Verificacion de altura mínima________ */
    else if (!input.height_min) {
        errors.height_min = 'Se requiere una altura mínima máximo de dos dígitos';
    } else if (!expresiones.num.test(input.height_min)) {
        errors.height_min = 'Solo se permiten números y/o positivos';
    }


    /* Verificacion de altura máxima__________ */
    else if (!input.height_max) {
        errors.height_max = 'Se requiere una altura máxima de dos dígitos'
    } else if (!expresiones.num.test(input.height_max)) {
        errors.height_max = 'Solo se permiten números y/o positivos';
    } else if (input.height_min >= input.height_max) {
        errors.height_max = 'La altura máxima no puede ser menor o igual que la altura mínima';
    }


    /* Verificacion de peso mínimo__________ */
    else if (!input.weight_min) {
        errors.weight_min = 'Se requiere un peso mínimo';
    } else if (!expresiones.num.test(input.weight_min)) {
        errors.weight_min = 'Solo se permiten números y/o positivos';
    }

    /* Verificacion de peso máximo______________ */
    else if (!input.weight_max) {
        errors.weight_max = 'Se requiere un peso máximo';
    } else if (!expresiones.num.test(input.weight_max)) {
        errors.weight_max = 'Solo se permiten números y/o positivos';
    } else if (input.weight_min >= input.weight_max) {
        errors.weight_max = 'El peso máximo no puede ser menor o igual que el peso mínimo';
    } 
    
    
    /* Verificacion de año de vida________________ */
    else if (!input.life_span) {
        errors.life_span = 'Se requiere el rango de años de vida';
    }

    /* Verificacion de la imagen */
    else if (!input.image) {
        errors.image = 'Se requiere una URL para la imagen';
    }

    return errors;

}