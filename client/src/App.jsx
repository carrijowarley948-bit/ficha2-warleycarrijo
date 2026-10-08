// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
import React from 'react';
import Card from './Card'; 

const cards = [
  { id: 1, name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { id: 2, name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { id: 3, name: "Guardiã das Goiabas", type: "mega_Goiaba", attack: 999, defense: 999 },
  { id: 4, name: "Guardiã das Marmitas", type: "caixa", attack: 2, defense: 20 },
  { id: 5, name: "Guardiã das pá", type: "madeira", attack: 10, defense: 6 },
];

const carta = cards.length.toString();


function App() {
  return (
    
    <main>
      <h1>A minha coleção</h1>

      <>
      <h2>Tenho {carta} cartas</h2>
        {cards.map((card) => (
          <Card 
            key={card.id} 
            name={card.name}
            type={card.type}
            attack={card.attack}
            defense={card.defense}
          />
        ))}
      </>
    </main>
  );
}

export default App;