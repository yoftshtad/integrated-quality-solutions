'use client'

import { useState } from 'react'

const services = [
  { title: 'Consultancy Service', text: 'Crafting clear, actionable strategies that align with your vision, ensuring sustainable growth and a competitive edge.', image: '/services/consultancy.png' },
  { title: 'Management System Auditing', text: 'Providing expert financial planning, forecasting, and cost optimization to strengthen profitability and long-term stability.', image: '/services/management.png' },
  { title: 'Training Service', text: 'Our Operations and Process Optimization service is designed to help businesses eliminate inefficiencies and reduce costs.', image: '/services/training.png' },
  { title: 'Risk Management', text: 'Our Market Research & Analysis service empowers businesses with the intelligence they need to navigate markets confidently.', image: '/services/Risk.png' },
]

const insights = [
  { title: 'The 8 Categories of Wastes — Consuming the Benefits of the Human Effort', desc: 'Waste is defined as any human activity which uses resources but creates no value. Ohno has identified...', image: '/blogs/waste.jpeg', width: 1666, height: 624, link: '/insights/8-categories-of-waste' },
]

const projects = [
  { title: 'Quality Improvement Tools', image: '/projects/quality_improvement.png', width: 1536, height: 1024, link: 'https://drive.google.com/file/d/1kaRAjW8549aq_lsDRtGJv1pkajP-Vatc/view?usp=sharing' },
  { title: 'Quality System', image: '/projects/quality_system.png', width: 1536, height: 1024, link: 'https://drive.google.com/file/d/14T6b4uIJpJUZzkDnBI-2Ts70ZGYootCV/view?usp=sharing' },
  { title: 'ISO 9001_2026 Quality Management System', image: '/projects/quality_management.png', width: 1536, height: 1024, link: 'https://drive.google.com/file/d/1o7r5SD_7JTkKz8tiNHig8GcXNfw6VLSs/view?usp=drive_link' },
]

const resources = [
  { title: 'Four Pre-requisites for successful changes', link: 'https://drive.google.com/file/d/1ZjYUC-6NJERF0NYe18TJtSRmnQLJ-CeB/view' },
  { title: 'Managing Diverse Behaviours of Meeting Participants', link: 'https://drive.google.com/file/d/15ulbcWfiGVdM_Jy0flbVq4j8zX3fXWpo/view' },
  { title: 'Doing the Right Thing and Doing Things Right', link: 'https://drive.google.com/file/d/1-pROcKNsBZw_zYwbbyeQmsjoWMuEDSao/view' },
]

const heroImage = '/hero/tadele.jpg'
const founderImage = '/hero/minitad.png'

