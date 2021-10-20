const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos y requiere solo 20 caracteres como max.
    num: /^\d{1,2}$/, //solo números
}

export const validate = (input) => {
    let errors = {};

/* EL ORDEN DE CONDICIONNALES ES SUMAMENTE IMPORTANTE PORQUE SINO NO SE RENDERIZA LO DESEADO */

    /* Verificacion de nombre de raza__________ */
    if (!input.name) {
        errors.name = 'Breed name is required';
    } else if (!expresiones.name.test(input.name)) {
        errors.name = 'Only letters and a maximum of 20 characters are allowed';
    }

    /* Verificacion de altura mínima________ */
    else if (!input.height_min) {
        errors.height_min = 'A maximum minimum height of two digits is required';
    } else if (!expresiones.num.test(input.height_min)) {
        errors.height_min = 'Only numbers and/or positives are allowed';
    }


    /* Verificacion de altura máxima__________ */
    else if (!input.height_max) {
        errors.height_max = 'A maximum height of two digits is required'
    } else if (!expresiones.num.test(input.height_max)) {
        errors.height_max = 'Only numbers and/or positives are allowed';
    } else if (parseInt(input.height_min) >= parseInt(input.height_max)) {
        errors.height_max = 'The maximum height cannot be less than or equal to the minimum height';
    }


    /* Verificacion de peso mínimo__________ */
    else if (!input.weight_min) {
        errors.weight_min = 'Minimum weight required';
    } else if (!expresiones.num.test(input.weight_min)) {
        errors.weight_min = 'Only numbers and / or positives are allowed';
    }

    /* Verificacion de peso máximo______________ */
    else if (!input.weight_max) {
        errors.weight_max = 'Maximum weight required';
    } else if (!expresiones.num.test(input.weight_max)) {
        errors.weight_max = 'Only numbers and/or positives are allowed';
    } else if (parseInt(input.weight_min) >= parseInt(input.weight_max)) {
        errors.weight_max = 'The maximum weight cannot be less than or equal to the minimum weight';
    } 
    
    
    /* Verificacion de año de vida________________ */
    else if (!input.life_span) {
        errors.life_span = 'The range of years of life is required';
    }

    /* Verificacion de la imagen */
    else if (!input.image) {
        errors.image = 'A URL is required for the image';
    }

    return errors;

}