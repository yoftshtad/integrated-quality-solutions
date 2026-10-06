'use client'

export function SiteNav() {
  return (
    <>
      <header className="topbar">
        <a className="logo" href="/">IQS</a>
        <div className="availability"><i /> available for work <span className="socials">│　□　│　□　│　□</span></div>
      </header>
      <nav className="floating-nav" aria-label="Main navigation">
        <a href="/">Home</a><a href="/#testimonials">About</a><a href="/#services">Services</a><a href="/resources">Resources</a><a href="/#insights">Blogs</a><a className="button" href="/contact">Contact Us<span>↗</span></a>
      </nav>
    </>
  )
}
