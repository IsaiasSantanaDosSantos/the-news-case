# The News — Front-end & Design Challenge

> Redesign de duas telas do aplicativo The News com foco em UX, UI, consistência visual e implementação em React + TypeScript.

---

## 📖 Sobre o desafio

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Dev Front-end & Design** do The News.

O objetivo do desafio é identificar oportunidades de melhoria na experiência do usuário do aplicativo oficial, redesenhar pelo menos duas telas e, opcionalmente, implementar a solução utilizando React.

Este trabalho busca demonstrar não apenas capacidade técnica na implementação, mas também pensamento de produto, domínio de UX/UI e organização de um projeto Front-end.

---

## 🎯 Objetivos

As melhorias propostas tiveram como foco:

- aumentar a consistência entre as telas do aplicativo;
- reduzir a carga cognitiva do usuário;
- melhorar a hierarquia visual;
- otimizar o aproveitamento da área útil para leitura;
- manter a identidade visual original do The News;
- preservar a linguagem editorial do produto.

---

# 🔎 Auditoria do Produto

Antes do redesign foi realizada uma análise do aplicativo para identificar oportunidades de melhoria.

## Problemas encontrados

| Problema | Impacto |
|-----------|----------|
| Navegação inconsistente entre telas | Alto |
| Header excessivamente grande na tela Notícias | Alto |
| Falta de consistência da Bottom Navigation | Alto |
| Duplicidade de navegação na tela Evento | Alto |
| Inconsistência entre Dark Mode e Light Mode na tela Podcast | Médio |
| Pequenos problemas de espaçamento e hierarquia | Médio |

---

# 🎯 Telas escolhidas

Após a auditoria foram selecionadas duas telas que apresentavam maior potencial de melhoria.

## 1. Notícias

Motivos:

- tela de maior consumo de conteúdo;
- excesso de elementos competindo pela atenção;
- oportunidade de aumentar a área de leitura;
- inconsistência na navegação em relação ao restante do aplicativo.

---

## 2. Evento Seis&Seis

Motivos:

- quebra do padrão de navegação;
- duplicidade de funcionalidades;
- arquitetura de informação inconsistente;
- oportunidade de padronização com as demais telas.

---

# 🧠 Principais decisões de Design

## Notícias

### Header colapsável

Ao rolar a página, o cabeçalho reduz sua altura, aumentando a área destinada ao conteúdo principal.

Benefícios:

- melhora a leitura;
- reduz distrações;
- aumenta o espaço útil.

---

### Bottom Navigation

Foi adicionada a mesma navegação global utilizada nas demais telas do aplicativo.

Benefícios:

- consistência;
- menor curva de aprendizado;
- navegação previsível.

---

### Hierarquia visual

O conteúdo editorial passa a ser o elemento principal da tela.

---

## Evento

### Separação entre navegação global e navegação contextual

As ações específicas do evento permanecem na própria tela.

A navegação global foi padronizada utilizando a Bottom Navigation.

---

### Header compacto durante o scroll

Ao navegar pelo conteúdo, o cabeçalho ocupa menos espaço, permitindo visualizar mais informações relevantes.

---

# 🎨 Design System

Foi criado um mini Design System mantendo aderência à identidade visual do The News.

## Cores

- Brand Yellow
- Background Dark
- Surface
- Divider
- Text Primary
- Text Secondary

## Tipografia

- Display
- Heading
- Title
- Body
- Caption

## Espaçamentos

Utilização de múltiplos de 8px.

```
4
8
16
24
32
48
```

## Radius

```
8px
12px
16px
```

## Componentes

- Header
- Bottom Navigation
- News Card
- Event Card
- Button
- Chips
- Carousel
- Grid Card

---

# 📱 Redesign

## Notícias

### Tela Original

(Imagem)

### Redesign

(Imagem)

### Estado durante Scroll

(Imagem)

---

## Evento Seis&Seis

### Tela Original

(Imagem)

### Redesign

(Imagem)

### Estado durante Scroll

(Imagem)

---

# 🚀 Implementação

O redesign foi implementado utilizando:

- React
- TypeScript
- Vite
- React Router
- CSS Modules *(ou Tailwind, dependendo da escolha)*

A implementação buscou reproduzir fielmente o design criado no Figma, mantendo foco em componentização, reutilização e acessibilidade.

---

# 📂 Estrutura do projeto

```
src/

components/

layout/

pages/

features/

hooks/

styles/

theme/

assets/

routes/
```

---

# 🔮 Melhorias futuras

Durante a análise também foram identificadas outras oportunidades de evolução do produto.

Entre elas:

- padronização da tela de Podcasts com suporte completo ao Dark Mode;
- melhorias de acessibilidade;
- refinamento das animações de navegação;
- evolução do Design System para todo o aplicativo.

---

# 🤔 Autocrítica

## Pontos positivos

- manutenção da identidade visual;
- melhoria da consistência;
- aumento da área útil para leitura;
- arquitetura de navegação mais previsível;
- implementação componentizada.

## O que poderia melhorar

- validar as hipóteses com usuários reais;
- realizar testes de usabilidade;
- evoluir o Design System para todo o aplicativo;
- implementar microinterações mais refinadas.

---

# 🔗 Links

## 🎨 Figma

(Link)

---

## 💻 Repositório

(Link)

---

## 🌐 Deploy

(Link)

---

# 👨‍💻 Autor

**Isaias Santana**

Front-end Developer