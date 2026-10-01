const { response } = require("express");
const http = require("http");

const PORT = 3000;
const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Guardiã das Goiabas", type: "mega_Goiaba", attack: 999, defense: 999 },
  { name: "Guardiã das Marmitas", type: "caixa", attack: 2, defense: 20 },
  { name: "Guardiã das pá", type: "madeira", attack: 10, defense: 6 },
];
const carta = cards.length.toString();

const now = new Date().toLocaleString("pt-PT");

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

const card = cards[Math.floor(Math.random() * cards.length)];




    if (req.url === "/") {

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        
        res.end(`<h1>sim, ${carta}</h1>` );

        

        return;
    }

    if (req.url === "/sobre") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>warley</h1>");

        return;
    }

    if (req.url === "/cartas") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const items = cards.map(card => `<li>${card.name}</li>`).join("");
        res.end(items);

        return;
    }

    if (req.url === "/agora") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        
        res.end(`<h1>${now}</h1>` );


        return;
    }

    if (req.url === "/cartas/aleatoria") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const card = cards[Math.floor(Math.random() * cards.length)];
        res.end(`<h1>nome:${card.name}, tipo:${card.type}, ataque:${card.attack}, ${card.defense}</h1>`);

        return;
    }

    
    else  {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        
        res.end('erro 404');


        return;
    }
    

});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);


});

