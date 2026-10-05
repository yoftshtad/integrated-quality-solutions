import { NextRequest, NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'node:crypto'
import { addResource, getResources, updateResource, deleteResource } from '@/lib/resources'

function token(username: string) { return createHmac('sha256', process.env.ADMIN_PASSWORD || '').update(username).digest('hex') }
function authorized(request: NextRequest) { const value = request.cookies.get('archio_admin')?.value || ''; const expected = token(process.env.ADMIN_USERNAME || 'admin'); return value.length === expected.length && timingSafeEqual(Buffer.from(value), Buffer.from(expected)) }

export async function GET(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const resources = await getResources()
  return NextResponse.json(resources)
}

export async function POST(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json()
  if (!body.title?.trim() || !body.description?.trim() || !body.link?.trim()) return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  await addResource({ title: body.title.trim(), description: body.description.trim(), link: body.link.trim() })
  return NextResponse.json({ ok: true })
}

export async function PUT(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json()
  if (!body.id || !body.title?.trim() || !body.description?.trim() || !body.link?.trim()) return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  await updateResource(body.id, { title: body.title.trim(), description: body.description.trim(), link: body.link.trim() })
  return NextResponse.json({ ok: true })
}

export async function DELETE(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })
  await deleteResource(parseInt(id))
  return NextResponse.json({ ok: true })
}
