const dados = [
  {
    "categoria": "SMASH LANCHES",
    "itens": [
      {"nome": "SMASH BURGUES", "preco": 12.00, "desc": "Pão, 1 smash 90g, queijo e molho da casa", "imagem": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400"},
      {"nome": "SMASH SALADA", "preco": 14.00, "desc": "Pão, 1 smash 90g, queijo, alface, tomate e molho", "imagem": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=400"},
      {"nome": "SMASH EGG", "preco": 15.00, "desc": "Pão, 1 smash 90g, queijo, ovo e molho especial", "imagem": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=400"},
      {"nome": "SMASH BACON", "preco": 16.00, "desc": "Pão, 1 smash 90g, queijo, bacon crocante e molho", "imagem": "https://images.unsplash.com/photo-1550549298-42af2eda92ce?q=80&w=400"},
      {"nome": "CHICKEN BACON", "preco": 17.00, "desc": "Pão, frango empanado, queijo, bacon e molho", "imagem": "https://images.unsplash.com/photo-1606756790138-261d2b8003d1?q=80&w=400"},
      {"nome": "TROPICAL", "preco": 18.00, "desc": "Pão, 1 smash 90g, queijo, abacaxi, bacon e molho", "imagem": "https://images.unsplash.com/photo-1599466254910-1e85315b5036?q=80&w=400"},
      {"nome": "SMASH TRIPLO", "preco": 22.00, "desc": "Pão, 3 smash 90g, 3 queijos e molho da casa", "imagem": "https://images.unsplash.com/photo-1585238343366-9e5c3abf7b6e?q=80&w=400"},
      {"nome": "SMASH TUDO", "preco": 24.00, "desc": "Pão, 2 smash 90g, queijo, bacon, ovo, salada e molho", "imagem": "https://images.unsplash.com/photo-1615295854784-75e4bb998f1a?q=80&w=400"}
    ]
  },
  {
    "categoria": "CACHORRO QUENTE",
    "itens": [
      {"nome": "DOG TRADICIONAL", "preco": 10.00, "desc": "Pão, salsicha, batata palha, milho e molhos", "imagem": "https://images.unsplash.com/photo-1627308595229-7830a5c91fe3?q=80&w=400"},
      {"nome": "DOG BACON", "preco": 12.00, "desc": "Pão, salsicha, bacon, batata palha e molhos", "imagem": "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=400"},
      {"nome": "DOG VACA LOUCA", "preco": 15.00, "desc": "Pão, salsicha, carne moída, queijo e batata palha", "imagem": "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=400"}
    ]
  },
  {
    "categoria": "COXINHA",
    "itens": [
      {"nome": "COXINHA CARNE C/ OVO", "preco": 8.00, "desc": "Massa crocante recheada com carne e ovo", "imagem": "https://images.unsplash.com/photo-1618898909019-010e24375bcb?q=80&w=400"},
      {"nome": "COXINHA FRANGO", "preco": 8.00, "desc": "Massa crocante recheada com frango cremoso", "imagem": "https://images.unsplash.com/photo-1604908177453-7462950e6a3b?q=80&w=400"},
      {"nome": "COXINHA PRESUNTO E QUEIJO", "preco": 9.00, "desc": "Massa crocante recheada com presunto e queijo", "imagem": "https://images.unsplash.com/photo-1618898909019-010e24375bcb?q=80&w=400"},
      {"nome": "COXINHA CARNE C/ CREAM CHEESE", "preco": 10.00, "desc": "Massa crocante recheada com carne e cream cheese", "imagem": "https://images.unsplash.com/photo-1604908177453-7462950e6a3b?q=80&w=400"}
    ]
  },
  {
    "categoria": "RAP + PORÇÕES",
    "itens": [
      {"nome": "RAP 10", "preco": 16.00, "desc": "Massa fina com frango, queijo, alface e molho", "imagem": "https://images.unsplash.com/photo-1625937135046-5d7a4e9b4a8a?q=80&w=400"},
      {"nome": "FRANGO KFC", "preco": 18.00, "desc": "10 pedaços de frango empanado crocante", "imagem": "https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?q=80&w=400"},
      {"nome": "BATATA FRITA", "preco": 12.00, "desc": "Porção de batata frita sequinha 300g", "imagem": "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=400"},
      {"nome": "BATATA CHEDDAR E BACON", "preco": 18.00, "desc": "Porção de batata com cheddar e bacon 400g", "imagem": "https://images.unsplash.com/photo-1630384060421-cb20d0fe7d1d?q=80&w=400"}
    ]
  },
  {
    "categoria": "BEBIDAS",
    "itens": [
      {"nome": "COCA 600ML", "preco": 6.00, "desc": "Refrigerante Coca-Cola 600ml gelada", "imagem": "https://images.unsplash.com/photo-1553456558-aff11c495cc6?q=80&w=400"},
      {"nome": "COCA 2L", "preco": 10.00, "desc": "Refrigerante Coca-Cola 2 Litros", "imagem": "https://images.unsplash.com/photo-1553456558-aff11c495cc6?q=80&w=400"},
      {"nome": "ÁGUA", "preco": 3.00, "desc": "Água mineral 500ml gelada", "imagem": "https://images.unsplash.com/photo-1553456558-aff11c495cc6?q=80&w=400"}
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
          <p class="desc">${item.desc}</p>
          <p class="preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
        </div>
      </div>
    `;
  });
  menu.innerHTML += `<section class="categoria"><h2>${categoria.categoria}</h2>${htmlItens}</section>`;
});
