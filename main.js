let aventura = new Aventura("es");

let gramatica = {
    mensaje: ["<intro> <conector> <argumento>"],
    intro: ["La ley integral trans es importante para la <seccion>"],
    conector: ["de las personas trans porque"],
    seccion: ["salud", "educación", "deporte", "identidad", "vivienda"],
    argumento: ["$seccionSalud$[obj:argumentosSalud]<seccionSalud.obj>"],
    argumentosSalud: [
      "",
      "",
      "",
      ""
    ],
    argumentosEducacion: [
      "",
      "",
      "",
      ""
    ],
    argumentosIdentidad: [
      "",
      "",
      "",
      ""
    ],
    argumentosDeporte: [
      "",
      "",
      "",
      ""
    ],
  }

  let texto = aventura.fijarGramatica(gramatica).probarGramatica(gramatica).expandirGramatica('mensaje');

  console.log(texto);

  aventura.cargarJSON("./modelo.json").then(gramatica => {
    aventura.fijarIgrama(gramatica);
    let capas = aventura.expandirIgrama("mensaje");
    aventura.mostrarIgrama(capas, "png");
  });