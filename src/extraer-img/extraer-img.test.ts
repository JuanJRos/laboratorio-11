import { findImg, findImgRaw } from "./extraer-img-helper";

describe("findImgRaw", () => {
    it(`Deberia de devolver <img src="http://localhost:3000/./mortadelo.webp" /> y <img src="http://localhost:3000/./filemon.webp" />`, () =>{
        //Arrange
        const value = `<div class="character-list" id="character-list">
        <div class="card">
          <img src="http://localhost:3000/./mortadelo.webp" />
          <div class="container-description">
            <h2><span>Nombre: </span>Mortadelo</h2>
            <p><span>Especialidad: </span>Disfraces</p>
            <p>
              <span>Habilidades: </span>Camuflaje, Imitaciones, Huida rápida
            </p>
          </div>
        </div>
        <div class="card">
          <img src="http://localhost:3000/./filemon.webp" />
          <div class="container-description">`;

        //Act
        const result = findImgRaw(value);

        //Asert
        const imgs = [`          <img src="http://localhost:3000/./mortadelo.webp" />`,`          <img src="http://localhost:3000/./filemon.webp" />` ];
        expect(result).toEqual(imgs);

    });
});

describe("findImg", () =>{
    it(`Debería de devolver "http://localhost:3000/./mortadelo.webp" y "http://localhost:3000/./filemon.webp" `, () =>{
        //Arrange
        const imgRaw = [`          <img src="http://localhost:3000/./mortadelo.webp" />`,`          <img src="http://localhost:3000/./filemon.webp" />` ];

        //Acta
        const result = findImg(imgRaw);

        //Asert
        const img = ["http://localhost:3000/./mortadelo.webp", "http://localhost:3000/./filemon.webp"];
        expect(result).toEqual(img);
        
    });
});
