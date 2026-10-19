'use client'

import { useState } from 'react'

const faqs = [
  ['What services do you offer?', 'We provide end-to-end business consulting, including strategy development, market positioning, process optimization, and performance improvement.'],
  ['How can I contact your team?', 'Send us a message and our team will get back to you with the next steps.'],
  ['What payment methods do you accept?', 'We will discuss payment options during the consultation process.'],
  ['What if I have an issue with my project?', 'Reach out through the form and we will make sure the right person helps you quickly.'],
]

function Button({ children }: { children: React.ReactNode }) {
  return <a className="button" href="#contact-form">{children}<span>↗</span></a>
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main className="contact-page">
      <section className="contact-hero section">
        <span className="eyebrow">LET&apos;S TALK</span>
        <h1>Get in touch with our <em>team today.</em></h1>
        <p>Have a question or ready to move your business forward? Tell us a little about what you&apos;re working on.</p>

        <form className="contact-page-form" id="contact-form">
          <h2>Contact Form</h2>
          <div className="contact-page-fields">
            <div className="contact-page-inputs">
              <label>Your Name<input type="text" name="name" placeholder="Type your name" /></label>
              <label>Your Mail<input type="email" name="email" placeholder="Type your mail" /></label>
            </div>
            <label>Message<textarea name="message" placeholder="Type your message..." rows={8} /></label>
          </div>
          <button type="submit">Send Message <span>↗</span></button>
        </form>

        <div className="contact-info-grid">
          <article><b>⌖</b><span>Address</span><strong>Yeka Sub-city, Woreda 8, around Lem Hotel, Megenagna Building Floor 3, Office # 006/26, Addis Ababa, Ethiopia</strong></article>
          <article><b>✉</b><span>Email</span><strong>tadelekumiek@gmail.com</strong></article>
          <article><b>⌕</b><span>Phone</span><strong>+251 911 991 354/ +251 902 529 972</strong></article>
        </div>
      </section>

      <section className="contact-faq section cream">
        <div className="section-intro"><h2>Frequently<br />asked questions</h2><p>Find quick answers to common questions below. Need more help? Contact us anytime for further assistance!</p><Button>Book a Free Call</Button></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <button key={question} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><b>{openFaq === index ? '−' : '+'}</b>{openFaq === index && <p>{answer}</p>}</button>)}</div>
      </section>

      <footer className="footer cream section" id="contact"><a className="logo" href="/">Integrated Quality Solutions</a><h2>Let&apos;s build your next growth story.</h2><p>Ready to turn your ideas into measurable progress? Let&apos;s talk.</p><Button>Get Started</Button><div className="footer-bottom"><span>© 2026 Integrated Quality Solutions</span><span>Addis Ababa, Ethiopia</span><span>Instagram　Whatsapp　Facebook</span></div></footer>
    </main>
  )
}
