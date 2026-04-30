// src/services/noticiasService.ts
import { noticias } from "@/data/noticias"

export async function getNoticias() {
  return noticias
}

export async function getUltimasNoticias(limit = 4) {
  return noticias.slice(0, limit)
}

export async function getNoticiaBySlug(slug: string) {
  return noticias.find((noticia) => noticia.slug === slug)
}