import { body, validationResult } from "express-validator";

export const validarSuperheroe = [
  // Valido que el nombreSuperHeroe no este vacio, tenga entre 3 y 60 caracteres y elmino blancos
  body("nombreSuperHeroe")
    .trim()
    .notEmpty()
    .withMessage("El nombre de superhéroe no puede estar vacio")
    .isLength({ min: 3, max: 60 })
    .withMessage(
      "El nombre del superhéroe debe tener entre 3 y 60 caracateres"
    ),

  // Valido que el nombreReal no este vacio, tenga entre 3 y 60 caracteres y elmino blancos
  body("nombreReal")
    .trim()
    .notEmpty()
    .withMessage("El nombre real del superhéroe no puede estar vacio")
    .isLength({ min: 3, max: 60 })
    .withMessage(
      "El nombre real del superhéroe debe tener entre 3 y 60 caracateres"
    ),

  // Valido que el nombreSociedad no este vacio, tenga entre 3 y 40 caracteres y elmino blancos
  body("nombreSociedad")
    .trim()
    .notEmpty()
    .withMessage("El nombre de la sociedad del superhéroe no puede estar vacio")
    .isLength({ min: 3, max: 40 })
    .withMessage(
      "El nombre de la sociedad debe tener entre 3 y 40 caracateres"
    ),

  // Validación que edad no este vacio, sea un entero mayor que 0, no tenga espacios y elimino blancos
  body("edad")
    .trim()
    .notEmpty()
    .withMessage("La edad es un campo obligatorio.")
    .isInt({ min: 0 })
    .withMessage("La edad debe ser un número entero y no puede ser negativa.")
    .custom((value) => {
      if (value.toString().includes(" ")) {
        throw new Error("La edad no debe contener espacios.");
      }
      return true;
    }),

  // Valido que el planetaOrigen no este vacio, tenga entre 3 y 40 caracteres y elmino blancos
  body("planetaOrigen")
    .trim()
    .notEmpty()
    .withMessage(
      "El nombre del planeta origen del superhéroe no puede estar vacio"
    )
    .isLength({ min: 3, max: 40 })
    .withMessage(
      "El nombre del planeta origen debe tener entre 3 y 40 caracateres"
    ),

  // Valido que la debilidad no este vacio, tenga entre 3 y 40 caracteres y elmino blancos
  body("debilidad")
    .trim()
    .notEmpty()
    .withMessage("La debilidad del superhéroe no puede estar vacio")
    .isLength({ min: 3, max: 40 })
    .withMessage("La debilidad debe tener entre 3 y 40 caracateres"),

  // Valido que  poderes sea un array de string no vacio
  // y que cada elemento no tenga blancos y una longitud entre 3 y 60 caracteres
  body("poderes")
    .isArray({ min: 1 })
    .withMessage(
      "Poderes es un campo obligatorio y debe ser un array con al menos un elemento string."
    )
    .custom((poderes) => {
      for (let poder of poderes) {
        if (typeof poder !== "string") {
          throw new Error("Cada poder debe ser un string.");
        }
        if (poder.length < 3 || poder.length > 60) {
          throw new Error("Cada poder debe tener entre 3 y 60 caracteres.");
        }
      }
      poderes = poderes.map((poder) => poder.trim()); // Elimina espacios en blanco de cada poder
      return true;
    }),
  (req, res, next) => {
    // Manejo de errores de validacion
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Fallo en la validación",
        errors: errors.array().map((error) => ({
          field: error.param,
          message: error.msg,
        })),
      });
    }
    // Si no hay errores, se llama al controlador para insertar superheroe
    next();
  },

  // Valido que la habilidadEspecial no este vacio, tenga entre 3 y 40 caracteres y elmino blancos
  body("habilidadEspecial")
    .trim()
    .notEmpty()
    .withMessage("La habilidad especial del superhéroe no puede estar vacio")
    .isLength({ min: 3, max: 40 })
    .withMessage("La habilidad especial debe tener entre 3 y 40 caracateres"),

  // Valido que  aliados sea un array de string no vacio
  // y que cada elemento no tenga blancos y una longitud entre 3 y 60 caracteres
  body("aliados")
    .isArray({ min: 1 })
    .withMessage(
      "Aliados es un campo obligatorio y debe ser un array con al menos un elemento string."
    )
    .custom((aliados) => {
      for (let aliado of aliados) {
        if (typeof aliado !== "string") {
          throw new Error("Cada aliado debe ser un string.");
        }
        if (aliado.length < 3 || aliado.length > 60) {
          throw new Error("Cada aliado debe tener entre 3 y 60 caracteres.");
        }
      }
      // Elimina espacios en blanco de cada poder
      aliados = aliados.map((aliado) => aliado.trim());
      return true;
    }),
  (req, res, next) => {
    // Manejo de errores de validacion
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Fallo en la validación",
        errors: errors.array().map((error) => ({
          field: error.param,
          message: error.msg,
        })),
      });
    }
    // Si no hay errores, se llama al controlador para insertar superheroe
    next();
  },

  // Valido que  enemigos sea un array de string no vacio
  // y que cada elemento no tenga blancos y una longitud entre 3 y 60 caracteres
  body("enemigos")
    .isArray({ min: 1 })
    .withMessage(
      "Enemigos es un campo obligatorio y debe ser un array con al menos un elemento string."
    )
    .custom((enemigos) => {
      for (let enemigo of enemigos) {
        if (typeof enemigo !== "string") {
          throw new Error("Cada enemigo debe ser un string.");
        }
        if (enemigo.length < 3 || enemigo.length > 60) {
          throw new Error("Cada enemigo debe tener entre 3 y 60 caracteres.");
        }
      }
      // Elimina espacios en blanco de cada poder
      enemigos = enemigos.map((enemigo) => enemigo.trim());
      return true;
    }),
  (req, res, next) => {
    // Manejo de errores de validacion
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Fallo en la validación",
        errors: errors.array().map((error) => ({
          field: error.param,
          message: error.msg,
        })),
      });
    }
    // Si no hay errores, se llama al controlador para insertar superheroe
    next();
  },
];
