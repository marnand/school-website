# Colégio Sagrado Coração de Jesus - Site Institucional

## Visão Geral

Site institucional moderno e acolhedor para o Colégio Sagrado Coração de Jesus, uma escola tradicional que une educação humanizada, inovação e atenção individual a cada aluno.

## Objetivo

Gerar novas matrículas e contatos de famílias interessadas, fortalecer a imagem institucional e apresentar de forma clara e emocional os valores e diferenciais da escola.

## Tecnologias Utilizadas

### Frontend
- **React** com TypeScript
- **Tailwind CSS** para estilização
- **Shadcn UI** para componentes
- **Wouter** para roteamento
- **React Hook Form** + **Zod** para validação de formulários
- **TanStack Query** para gerenciamento de estado e requisições

### Backend
- **Express.js** para API REST
- **TypeScript** para type safety
- **Zod** para validação de dados
- **In-memory storage** para persistência de dados

### Design System
- **Paleta de Cores**: Azul (#0073D1), Branco e Dourado (#F5D365)
- **Tipografia**: 
  - **Headings**: Playfair Display (elegante e moderna)
  - **Body**: Inter (limpa e legível)
- **Estilo**: Acolhedor, moderno, leve e humano

## Estrutura do Site

### Páginas Principais

1. **Home** (`/`)
   - Hero banner com frase de impacto: "Educar com amor, formar para a vida"
   - Destaques dos diferenciais (Atenção Individual, Valores Humanos, Tecnologia, Professores Comprometidos)
   - Seção sobre a escola
   - Depoimentos de pais e alunos
   - CTA para agendamento de visita

2. **Sobre Nós** (`/sobre`)
   - História da escola
   - Missão, Visão e Valores
   - Informações sobre a equipe pedagógica

3. **Proposta Pedagógica** (`/proposta`)
   - Métodos de ensino
   - Personalização da aprendizagem
   - Integração entre tradição e tecnologia

4. **Cursos** (`/cursos`)
   - Educação Infantil (2 a 5 anos)
   - Ensino Fundamental I (1º ao 5º ano)
   - Ensino Fundamental II (6º ao 9º ano)
   - Ensino Médio (1ª a 3ª série)
   - Atividades extracurriculares

5. **Inovação e Tecnologia** (`/inovacao`)
   - Google for Education
   - Robótica e Programação
   - Projetos de sustentabilidade
   - Cultura digital

6. **Galeria** (`/galeria`)
   - Fotos da escola e atividades
   - Visualização em modal

7. **Contato** (`/contato`)
   - Formulário de contato integrado
   - Informações de contato (telefone, email, endereço)
   - Botão WhatsApp
   - Mapa do Google Maps

## Funcionalidades Implementadas

### Formulário de Contato
- ✅ Validação completa com Zod
- ✅ Estados de loading durante submissão
- ✅ Mensagens de sucesso/erro com toast
- ✅ Integração com endpoint `/api/contact`
- ✅ Campos: Nome, Email, Telefone, Idade do Filho, Mensagem

### Design Responsivo
- ✅ Mobile-first approach
- ✅ Breakpoints adequados (sm, md, lg)
- ✅ Menu mobile com hamburger
- ✅ Imagens otimizadas
- ✅ Grid responsivo em todas as seções

### Acessibilidade
- ✅ Atributos `data-testid` em todos elementos interativos
- ✅ Alt text em todas as imagens
- ✅ Navegação por teclado
- ✅ Contraste adequado de cores
- ✅ Labels em todos os inputs

### SEO
- ✅ Meta tags (description, og:title, og:description)
- ✅ Título da página otimizado
- ✅ Estrutura semântica HTML
- ✅ Lang="pt-BR"

## Arquivos Importantes

### Frontend
- `client/src/App.tsx` - Configuração de rotas e layout principal
- `client/src/components/Header.tsx` - Cabeçalho com navegação
- `client/src/components/Footer.tsx` - Rodapé com informações
- `client/src/pages/` - Todas as páginas do site
- `client/src/index.css` - Estilos globais e variáveis CSS
- `tailwind.config.ts` - Configuração do Tailwind
- `client/index.html` - HTML base com meta tags

### Backend
- `server/routes.ts` - Endpoints da API
- `server/storage.ts` - Interface de armazenamento
- `shared/schema.ts` - Schemas Zod e tipos TypeScript

### Assets
- `attached_assets/generated_images/` - Imagens geradas para o site

## Como Executar

O projeto já está configurado e rodando. O workflow "Start application" executa:

```bash
npm run dev
```

Isso inicia:
- **Backend**: Express na porta 5000
- **Frontend**: Vite dev server servido pelo Express

## Próximos Passos Sugeridos (Fase 2)

1. **Blog Educativo** - Artigos sobre educação para SEO
2. **Notícias e Eventos** - Sistema de publicação de novidades
3. **Área do Aluno** - Login para acesso a materiais
4. **Integração com CRM** - Conectar formulários ao Google Sheets ou CRM
5. **Chatbot** - Assistente virtual para atendimento

## Mensagens e CTAs

- "Educar com amor, formar para a vida"
- "Agende uma visita e descubra uma escola onde cada aluno é único"
- "Aprender com afeto, crescer com propósito"
- "Tradição, fé e inovação educando juntos"
- "Venha fazer parte da nossa família!"

## Informações de Contato (Mock)

- **Endereço**: Rua da Educação, 123 - Centro, São Paulo, SP
- **Telefone**: (11) 1234-5678
- **Email**: contato@sagradocoracao.edu.br
- **WhatsApp**: (11) 91234-5678
- **Horário**: Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h

## Últimas Modificações

- **10/11/2024**: Implementação completa do site com todas as páginas e funcionalidades
  - Frontend com design excepcional seguindo diretrizes
  - Backend com endpoint de contato
  - Estados de loading e validação completos
  - Todos os data-testid attributes implementados
  - Aprovado pelo architect em todas as etapas