const faqs = [
  ['What services do you offer?', 'We provide end-to-end business consulting, including strategy development, market positioning, process optimization, and performance improvement.'],
  ['How long does a typical consultation process take?', 'Most consulting engagements range from a few weeks to several months, depending on project scope, business size, and objectives.'],
  ['Do you work with startups or established businesses?', 'Yes — we support both. Whether you\'re scaling a startup or refining operations in an established company, our process adapts to your stage of growth.'],
  ['What can I expect in the first consultation?', 'We\'ll discuss your current challenges, desired outcomes, and explore how our strategies can create measurable impact for your business.'],
  ['Do you offer ongoing support after the consultation?', 'Absolutely. We provide continuous advisory sessions and performance reviews to ensure strategies are successfully implemented and delivering results.'],
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

function Button({ children, pale = false, href = '/contact' }: { children: React.ReactNode; pale?: boolean; href?: string }) {
  return <a className={`button ${pale ? 'button-pale' : ''}`} href={href}>{children}<span>↗</span></a>
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState(0)
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="hero section" id="hero">
        <div className="hero-copy">
          <span className="eyebrow">Consultancy Expert</span>
          <h2 className="hero-subtitle text-3xl">ኢንተግሬትድ ኳሊቲ ሶሉሽንስ</h2>
          <h1>Integrated Quality Solutions</h1>
          <p>Integrated Quality Solution PLC is a licensed company in Ethiopia since 2006 (G.C.) engaged in providing Consultancy, Training and Management System Auditing services to manufacturing and service sectors (both government and private) based on national and international standards.</p>
          <div className="actions"><Button>Get Started</Button><Button pale href="/services">Our Services</Button></div>
          <div className="rating">★★★★★ <span>Rated by loving Clients</span></div>
        </div>
        <div className="hero-art"><img src={heroImage} alt="Tadele Kumie, founder of Integrated Quality Solutions" width={1113} height={1280} fetchPriority="high" className="hero-image" /><div className="client-count"><b>Join <strong>100<sup>+</sup></strong></b><span>other awesome clients</span></div></div>
      </section>

      <section className="cream section" id="services">
        <div className="section-intro"><h2>Our Services</h2><p>Explore our range of services to discover the perfect solution tailored to your project's unique needs.</p></div>
        <div className="service-grid">{services.map((s) => <article className="service-card" key={s.title}><img src={s.image} alt={s.title} width={600} height={300} loading="lazy" /><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
        <div className="center-cta"><h2>Reach Out for Consultancy Inquiries</h2><div className="actions"><Button>Contact Us</Button><Button pale href="/services">Our Services</Button></div></div>
      </section>

      <section className="section why" id="testimonials"><div className="section-intro"><h2>Why Even Us ?</h2><p>We go beyond surface-level advice — our consulting approach is built on data, strategy, and execution</p></div><div className="why-cards"><article><b>01</b><h3>80+ Consultancy Services.</h3><p>Expert solutions for complex challenges.</p></article><article><b>02</b><h3>2010 Training Services</h3><p>Practical training that builds capability.</p></article><article><b>03</b><h3>350 Auditing Services</h3><p>Thorough audits, clear actionable insights.</p></article><article><b>04</b><h3>Proven Results</h3><p>Measured impact that drives growth.</p></article></div></section>

      <section className="cream process section"><div className="process-head"><div className="section-intro"><h2>Proven Process for Your Goals</h2><p>Our step-by-step approach simplifies challenges, delivers tailored strategies, and drives measurable results.</p></div><div className="actions"><Button>Get Started</Button><Button pale href="/services">Our Services</Button></div><div className="rating">★★★★★ <span>Rated by loving Clients</span></div></div><div className="steps">{[['1','Understand Your Needs','We assess your goals, challenges, and current operations to identify where meaningful improvements can be made.'],['2','Develop & Implement Solutions','We create practical, tailored strategies and work with you to put them into action effectively.'],['3','Measure & Drive Improvement','We evaluate outcomes, identify opportunities, and refine our approach to deliver lasting, measurable results.']].map(([n,t,d])=><article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>

      <section className="section compare"><div className="section-intro"><h2>Resources</h2><p>Access valuable publications and practical resources designed to support better quality, performance, and decision-making.</p><Button href="/resources">View More Resources</Button></div><div className="resource-grid">{resources.map((r) => <article className="resource-card" key={r.title}><div className="pdf-icon" aria-hidden="true">PDF</div><div className="resource-card-copy"><h3>{r.title}</h3><a href={r.link} target="_blank" rel="noreferrer">View Resource <span>↗</span></a></div></article>)}</div></section>

      <section className="cream stats section"><div className="section-intro"><h2>Completed Projects</h2><p>A selection of recent work where we helped teams improve quality, safety, and performance.</p></div><div className="insight-grid projects-grid">{projects.map((item) => <article key={item.title}><img src={item.image} alt={item.title} width={item.width} height={item.height} loading="lazy" /><h3>{item.title}</h3><a href={item.link}>View Project ↗</a></article>)}</div><div className="actions center"><Button>Get Started</Button><Button pale href="/services">Our Services</Button></div></section>

      <section className="section insights" id="insights"><div className="section-intro"><h2>Insights & Blogs</h2><p>Stay informed with expert insights, industry perspectives, and practical guidance.</p></div><div className="insight-grid">{insights.map((item) => <article key={item.title}><img src={item.image} alt={item.title} width={item.width} height={item.height} loading="lazy" /><h3>{item.title}</h3><p>{item.desc}</p><a href={item.link}>Learn More About This ↗</a></article>)}</div></section>

      <section className="cream faq section"><div className="section-intro"><h2>Your Questions, Answered Clearly</h2><p>Whether you're seeking strategic direction or improving business performance, here are answers to the most common questions clients ask.</p></div><div className="faq-layout"><div className="quote"><h2>Our main goal is to turn complex challenges into clear strategies that drive growth.</h2><img src={founderImage} alt="Tadele Kumie" width={1113} height={1280} loading="lazy" className="quote-avatar" /><p>Tadele Kumie</p></div><div className="faq-list">{faqs.map(([q,a],i)=><button key={q} onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><b>{openFaq===i?'−':'+'}</b>{openFaq===i&&<p>{a}</p>}</button>)}</div></div></section>

      <section className="section contact-section" id="contact-form"><div className="contact-card"><div className="contact-details"><h2>Get in touch</h2><dl><div><dt>Email:</dt><dd>tadelekumiek@gmail.com</dd></div><div><dt>Phone:</dt><dd>+251 911 991 354/ +251 902 529 972</dd></div><div><dt>Address:</dt><dd>Yeka Sub-city, Woreda 8, around Lem Hotel,<br />Megenagna Building Floor 3, Office # 006/26<br />Addis Ababa, Ethiopia</dd></div></dl></div><form className="contact-form"><div className="contact-fields"><label>Your Name<input type="text" name="name" placeholder="Your full name" /></label><label>Email address<input type="email" name="email" placeholder="Your email address" /></label></div><label>Message<textarea name="message" placeholder="Write something...." rows={5} /></label><button type="submit">Send Message</button></form></div></section>

      <footer className="footer cream section" id="contact"><a className="logo" href="#hero">Integrated Quality Solutions</a><h2>Let's build your next growth story.</h2><p>Ready to turn your ideas into measurable progress? Let's talk.</p><Button>Get Started</Button><div className="footer-bottom"><span>© 2026 Integrated Quality Solutions</span><span>Addis Ababa, Ethiopia</span><span>Instagram　Whatsapp　Facebook</span></div></footer>
    </main>
  )
}