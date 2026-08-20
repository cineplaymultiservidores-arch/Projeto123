document.addEventListener('DOMContentLoaded', () => {
  carregarMenu();
});

async function carregarMenu() {
  try {
    const res = await fetch('produtos.json');
    const dados = await res.json();
    const menu = document.getElementById('menu');

    // PEGA A LOGO
    const geral = dados.find(c => c.categoria === "GERAL");
    if (geral) {
      const logo = geral.itens.find(i => i.nome === "LOGO");
      if (logo) document.getElementById('logo').src = logo.imagem;
    }

    // MONTA O MENU
    dados.forEach(categoria => {
      if (categoria.categoria === "GERAL") return;
      
      const section = document.createElement('section');
      section.classList.add('categoria');
      
      let htmlItens = '';
      
      categoria.itens.forEach(item => {
        if (item.preco === 0) return;
        
        htmlItens += `
          <div class="item">
            <img src="${item.imagem}" alt="${item.nome}" onerror="this.src='https://i.imgur.com/F6wW2W.webp'">
            <div class="info">
              <h3>${item.nome}</h3>
              <p>R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
            </div>
          </div>
        `;
      });

      section.innerHTML = `<h2>${categoria.categoria}</h2>` + htmlItens;
      menu.appendChild(section);
    });

  } catch (erro) {
    console.error("Erro:", erro);
    document.getElementById('menu').innerHTML = "<p style='text-align:center; padding:20px;'>Erro ao carregar o cardápio 😢</p>";
  }
}