export type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    categoria: "tops" | "leggings" | "shorts" | "jaquetas" | "calcados" | "acessorios";
    tamanhos: string[];
    estoque: number;
    imagens: string[];
    cor: string;
    destaque?: boolean;
}

export const produtos: Produto[] = [
    {
        id: 1,
        nome: "Top Fitness Compressão",
        descricao:
            "Top esportivo com alta sustentação, tecido dry-fit e compressão confortável.",
        preco: 89.90,
        categoria: "tops",
        tamanhos: ["P", "M", "G"],
        estoque: 15,
        imagens: ["/images/top-compressao-rosa.png"],
        cor: "Rosa",
        destaque: true
    },
    {
        id: 2,
        nome: "Legging High Waist Power",
        descricao:
            "Legging cintura alta, tecido reforçado, zero transparência e modelagem premium.",
        preco: 159.90,
        categoria: "leggings",
        tamanhos: ["P", "M", "G", "GG"],
        estoque: 22,
        imagens: ["/images/legging-preta.png"],
        cor: "Preto"
    },
    {
        id: 3,
        nome: "Shorts Performance Dry",
        descricao:
            "Shorts leve, respirável e ideal para corrida e treino funcional.",
        preco: 79.90,
        categoria: "shorts",
        tamanhos: ["P", "M", "G"],
        estoque: 9,
        imagens: ["/images/shorts-perf.png"],
        cor: "Azul"
    },
    {
        id: 4,
        nome: "Jaqueta Corta-Vento Feminina",
        descricao:
            "Jaqueta leve, resistente à água e ideal para treinos ao ar livre.",
        preco: 199.90,
        categoria: "jaquetas",
        tamanhos: ["P", "M", "G"],
        estoque: 5,
        imagens: ["/images/jacquetawind.png"],
        cor: "Vermelho"
    },
    {
        id: 5,
        nome: "Tênis Running Pro",
        descricao:
            "Tênis de corrida com sola em EVA, super leve e confortável.",
        preco: 299.90,
        categoria: "calcados",
        tamanhos: ["34", "35", "36", "37", "38", "39"],
        estoque: 12,
        imagens: ["/images/tenis-run.png"],
        cor: "Branco"
    }
];


export function getProdutos() {
    return produtos;
}