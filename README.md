# CONFIES — Site Institucional

Site institucional do CONFIES — Conselho Nacional das Fundações de Apoio às Instituições de Ensino Superior e de Pesquisa Científica e Tecnológica.

---

## Stack

- React 19 + TypeScript 6
- Vite 8
- Tailwind CSS 4
- React Router 7
- Motion 12 (animações)
- Lenis (smooth scroll)
- Lucide React (ícones)

---

## Setup

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

### Variável de ambiente

```bash
# .env.local
VITE_API_URL=     # URL base da API. Vazio = usa dados locais.
```

---

## Estrutura

```
src/
  components/
    layout/       # Header, Footer, BackToTop
    sections/     # Seções de cada página
    ui/           # Componentes reutilizáveis (AnimatedWord, SectionHeader)
  data/           # Dados estáticos temporários (substituir pela API)
  hooks/          # useScrolled
  lib/            # animation.ts (variantes Motion), lenis config
  pages/          # Uma página por rota
  providers/      # LenisProvider (smooth scroll)
  services/       # Camada de serviço — usar sempre no lugar de importar data/ direto
  types/          # Tipos TypeScript (a centralizar)
```

---

## Rotas

| Rota | Página | Status |
|---|---|---|
| `/` | Home | OK |
| `/sobre` | Sobre | OK |
| `/noticias` | Lista de notícias | OK |
| `/noticias/:slug` | Detalhe de notícia | OK |
| `/eventos` | Eventos | OK |
| `/fundacoes` | Mapa de fundações | OK |
| `/contato` | Contato | OK |
| `/premio` | Prêmio Boas Práticas | **Placeholder — não publicar** |

---

## Dados temporários

Enquanto a API não está integrada, os dados ficam em `src/data/`.

Os serviços em `src/services/` já estão preparados para a troca — basta substituir o retorno dos dados locais pela chamada HTTP. Os componentes não precisam mudar.

```typescript
// src/services/noticias.service.ts — trocar apenas aqui quando a API estiver pronta
export async function getNoticias(): Promise<Noticia[]> {
  if (!import.meta.env.VITE_API_URL) return mockNoticias  // hoje
  return fetch(`${BASE}/noticias`).then(r => r.json())    // com API
}
```

### Serviços disponíveis

| Arquivo | Funções |
|---|---|
| `services/noticias.service.ts` | `getNoticias()`, `getNoticiaBySlug(slug)`, `getUltimasNoticias(limit)` |

---

## Animações

Todas as variantes estão em `src/lib/animation.ts`. Não criar animações inline nos componentes.

```typescript
import { fadeUpItem, fadeUpContainer } from "@/lib/animation"
```
