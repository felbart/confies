# CONFIES — Site Institucional

Site institucional do Conselho Nacional das Fundações de Apoio às Instituições de Ensino Superior e de Pesquisa Científica e Tecnológica (CONFIES).

---

## Stack

| Tecnologia | Versão | Função |
|---|---|---|
| React | 19 | Framework UI |
| TypeScript | 6 | Tipagem estática |
| Vite | 8 | Build tool |
| Tailwind CSS | 4 | Estilização |
| React Router | 7 | Roteamento SPA |
| Motion | 12 | Animações (Framer Motion) |
| Lenis | 1.3 | Smooth scroll |
| Lucide React | — | Ícones |

> **Atenção:** todas essas versões são recentes (algumas ainda em estágio early). Antes de adicionar novas dependências, verifique compatibilidade explícita com esse conjunto de versões.

---

## Setup

```bash
# Instalar dependências
npm install

# Desenvolvimento local
npm run dev          # http://localhost:5173

# Build de produção
npm run build

# Preview do build gerado
npm run preview
```

### Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha os valores:

```
VITE_API_URL=    # URL base da API. Deixe vazio para usar dados locais (mock).
```

Quando `VITE_API_URL` está vazio, todos os serviços retornam os dados estáticos de `src/data/`.

---

## Estrutura de Pastas

```
src/
  components/
    layout/          # Header, Footer, BackToTop — usados em todas as páginas
    sections/        # Seções específicas de cada página (não reutilizáveis isoladamente)
    ui/              # Componentes atômicos reutilizáveis (AnimatedWord, SectionHeader)
  data/              # Dados estáticos temporários — substituir por API futuramente
  hooks/             # React hooks customizados (ex: useScrolled)
  lib/               # Utilitários: animation.ts (variantes Motion), lenis config
  pages/             # Uma página por rota
  providers/         # Context providers (LenisProvider)
  services/          # Camada de serviço — SEMPRE use serviços, nunca importe data/ diretamente
  types/             # Tipos TypeScript centralizados (a criar — ver seção abaixo)
```

---

## Rotas

| Rota | Página | Status |
|---|---|---|
| `/` | Home | Ativo |
| `/sobre` | Sobre | Ativo |
| `/noticias` | Lista de Notícias | Ativo |
| `/noticias/:slug` | Detalhe de Notícia | Ativo |
| `/eventos` | Eventos | Ativo |
| `/fundacoes` | Mapa de Fundações | Ativo |
| `/contato` | Contato | Ativo |
| `/premio` | Prêmio Boas Práticas | **Placeholder — não publicar** |

---

## Como Adicionar Conteúdo (hoje, antes da API)

### Nova notícia

Edite `src/data/noticias.ts` e adicione um objeto ao array `noticias`:

```typescript
{
  slug: "titulo-da-noticia",        // define a URL: /noticias/titulo-da-noticia
  title: "Título completo",
  excerpt: "Resumo de até 2 linhas para listagens",
  content: "Conteúdo completo da notícia",
  category: "Institucional",        // Imprensa | Institucional | Eventos | Webinar | Prêmio
  date: "2026-04-30",               // formato ISO 8601 (YYYY-MM-DD)
  image: "/images/nome-da-imagem.webp",
  featured: true,                   // aparece em destaque na home (opcional)
}
```

### Nova fundação

Edite `src/components/sections/_fundacoes/fundacoesData.ts` e adicione ao array `foundations`.

> **Pendência:** esse arquivo deve ser movido para `src/data/fundacoes.ts` (ver seção de dívida técnica).

---

## Camada de Serviços

Nunca importe arquivos de `src/data/` diretamente nos componentes. Use sempre os serviços em `src/services/`.

```typescript
// ERRADO — acopla componente ao dado estático
import { noticias } from "@/data/noticias"

// CORRETO — isolado, fácil de migrar para API
import { getNoticias } from "@/services/noticias.service"
const noticias = await getNoticias()
```

Quando os dados migrarem para uma API ou CMS, **apenas os arquivos de serviço precisam mudar** — os componentes ficam intactos.

### Serviços disponíveis

| Arquivo | Funções exportadas |
|---|---|
| `services/noticias.service.ts` | `getNoticias()`, `getNoticiaBySlug(slug)`, `getUltimasNoticias(limit)` |

**Faltam criar:** `eventos.service.ts` e `fundacoes.service.ts`.

### Modelo para novos serviços

```typescript
// src/services/fundacoes.service.ts
import type { Fundacao } from "@/types"
import { mockFundacoes } from "@/data/fundacoes"

const BASE = import.meta.env.VITE_API_URL

async function http<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`[API] ${res.status} ${path}`)
  return res.json()
}

function useMock() {
  return !BASE || import.meta.env.DEV
}

export async function getFundacoes(): Promise<Fundacao[]> {
  if (useMock()) return mockFundacoes
  return http<Fundacao[]>("/fundacoes")
}
```

