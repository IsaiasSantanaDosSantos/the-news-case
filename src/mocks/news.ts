export type NewsItem = {
  id: string;
  title: string;
  image: string;
  source: string;
  time: string; // "2d", "3h"
  category: string;
};

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Starmer renuncia ao cargo sem cumprir promessa',
    image: '../../public/news/Starmer-1.svg',
    source: 'CNN Brasil',
    time: '2d',
    category: 'Mundo',
  },
  {
    id: '2',
    title: 'AbbVie comprará a Apogee Therapeutics por US$ 10,9 bilhões',
    image: '../../public/news/Apogee-Therapeutics.webp',
    source: 'Bloomberg Markets',
    time: '5d',
    category: 'Para Você',
  },
  {
    id: '3',
    title: 'Pelo menos 13 mortos e dezenas de feridos após explosão de gás no',
    image: '../../public/news/explosao.jpg',
    source: 'BBC World',
    time: '5h',
    category: 'Brasil',
  },
  {
    id: '4',
    title: 'Guerra do Irã: novos ataques dos EUA ao Irã',
    image: '../../public/news/guerra-ira.jpg',
    source: 'Handelsblatt',
    time: '6h',
    category: 'Mundo',
  },
  {
    id: '5',
    title: 'Quantos satélites Starlink a SpaceX pode lançar este ano?',
    image: '../../public/news/startlink.jpg',
    source: 'Yahoo finance',
    time: '5h',
    category: 'Tecnologia',
  },
  {
    id: '6',
    title:
      'Argentina pega chave fácil na Copa e pode chegar à semi sem enfrentar',
    image: '../../public/news/messi.jpg',
    source: 'Estadão',
    time: '2h',
    category: 'Esporte',
  },
  {
    id: '7',
    title:
      'Melhor campanha, artilheiros e as grandes hostórias: veja o balanço',
    image: '../../public/news/messi-2.jpg',
    source: 'O Globo',
    time: '58min',
    category: 'Esporte',
  },
  {
    id: '8',
    title: 'Community Trust Bancorp: Não é ótimo, mas é o suficiente',
    image: '../../public/news/community-trust-bancorp-inc.png',
    source: 'G1',
    time: '3h',
    category: 'Negócios',
  },
  {
    id: '9',
    title: 'IEMG: Agora 40%+ em AI-Tech, realize alguns lucros (rebaixamento',
    image: '../../public/news/iemg.jpg',
    source: 'Seeking Alpha',
    time: '3h',
    category: 'Negócios',
  },
];

export const categories = [...new Set(newsData.map((item) => item.category))];
