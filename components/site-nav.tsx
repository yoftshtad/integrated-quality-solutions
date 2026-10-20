'use client'

import { useState } from 'react'

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="topbar">
        <a className="logo" href="/">IQS</a>
        <div className="availability"><i /> available for work <span className="socials">│　□　│　□　│　□</span></div>
      </header>
      <nav className="floating-nav" aria-label="Main navigation">
        <a href="/">Home</a><a href="/about">About</a><a href="/services">Services</a><a href="/resources">Resources</a><a href="/#insights">Blogs</a><a className="button" href="/contact">Contact Us<span>↗</span></a>
      </nav>

      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      <div className={`nav-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />

      <div className={`nav-panel${open ? ' open' : ''}`}>
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/about" onClick={() => setOpen(false)}>About</a>
        <a href="/services" onClick={() => setOpen(false)}>Services</a>
        <a href="/resources" onClick={() => setOpen(false)}>Resources</a>
        <a href="/#insights" onClick={() => setOpen(false)}>Blogs</a>
        <a className="button" href="/contact" onClick={() => setOpen(false)}>Contact Us<span>↗</span></a>
      </div>
    </>
  )
}
