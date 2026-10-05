'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { Resource } from '@/lib/resources'

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const [resources, setResources] = useState<Resource[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ title: '', description: '', link: '' })
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function fetchResources() {
    const res = await fetch('/api/admin/resources')
    if (res.ok) setResources(await res.json())
  }

  useEffect(() => {
    if (loggedIn) fetchResources()
  }, [loggedIn])

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const username = data.get('username')
    const password = data.get('password')
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    if (!response.ok) return setError('Invalid username or password.')
    setLoggedIn(true)
    setError('')
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function startEdit(resource: Resource) {
    setEditingId(resource.id)
    setFormData({ title: resource.title, description: resource.description, link: resource.link })
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function cancelEdit() {
    setEditingId(null)
    setFormData({ title: '', description: '', link: '' })
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { title, description, link } = formData
    if (!title.trim() || !description.trim() || !link.trim()) return setError('Please complete every field.')

    const url = editingId ? '/api/admin/resources' : '/api/admin/resources'
    const method = editingId ? 'PUT' : 'POST'
    const body = editingId ? { id: editingId, title, description, link } : { title, description, link }

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    if (response.ok) {
      formRef.current?.reset()
      setFormData({ title: '', description: '', link: '' })
      setEditingId(null)
      setError(editingId ? 'Resource updated successfully.' : 'Resource added successfully.')
      fetchResources()
    } else setError('Please complete every field.')
  }

  async function handleDelete(id: number) {
    const response = await fetch(`/api/admin/resources?id=${id}`, { method: 'DELETE' })
    if (response.ok) {
      setConfirmDelete(null)
      setError('Resource deleted successfully.')
      fetchResources()
    } else setError('Failed to delete resource.')
  }

  if (!loggedIn) {
    return (
      <main>
        <section className="section admin-page">
          <div className="admin-panel">
            <form onSubmit={login}>
              <span className="eyebrow">ARCHIO ADMIN</span>
              <h1>Welcome <em>back.</em></h1>
              <label>Username<input name="username" required /></label>
              <label>Password<input name="password" type="password" required /></label>
              <button className="button" type="submit">Sign in <span>↗</span></button>
            </form>
            {error && <p className="admin-message error">{error}</p>}
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="section admin-page">
        <div className="admin-panel">
          <div className="admin-header">
            <div>
              <span className="eyebrow">RESOURCE DASHBOARD</span>
              <h1>Manage <em>resources.</em></h1>
            </div>
            <button className="button secondary" onClick={() => setLoggedIn(false)}>Sign out</button>
          </div>

          <form ref={formRef} onSubmit={submitForm} className="admin-form">
            <h2>{editingId ? 'Edit Resource' : 'Add New Resource'}</h2>
            <label>
              Title
              <input name="title" value={formData.title} onChange={handleChange} required />
            </label>
            <label>
              Description
              <textarea name="description" rows={4} value={formData.description} onChange={handleChange} required />
            </label>
            <label>
              PDF Link
              <input name="link" type="url" placeholder="https://..." value={formData.link} onChange={handleChange} required />
            </label>
            <div className="form-actions">
              <button className="button" type="submit">{editingId ? 'Save Changes' : 'Add Resource'} <span>↗</span></button>
              {editingId && <button className="button secondary" type="button" onClick={cancelEdit}>Cancel</button>}
            </div>
          </form>

          {error && <p className="admin-message {error.includes('success') ? 'success' : 'error'}">{error}</p>}

          <div className="resources-table-container">
            <table className="resources-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Link</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => (
                  <tr key={resource.id}>
                    <td>{resource.title}</td>
                    <td className="description-cell">{resource.description}</td>
                    <td><a href={resource.link} target="_blank" rel="noreferrer" className="link-cell">View ↗</a></td>
                    <td className="actions-cell">
                      {confirmDelete === resource.id ? (
                        <div className="confirm-delete">
                          <span>Delete "{resource.title}"?</span>
                          <button className="button danger small" onClick={() => handleDelete(resource.id)}>Yes, delete</button>
                          <button className="button secondary small" onClick={() => setConfirmDelete(null)}>Cancel</button>
                        </div>
                      ) : (
                        <div className="action-buttons">
                          <button className="button small" onClick={() => startEdit(resource)}>Edit</button>
                          <button className="button danger small" onClick={() => setConfirmDelete(resource.id)}>Delete</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {resources.length === 0 && <p className="no-resources">No resources yet. Add one above.</p>}
          </div>
        </div>
      </section>
    </main>
  )
}