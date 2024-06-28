export const customErrors = {
    maxLength: (value, maxSize) => value.length > parseInt(maxSize)
  }
  
  export const tiposDeError =[
      "valueMissing", 
      "typeMissmatch",
      "patternMissmatch",
      "tooShort",
      "customErrors",
  ];
  
  export const mensajes = {
      nombre: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "Ingrese un nombre válido.",
        tooShort: "Por favor, ingrese un nombre válido.",
      },
      email: {
        valueMissing: "Este campo no puede estar vacío.",
        typeMismatch: "Ingrese un email válido.",
        tooShort: "Por favor, ingrese un e-mail válido.",
      },
      input: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "El campo no tiene caracteres suficientes.",
        tooShort: "El campo no tiene caracteres suficientes.",
        customErrors: "Ha excedido el número de caracteres.",
      },
      mensaje: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "El campo no tiene caracteres suficientes.",
        tooShort: "El campo no tiene caracteres suficientes.",
        customErrors: "Ha excedido el número de caracteres.",
      },
      terminos: {
        valueMissing: "Debes aceptar los términos antes de continuar.",
      },
    };
    
  