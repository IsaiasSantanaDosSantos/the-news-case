import Starmer from '@/assets/news-page/Starmer-1.svg';
import Apogee from '@/assets/news-page/Apogee-Therapeutics.webp';
import Explosao from '@/assets/news-page/explosao.jpg';
import Guerra from '@/assets/news-page/guerra-ira.jpg';
import Starlink from '@/assets/news-page/startlink.jpg';
import MessiCopa26 from '@/assets/news-page/messi.jpg';
import MessiCopa26_2 from '@/assets/news-page/messi-2.jpg';
import Bancorp from '@/assets/news-page/community-trust-bancorp-inc.png';
import IEMG from '@/assets/news-page/iemg.jpg';

export type NewsItem = {
  id: string;
  title: string;
  image: string;
  source: string;
  time: string; // "2d", "3h"
  categoryId: string;
};

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Starmer renuncia ao cargo sem cumprir promessa',
    image: Starmer,
    source: 'CNN Brasil',
    time: '2d',
    categoryId: 'world',
  },
  {
    id: '2',
    title: 'AbbVie comprará a Apogee Therapeutics por US$ 10,9 bilhões',
    image: Apogee,
    source: 'Bloomberg Markets',
    time: '5d',
    categoryId: 'for-you',
  },
  {
    id: '3',
    title: 'Pelo menos 13 mortos e dezenas de feridos após explosão de gás no',
    image: Explosao,
    source: 'BBC World',
    time: '5h',
    categoryId: 'brazil',
  },
  {
    id: '4',
    title: 'Guerra do Irã: novos ataques dos EUA ao Irã',
    image: Guerra,
    source: 'Handelsblatt',
    time: '6h',
    categoryId: 'world',
  },
  {
    id: '5',
    title: 'Quantos satélites Starlink a SpaceX pode lançar este ano?',
    image: Starlink,
    source: 'Yahoo finance',
    time: '5h',
    categoryId: 'technology',
  },
  {
    id: '6',
    title:
      'Argentina pega chave fácil na Copa e pode chegar à semi sem enfrentar',
    image: MessiCopa26,
    source: 'Estadão',
    time: '2h',
    categoryId: 'sport',
  },
  {
    id: '7',
    title:
      'Melhor campanha, artilheiros e as grandes hostórias: veja o balanço',
    image: MessiCopa26_2,
    source: 'O Globo',
    time: '58min',
    categoryId: 'sport',
  },
  {
    id: '8',
    title: 'Community Trust Bancorp: Não é ótimo, mas é o suficiente',
    image: Bancorp,
    source: 'G1',
    time: '3h',
    categoryId: 'business',
  },
  {
    id: '9',
    title: 'IEMG: Agora 40%+ em AI-Tech, realize alguns lucros (rebaixamento',
    image: IEMG,
    source: 'Seeking Alpha',
    time: '3h',
    categoryId: 'business',
  },
  // Repetidos
  {
    id: '10',
    title: 'Starmer renuncia ao cargo sem cumprir promessa',
    image: Starmer,
    source: 'CNN Brasil',
    time: '2d',
    categoryId: 'world',
  },
  {
    id: '11',
    title: 'AbbVie comprará a Apogee Therapeutics por US$ 10,9 bilhões',
    image: Apogee,
    source: 'Bloomberg Markets',
    time: '5d',
    categoryId: 'for-you',
  },
  {
    id: '12',
    title: 'Pelo menos 13 mortos e dezenas de feridos após explosão de gás no',
    image: Explosao,
    source: 'BBC World',
    time: '5h',
    categoryId: 'brazil',
  },
  {
    id: '13',
    title: 'Guerra do Irã: novos ataques dos EUA ao Irã',
    image: Guerra,
    source: 'Handelsblatt',
    time: '6h',
    categoryId: 'world',
  },
  {
    id: '14',
    title: 'Quantos satélites Starlink a SpaceX pode lançar este ano?',
    image: Starlink,
    source: 'Yahoo finance',
    time: '5h',
    categoryId: 'technology',
  },
  {
    id: '15',
    title:
      'Argentina pega chave fácil na Copa e pode chegar à semi sem enfrentar',
    image: MessiCopa26,
    source: 'Estadão',
    time: '2h',
    categoryId: 'sport',
  },
  {
    id: '16',
    title:
      'Melhor campanha, artilheiros e as grandes hostórias: veja o balanço',
    image: MessiCopa26_2,
    source: 'O Globo',
    time: '58min',
    categoryId: 'sport',
  },
  {
    id: '17',
    title: 'Community Trust Bancorp: Não é ótimo, mas é o suficiente',
    image: Bancorp,
    source: 'G1',
    time: '3h',
    categoryId: 'business',
  },
  {
    id: '18',
    title: 'IEMG: Agora 40%+ em AI-Tech, realize alguns lucros (rebaixamento',
    image: IEMG,
    source: 'Seeking Alpha',
    time: '3h',
    categoryId: 'business',
  },
];

export const categories = [...new Set(newsData.map((item) => item.categoryId))];
