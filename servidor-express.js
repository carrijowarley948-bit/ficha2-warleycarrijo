const express = require("express");
const app = express();

const cards = [
    { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
    { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
    { name: "Guardiã das Goiabas", type: "mega_Goiaba", attack: 999, defense: 999 },
    { name: "Guardiã das Marmitas", type: "caixa", attack: 2, defense: 20 },
    { name: "Guardiã das pá", type: "madeira", attack: 10, defense: 6 },
];

const carta = cards.length.toString();




app.get("/", (req, res) => {
    res.send(`<h1>sim, ${carta}</h1>`);
});

app.get("/sobre", (req, res) => {
    res.send("<h1>warley</h1>");
});

app.get("/cartas", (req, res) => {
    const items = cards.map(card => `<li>${card.name}</li>`).join("");
    res.send(items);
});

app.get("/agora", (req, res) => {
    const now = new Date().toLocaleString("pt-PT");
    res.send(`<h1>${now}</h1>`);
});

app.get("/cartas/aleatoria", (req, res) => {

    const card = cards[Math.floor(Math.random() * cards.length)];
    res.send(`<h1>nome: ${card.name}| tipo: ${card.type}| ataque: ${card.attack}| defesa: ${card.defense}</h1>`);
});

// ... as outras rotas

// sem caminho e NO FIM: apanha tudo o que sobrou
app.use((req, res) => {
    res.status(404).send("<h1>404</h1>");
});

app.listen(3000, () => console.log("http://localhost:3000"));