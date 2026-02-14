const produtos = [
    {
        id: 1,
        categoria: "vestir",
        nome: "Camiseta Logo Preta",
        preco: 89.90,
        review: "5.0 (1.2k)",
        imagem: "assets/img/products/tshirt-classic-logo-black.webp"
    },
    {
        id: 2,
        categoria: "vestir",
        nome: "Camiseta Abbey Road",
        preco: 94.90,
        review: "4.9 (850)",
        imagem: "assets/img/products/tshirt-abbey-road-silhouette.webp"
    },
    {
        id: 3,
        categoria: "vestir",
        nome: "Camiseta Help!",
        preco: 89.90,
        review: "4.8 (420)",
        imagem: "assets/img/products/tshirt-help.webp"
    },
    {
        id: 4,
        categoria: "vestir",
        nome: "Camiseta Faces Minimalistas",
        preco: 94.90,
        review: "5.0 (630)",
        imagem: "assets/img/products/tshirt-faces-minimalist-white.webp"
    },
    {
        id: 5,
        categoria: "vestir",
        nome: "Moletom Revolver",
        preco: 189.90,
        review: "4.9 (210)",
        imagem: "assets/img/products/hoodie-revolver-white.webp"
    },
    {
        id: 6,
        categoria: "vestir",
        nome: "Manga Longa Abbey Road",
        preco: 119.90,
        review: "4.7 (180)",
        imagem: "assets/img/products/longsleeve-abbey-road-blue.webp"
    },
    {
        id: 7,
        categoria: "vestir",
        nome: "Camiseta With The Beatles",
        preco: 94.90,
        review: "5.0 (540)",
        imagem: "assets/img/products/tshirt-with-the-beatles.webp"
    },
    {
        id: 8,
        categoria: "ouvir",
        nome: "Vinil The Beatles 1",
        preco: 199.90,
        review: "4.8 (150)",
        imagem: "assets/img/products/vinyl-the-beatles-1.webp"
    },
    {
        id: 9,
        categoria: "ouvir",
        nome: "Vinil Rubber Soul",
        preco: 249.00,
        review: "5.0 (95)",
        imagem: "assets/img/products/vinyl-rubber-soul.webp"
    },
    {
        id: 10,
        categoria: "ouvir",
        nome: "Vinil Let It Be",
        preco: 289.00,
        review: "4.9 (112)",
        imagem: "assets/img/products/vinyl-let-it-be.webp"
    },
    {
        id: 11,
        categoria: "ouvir",
        nome: "Vinil Revolver",
        preco: 265.00,
        review: "5.0 (88)",
        imagem: "assets/img/products/vinyl-revolver-album.webp"
    },
    {
        id: 12,
        categoria: "ouvir",
        nome: "Vinil Beatles For Sale",
        preco: 249.00,
        review: "4.8 (45)",
        imagem: "assets/img/products/vinyl-beatles-for-sale.webp" // Nota: Usei o arquivo disponível que mais se aproxima
    },
    {
        id: 13,
        categoria: "ouvir",
        nome: "Vinil Sgt. Pepper's",
        preco: 299.00,
        review: "5.0 (230)",
        imagem: "assets/img/products/vinyl-sgt-peppers.webp"
    },
    {
        id: 14,
        categoria: "ouvir",
        nome: "Vinil Blue Album",
        preco: 265.00,
        review: "4.9 (76)",
        imagem: "assets/img/products/vinyl-blue-album.webp" // Nota: Usei o arquivo disponível
    },
    {
        id: 15,
        categoria: "colecionar",
        nome: "Poster Show Shea Stadium",
        preco: 70.00,
        review: "4.7 (310)",
        imagem: "assets/img/products/poster-street-walking-bw.webp"
    },
    {
        id: 16,
        categoria: "colecionar",
        nome: "Quadro With The Beatles",
        preco: 120.00,
        review: "4.9 (140)",
        imagem: "assets/img/products/poster-with-the-beatles-bw.webp"
    },
    {
        id: 17,
        categoria: "colecionar",
        nome: "Quadro Abbey Road",
        preco: 120.00,
        review: "5.0 (200)",
        imagem: "assets/img/products/poster-abbey-road-crossing.webp"
    },
    {
        id: 18,
        categoria: "colecionar",
        nome: "Quadro Yellow Submarine",
        preco: 120.00,
        review: "4.8 (90)",
        imagem: "assets/img/products/poster-yellow-submarine.webp"
    }
];

function renderizarProdutos() {
    const container = document.querySelector('.catalog-grid');

    // Criamos uma única string com todo o conteúdo
    const htmlProdutos = produtos.map(produto => {
        const precoFormatado = produto.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return `
            <article class="product-card" data-category="${produto.categoria}">
                <div class="product-card-image">
                    <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
                </div>
                <div class="product-card-body">
                    <h3 class="product-title">${produto.nome}</h3>
                    <div class="product-meta">
                        <div class="rating">
                            <img src="assets/img/icon/icon-star.svg" alt="Ícone estrela" aria-hidden="true">
                            <span>${produto.review}</span>
                        </div>
                        <div class="price">${precoFormatado}</div>
                    </div>
                    <div class="product-actions">
                        <button class="card-btn card-btn-outline" data-id="${produto.id}">Carrinho</button>
                        <button class="card-btn card-btn-dark">Comprar</button>
                    </div>
                </div>
            </article>
        `;
    }).join(''); // Transforma o array em uma única string gigante

    container.innerHTML = htmlProdutos; // Apenas UM acesso ao DOM
}

// Chama a função após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    
    // Avisa o GSAP que os produtos apareceram e a altura da página mudou
    if (typeof ScrollSmoother !== 'undefined') {
        ScrollSmoother.get().refresh();
    }
});