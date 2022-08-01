import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/coffee", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(
    [
      {
        "id": 1,
        "title": "Expresso Tradicional",
        "subtitle": "O tradicional café feito com água quente e grãos moídos",
        "type": [
          "tradicional"
        ],
        "price": 3.50,
        "stock": 5,
        "imgUrl": "./src/assets/coffee/expresso.svg"
      },
      {
        "id": 2,
        "title": "Expresso Americano",
        "subtitle": "Expresso diluído, menos intenso que o tradicional",
        "type": [
          "tradicional"
        ],
        "price": 9.50,
        "stock": 3,
        "imgUrl": "./src/assets/coffee/americano.svg"
      },
      {
        "id": 3,
        "title": "Expresso Cremoso",
        "subtitle": "Café expresso tradicional com espuma cremosa",
        "type": [
          "tradicional"
        ],
        "price": 2.99,
        "stock": 6,
        "imgUrl": "./src/assets/coffee/expresso_cremoso.svg"
      },
      {
        "id": 4,
        "title": "Expresso Gelado",
        "subtitle": "Bebida preparada com café expresso e cubos de gelo",
        "type": [
          "tradicional",
          "gelado"
        ],
        "price": 7.99,
        "stock": 3,
        "imgUrl": "./src/assets/coffee/cafe_gelado.svg"
      },
      {
        "id": 5,
        "title": "Café com Leite",
        "subtitle": "Meio a meio de expresso tradicional com leite vaporizado",
        "type": [
          "tradicional",
          "com leite"
        ],
        "price": 3.99,
        "stock": 10,
        "imgUrl": "./src/assets/coffee/cafe_com_leite.svg"
      },
      {
        "id": 6,
        "title": "Latte",
        "subtitle": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        "type": [
          "tradicional",
          "com leite"
        ],
        "price": 9.90,
        "stock": 3,
        "imgUrl": "./src/assets/coffee/latte.svg"
      },
      {
        "id": 7,
        "title": "Capuccino",
        "subtitle": "Bebida com canela feita de doses iguais de café, leite e espuma",
        "type": [
          "tradicional",
          "com leite"
        ],
        "price": 9.90,
        "stock": 10,
        "imgUrl": "./src/assets/coffee/capuccino.svg"
      },
      {
        "id": 8,
        "title": "Macchiato",
        "subtitle": "Café expresso misturado com um pouco de leite quente e espuma",
        "type": [
          "tradicional",
          "com leite"
        ],
        "price": 9.90,
        "stock": 4,
        "imgUrl": "./src/assets/coffee/macchiato.svg"
      },
      {
        "id": 9,
        "title": "Mocaccino",
        "subtitle": "Café expresso com calda de chocolate, pouco leite e espuma",
        "type": [
          "tradicional",
          "com leite"
        ],
        "price": 9.90,
        "stock": 2,
        "imgUrl": "./src/assets/coffee/mochaccino.svg"
      },
      {
        "id": 10,
        "title": "Chocolate Quente",
        "subtitle": "Bebida feita com chocolate dissolvido no leite quente e café",
        "type": [
          "especial",
          "com leite"
        ],
        "price": 9.90,
        "stock": 1,
        "imgUrl": "./src/assets/coffee/chocolate_quente.svg"
      },
      {
        "id": 11,
        "title": "Cubano",
        "subtitle": "Drink gelado de café expresso com rum, creme de leite e hortelã",
        "type": [
          "especial",
          "com leite",
          "gelado"
        ],
        "price": 9.90,
        "stock": 6,
        "imgUrl": "./src/assets/coffee/cubano.svg"
      },
      {
        "id": 12,
        "title": "Havaiano",
        "subtitle": "Bebida adocicada preparada com café e leite de coco",
        "type": [
          "especial"
        ],
        "price": 9.90,
        "stock": 12,
        "imgUrl": "./src/assets/coffee/havaiano.svg"
      },
      {
        "id": 13,
        "title": "Árabe",
        "subtitle": "Bebida preparada com grãos de café árabe e especiarias",
        "type": [
          "especial"
        ],
        "price": 9.90,
        "stock": 9,
        "imgUrl": "./src/assets/coffee/arabe.svg"
      },
      {
        "id": 14,
        "title": "Irlandês",
        "subtitle": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        "type": [
          "especial",
          "alcoólico"
        ],
        "price": 9.90,
        "stock": 8,
        "imgUrl": "./src/assets/coffee/irlandes.svg"
      }
    ]
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
