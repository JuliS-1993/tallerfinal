let aventura = new Aventura("es");

let gramatica = {
    mensaje: ["<intro> <conector> <argumento>"],
    intro: ["La ley integral trans es importante para la <seccion>"],
    conector: ["de las personas trans porque"],
    seccion: ["salud", "educación", "vida", "identidad", "vivienda"],
    argumento: [
      "reconoce legalmente su identidad, fomentando el respeto y la inclusión social en todos los ámbitos vitales.",
      "elimina barreras sistémicas, facilitando el acceso a oportunidades y servicios esenciales para una vida digna.",
      "ofrece un marco legal que combate la discriminación, promoviendo la igualdad real y efectiva de derechos.",
      "contribuye a su bienestar integral, al garantizar un entorno más seguro y protector de sus derechos humanos.",
      "valida su existencia y sus derechos fundamentales, permitiendo un desarrollo personal y social pleno y libre."
    ]
  }

  let texto = aventura.fijarGramatica(gramatica).probarGramatica(gramatica).expandirGramatica('mensaje');

  console.log(texto);

  aventura.cargarJSON("./modelo.json").then(gramatica => {
    aventura.fijarIgrama(gramatica);
    let capas = aventura.expandirIgrama("mensaje");
    aventura.mostrarIgrama(capas, "png");
  });