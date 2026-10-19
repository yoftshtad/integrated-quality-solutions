import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
let initialized = false

async function ensureTable() {
  if (initialized) return
  await pool.query(`CREATE TABLE IF NOT EXISTS archio_resources (id SERIAL PRIMARY KEY, title TEXT NOT NULL, link TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`)
  initialized = true
}

export type Resource = { id: number; title: string; link: string }

export async function getResources(): Promise<Resource[]> {
  await ensureTable()
  const { rows } = await pool.query('SELECT id, title, link FROM archio_resources ORDER BY created_at DESC')
  return rows
}

export async function addResource(input: Omit<Resource, 'id'>) {
  await ensureTable()
  await pool.query('INSERT INTO archio_resources (title, link) VALUES ($1, $2)', [input.title, input.link])
}

export async function updateResource(id: number, input: Omit<Resource, 'id'>) {
  await ensureTable()
  await pool.query('UPDATE archio_resources SET title = $1, link = $2 WHERE id = $3', [input.title, input.link, id])
}

export async function deleteResource(id: number) {
  await ensureTable()
  await pool.query('DELETE FROM archio_resources WHERE id = $1', [id])
}
