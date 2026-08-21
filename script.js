const dados = [
  {
    "categoria": "SMASH LANCHES",
    "itens": [
      {"nome": "SMASH BURGUES", "preco": 12.00, "imagem": "https://i.imgur.com/8k2Qm1A.webp"},
      {"nome": "SMASH SALADA", "preco": 14.00, "imagem": "https://i.imgur.com/9L4zP2B.webp"},
      {"nome": "SMASH EGG", "preco": 15.00, "imagem": "https://i.imgur.com/7X3nC8D.webp"},
      {"nome": "SMASH BACON", "preco": 16.00, "imagem": "https://i.imgur.com/5T1vE9F.webp"},
      {"nome": "CHICKEN BACON", "preco": 17.00, "imagem": "https://i.imgur.com/3R6wG0H.webp"},
      {"nome": "TROPICAL", "preco": 18.00, "imagem": "https://i.imgur.com/2Q9yJ1K.webp"},
      {"nome": "SMASH TRIPLO", "preco": 22.00, "imagem": "https://i.imgur.com/1P8zL4M.webp"},
      {"nome": "SMASH TUDO", "preco": 24.00, "imagem": "https://i.imgur.com/0O7xN5N.webp"}
    ]
  },
  {
    "categoria": "CACHORRO QUENTE",
    "itens": [
      {"nome": "DOG TRADICIONAL", "preco": 10.00, "imagem": "https://i.imgur.com/Z6aB2C.webp"},
      {"nome": "DOG BACON", "preco": 12.00, "imagem": "https://i.imgur.com/Y5bD3D.webp"},
      {"nome": "DOG VACA LOUCA", "preco": 15.00, "imagem": "https://i.imgur.com/X4cE4E.webp"}
    ]
  },
  {
    "categoria": "COXINHA",
    "itens": [
      {"nome": "COXINHA CARNE C/ OVO", "preco": 8.00, "imagem": "https://i.imgur.com/W3fF5F.webp"},
      {"nome": "COXINHA FRANGO", "preco": 8.00, "imagem": "https://i.imgur.com/V2gG6G.webp"},
      {"nome": "COXINHA PRESUNTO E QUEIJO", "preco": 9.00, "imagem": "https://i.imgur.com/U1hH7H.webp"},
      {"nome": "COXINHA CARNE C/ CREAM CHEESE", "preco": 10.00, "imagem": "https://i.imgur.com/T0iI8I.webp"}
    ]
  },
  {
    "categoria": "RAP + PORÇÕES",
    "itens": [
      {"nome": "RAP 10", "preco": 16.00, "imagem": "https://i.imgur.com/S9jJ9J.webp"},
      {"nome": "FRANGO KFC", "preco": 18.00, "imagem": "https://i.imgur.com/R8kK0K.webp"},
      {"nome": "BATATA FRITA", "preco": 12.00, "imagem": "https://i.imgur.com/Q7lL1L.webp"},
      {"nome": "BATATA CHEDDAR E BACON", "preco": 18.00, "imagem": "https://i.imgur.com/P6mM2M.webp"}
    ]
  },
  {
    "categoria": "ADICIONAIS",
    "itens": [
      {"nome": "OVO", "preco": 2.00, "imagem": "https://i.imgur.com/O5nN3N.webp"},
      {"nome": "BACON", "preco": 3.00, "imagem": "https://i.imgur.com/N4oO4O.webp"},
      {"nome": "QUEIJO", "preco": 3.00, "imagem": "https://i.imgur.com/M3pP5P.webp"}
    ]
  },
  {
    "categoria": "BEBIDAS",
    "itens": [
      {"nome": "COCA 600ML", "preco": 6.00, "imagem": "https://i.imgur.com/K1rR7R.webp"},
      {"nome": "COCA 2L", "preco": 10.00, "imagem": "https://i.imgur.com/J0sS8S.webp"},
      {"nome": "ÁGUA", "preco": 3.00, "imagem": "https://i.imgur.com/I9tT9T.webp"}
    ]
  }
];

const menu = document.getElementById('menu');

dados.forEach(categoria => {
  let htmlItens = '';
  categoria.itens.forEach(item => {
    htmlItens += `
      <div class="item">
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="info">
          <h3>${item.nome}</h3>
          <p>R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
        </div>
      </div>
    `;
  });
  menu.innerHTML += `<section class="categoria"><h2>${categoria.categoria}</h2>${htmlItens}</section>`;
});