---

## Animações

Todas as variantes de animação estão centralizadas em `src/lib/animation.ts`. Não crie animações inline nos componentes.

```typescript
// Importar variante existente
import { fadeUpItem, fadeUpContainer } from "@/lib/animation"

// Usar no componente
<motion.div variants={fadeUpContainer} initial="hidden" whileInView="visible">
  <motion.p variants={fadeUpItem}>...</motion.p>
</motion.div>
```

### Ao criar novos componentes animados

Sempre respeite a preferência do usuário por menos movimento:

```typescript
import { useReducedMotion } from "motion/react"

function MeuComponente() {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={reduce ? {} : fadeUpItem}
    />
  )
}
```

---

## Tipos TypeScript

Os tipos de domínio ainda estão acoplados aos arquivos de dados. O objetivo é centralizá-los em `src/types/index.ts`.

```typescript
// src/types/index.ts (a criar)

export type NoticiaCategory = "Imprensa" | "Institucional" | "Eventos" | "Webinar" | "Prêmio"

export type Noticia = {
  slug: string
  title: string
  excerpt: string
  content: string          // obrigatório — não usar optional
  category: NoticiaCategory
  date: string             // ISO 8601: "YYYY-MM-DD"
  image: string
  featured?: boolean
}

export type RegionKey = "brasil" | "norte" | "nordeste" | "centro-oeste" | "sudeste" | "sul"

export type Fundacao = {
  id: number
  name: string
  city: string
  uf: string               // remover campo "state" duplicado
  region: Exclude<RegionKey, "brasil">
}

export type Evento = {
  // a definir
}
```

---

## Dívida Técnica Conhecida

### Bloqueantes para go-live

- [ ] Substituir todas as imagens e textos placeholder (todas as notícias usam a mesma foto)
- [ ] Adicionar meta tags de SEO por página (`react-helmet-async`)
- [ ] Criar `robots.txt` e `sitemap.xml`
- [ ] Adicionar rota 404 com página de erro
- [ ] Remover `/premio` das rotas públicas até a página estar pronta

### Alta prioridade

- [ ] Criar `src/types/index.ts` com tipos centralizados
- [ ] Mover `fundacoesData.ts` para `src/data/`
- [ ] Criar `EventosService.ts` e `FundacoesService.ts`
- [ ] Adicionar `aria-label` em todos os links de ícone (redes sociais, botões sem texto)
- [ ] Adicionar `aria-expanded` / `aria-controls` no menu mobile
- [ ] Adicionar `prefers-reduced-motion` nas animações
- [ ] Lazy loading de rotas com `React.lazy` + `Suspense`

### Médio prazo

- [ ] Deletar `src/lib/lenis.ts` (código morto — o scroll já é gerenciado pelo `LenisProvider`)
- [ ] Deletar ou popular `src/lib/utils.ts`
- [ ] Adicionar `alt` descritivo em todas as imagens nos dados
- [ ] Padronizar `date` para ISO 8601 (`"YYYY-MM-DD"`) nos dados existentes
- [ ] Avaliar migração para Next.js (SSG) ou Astro para indexação no Google
- [ ] Adicionar Error Boundaries nas páginas
- [ ] Lazy loading do iframe do Google Maps na página de Contato

---

## Notas para a Equipe

**O padrão de Services é o ativo mais importante do projeto.** `NewsServices.ts` define o contrato certo para separar dados de UI. Expanda esse padrão para todos os domínios antes de integrar qualquer API ou CMS.

**SEO está zerado.** Um site institucional que não aparece no Google não cumpre sua função. Instalar `react-helmet-async` e adicionar `<title>` + `<meta description>` por página é trabalho de algumas horas e deve ser feito antes do go-live.

**Acessibilidade é obrigatória para entidade pública.** O CONFIES representa instituições públicas — há obrigação legal (eMAG, WCAG 2.1 AA) de acessibilidade básica: labels em ícones, foco visível, contraste mínimo, suporte a leitor de tela.

**Não troque de framework agora.** Avalie SSG/SSR após a primeira versão estável estar em produção. Next.js App Router adiciona complexidade; Astro tende a ser a migração mais suave para este perfil de site.

---

## Opções de CMS para Dados Dinâmicos

| CMS | Modelo | Indicado para |
|---|---|---|
| Sanity | SaaS | Melhor DX, GROQ query, painel moderno |
| Directus | Self-hosted | REST + GraphQL, painel completo, sem custo de SaaS |
| Strapi | Self-hosted | Ecossistema Node maduro |
| WordPress + WPGraphQL | Self-hosted | Editores não-técnicos familiarizados com WP |

A camada de `services/` já isola os componentes — trocar a fonte de dados é alterar apenas os arquivos de serviço.