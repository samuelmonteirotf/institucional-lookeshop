  # Look Shop - Site Institucional

Um site institucional moderno e responsivo desenvolvido para a Look Shop, loja cristã especializada em serviços para iPhone. O projeto combina excelência técnica com design profissional, refletindo os valores cristãos da empresa através de uma experiência digital de alta qualidade.

## Sobre o Projeto

A Look Shop é uma empresa que atua com seriedade, excelência e respeito, guiada por princípios cristãos que valorizam a verdade, a empatia e a justiça. Este site institucional foi desenvolvido para representar digitalmente esses valores, oferecendo uma plataforma moderna para apresentar os serviços da empresa e facilitar o contato com os clientes.

### Características Principais

- Design responsivo e mobile-first
- Interface moderna com foco na experiência do usuário
- Integração com WhatsApp para atendimento direto
- Mapas interativos das duas unidades físicas
- Formulário de contato inteligente
- Otimização para mecanismos de busca (SEO)
- Performance otimizada para carregamento rápido

## Stack Tecnológica

### Frontend Framework
- **Next.js 14** - Framework React com App Router para aplicações de produção
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática
- **React 18** - Biblioteca para construção de interfaces de usuário

### Styling e UI
- **Tailwind CSS** - Framework CSS utility-first para desenvolvimento ágil
- **shadcn/ui** - Biblioteca de componentes acessíveis e customizáveis
- **Lucide React** - Conjunto de ícones SVG otimizados

### Funcionalidades
- **Google Maps API** - Integração de mapas para localização das lojas
- **WhatsApp Business API** - Integração para atendimento direto
- **Responsive Design** - Adaptação automática para diferentes dispositivos

## Estrutura do Projeto

```
look-shop-website/
├── app/
│   ├── layout.tsx          # Layout principal da aplicação
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── ui/                 # Componentes base do shadcn/ui
│   ├── header.tsx          # Cabeçalho com navegação
│   ├── hero-section.tsx    # Seção principal
│   ├── about-section.tsx   # Seção sobre a empresa
│   ├── services-section.tsx # Seção de serviços
│   ├── contact-section.tsx # Seção de contato e localização
│   ├── footer.tsx          # Rodapé
│   └── whatsapp-button.tsx # Botão flutuante do WhatsApp
├── lib/
│   └── utils.ts            # Utilitários e helpers
└── hooks/                  # Hooks customizados
```

## Instalação e Execução

### Pré-requisitos

- Node.js 18.0 ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/look-shop-website.git
cd look-shop-website
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

### Scripts Disponíveis

```bash
npm run dev          # Executa em modo de desenvolvimento
npm run build        # Gera build de produção
npm run start        # Executa build de produção
npm run lint         # Executa verificação de código
```

## Funcionalidades Implementadas

### Navegação Inteligente
- Menu responsivo com transições suaves
- Scroll automático entre seções
- Header fixo com efeitos visuais

### Formulário de Contato
- Validação de campos em tempo real
- Integração direta com WhatsApp
- Formatação automática de mensagens

### Localização das Lojas
- Mapas interativos do Google Maps
- Informações completas de endereço
- Links diretos para navegação

### Otimizações de Performance
- Lazy loading de componentes
- Otimização automática de imagens
- Code splitting por rotas
- Minificação de CSS e JavaScript

## Design System

### Paleta de Cores
- Azul Principal: #0033CC (confiança e fidelidade)
- Vermelho Vibrante: #FF0000 (amor e dedicação)
- Branco: #FFFFFF (paz e clareza)
- Preto: #000000 (textos principais)

### Tipografia
- Hierarquia clara de títulos e textos
- Fontes otimizadas para legibilidade
- Responsividade em diferentes tamanhos de tela

### Componentes
- Cards com sombras e bordas arredondadas
- Botões com estados interativos
- Formulários acessíveis
- Ícones consistentes

## Integração com Serviços Externos

### WhatsApp Business
- Botão flutuante sempre visível
- Mensagens pré-formatadas
- Redirecionamento automático

### Google Maps
- Mapas incorporados das duas unidades
- Lazy loading para performance
- Links para aplicativo nativo

### Instagram
- Link para perfil oficial
- Design com cores da marca Instagram

## Responsividade

O site foi desenvolvido com abordagem mobile-first, garantindo experiência otimizada em:

- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Telas grandes (1280px+)

## SEO e Acessibilidade

### Otimização para Buscadores
- Meta tags otimizadas
- Estrutura semântica HTML5
- URLs amigáveis
- Sitemap automático

### Acessibilidade
- Contraste adequado de cores
- Navegação por teclado
- Textos alternativos em imagens
- ARIA labels apropriados

## Deploy e Produção

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=out
```

### Servidor Próprio
```bash
npm run build
npm start
```

## Contribuição

Este projeto segue padrões de desenvolvimento profissional:

1. Código TypeScript com tipagem rigorosa
2. Componentes reutilizáveis e modulares
3. Commits semânticos
4. Testes automatizados (em desenvolvimento)
5. Documentação detalhada

## Licença

Este projeto foi desenvolvido exclusivamente para a Look Shop. Todos os direitos reservados.
