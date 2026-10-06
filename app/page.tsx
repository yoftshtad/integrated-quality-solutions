'use client'

import { useState } from 'react'

const services = [
  ['Consultancy Service', 'Crafting clear, actionable strategies that align with your vision, ensuring sustainable growth and a competitive edge.'],
  ['Management System Auditing', 'Providing expert financial planning, forecasting, and cost optimization to strengthen profitability and long-term stability.'],
  ['Training Service', 'Our Operations and Process Optimization service is designed to help businesses eliminate inefficiencies and reduce costs.'],
  ['ISO 14001:2015 Environmental Management System', 'Our Market Research & Analysis service empowers businesses with the intelligence they need to navigate markets confidently.'],
]

const insights = [
  { title: 'The 8 Categories of Wastes — Consuming the Benefits of the Human Effort', desc: 'Waste is defined as any human activity which uses resources but creates no value. Ohno has identified...', image: '/blogs/waste.jpeg', link: '#' },
  { title: 'The Rise of No-Code', desc: 'No-code platforms are transforming how businesses build. Learn how no-code saves time, reduces costs, and fuels innovation.', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop', link: '#' },
]

const heroImage = '/hero/tad.png'

const faqs = [
  ['What services do you offer?', 'We provide end-to-end business consulting, including strategy development, market positioning, process optimization, and performance improvement.'],
  ['How long does a typical consultation process take?', 'Most consulting engagements range from a few weeks to several months, depending on project scope, business size, and objectives.'],
  ['Do you work with startups or established businesses?', 'Yes — we support both. Whether you\'re scaling a startup or refining operations in an established company, our process adapts to your stage of growth.'],
  ['What can I expect in the first consultation?', 'We\'ll discuss your current challenges, desired outcomes, and explore how our strategies can create measurable impact for your business.'],
  ['Do you offer ongoing support after the consultation?', 'Absolutely. We provide continuous advisory sessions and performance reviews to ensure strategies are successfully implemented and delivering results.'],
]

function Button({ children, pale = false }: { children: React.ReactNode; pale?: boolean }) {
  return <a className={`button ${pale ? 'button-pale' : ''}`} href="#contact">{children}<span>↗</span></a>
}

function Placeholder({ className = '' }: { className?: string }) {
  return <div className={`placeholder ${className}`} aria-label="Image placeholder" />
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState(0)
  return (
    <main>

      <section className="hero section" id="hero">
        <div className="hero-copy">
          <span className="eyebrow">Integrated Quality Solutions</span>
          <h2 className="hero-subtitle text-3xl">ኢንተግሬትድ ኳሊቲ ሶሉሽንስ</h2>
          <h1>Business growth with <em>expert</em> consultancy</h1>
          <p>Achieve sustainable growth through expert insights, tailored solutions, and trusted support.</p>
          <div className="actions"><Button>Get Started</Button><Button pale>Our Services</Button></div>
          <div className="rating">★★★★★ <span>Rated by loving Clients</span></div>
        </div>
        <div className="hero-art"><img src={heroImage} alt="" loading="lazy" className="hero-image" /><div className="client-count"><b>Join <strong>100<sup>+</sup></strong></b><span>other awesome clients</span></div></div>
      </section>

      <section className="cream section" id="services">
        <div className="section-intro"><h2>Our Services</h2><p>Explore our range of services to discover the perfect solution tailored to your project's unique needs.</p></div>
        <div className="service-grid">{services.map(([title, text]) => <article className="service-card" key={title}><Placeholder /><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="center-cta"><h2>Reach Out for Consultancy Inquiries</h2><div className="actions"><Button>Contact Us</Button><Button pale>Our Services</Button></div></div>
      </section>

      <section className="section why" id="testimonials"><div className="section-intro"><h2>Why Even Us ?</h2><p>We go beyond surface-level advice — our consulting approach is built on data, strategy, and execution</p></div><div className="why-cards"><article><b>01</b><h3>80+ Consultancy Services.</h3><p>Expert solutions for complex challenges.</p></article><article><b>02</b><h3>2010 Training Services</h3><p>Practical training that builds capability.</p></article><article><b>03</b><h3>350 Auditing Services</h3><p>Thorough audits, clear actionable insights.</p></article><article><b>04</b><h3>Proven Results</h3><p>Measured impact that drives growth.</p></article></div></section>

      <section className="cream process section"><div className="process-head"><div className="section-intro"><h2>Proven Process for Your Goals</h2><p>Our step-by-step approach simplifies challenges, delivers tailored strategies, and drives measurable results.</p></div><div className="actions"><Button>Get Started</Button><Button pale>Our Services</Button></div><div className="rating">★★★★★ <span>Rated by loving Clients</span></div></div><div className="steps">{[['1','Understand Your Needs','We assess your goals, challenges, and current operations to identify where meaningful improvements can be made.'],['2','Develop & Implement Solutions','We create practical, tailored strategies and work with you to put them into action effectively.'],['3','Measure & Drive Improvement','We evaluate outcomes, identify opportunities, and refine our approach to deliver lasting, measurable results.']].map(([n,t,d])=><article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>

      <section className="section compare"><div className="section-intro"><h2>Resources</h2><p>Access valuable publications and practical resources designed to support better quality, performance, and decision-making.
</p></div><div className="resource-grid">{[['Market Growth Guide','Practical frameworks for finding your next opportunity and building a stronger growth plan.'],['Strategy Playbook','Clear, useful guidance for turning complex business challenges into confident decisions.'],['Business Insights','Fresh perspectives, proven ideas, and thoughtful resources to help your team move forward.']].map(([title,text])=><article className="resource-card" key={title}><Placeholder /><div className="resource-card-copy"><h3>{title}</h3><p>{text}</p><a href="/resources">View Resource <span>↗</span></a></div></article>)}</div></section>

      <section className="cream stats section"><div className="section-intro"><h2>What Our Loving Clients Say</h2><p>We've helped businesses of all sizes unlock growth, refine their strategies, and achieve lasting results. Here's what our clients say.</p></div><div className="stat-grid"><div><b>180+</b><span>Projects completed.</span></div><div><b>96%</b><span>Client satisfaction rate.</span></div><div><b>15+</b><span>Years of experience</span></div></div><div className="actions center"><Button>Get Started</Button><Button pale>Our Services</Button></div></section>

      <section className="section insights" id="insights"><div className="section-intro"><h2>Insights & Blogs</h2><p>Stay informed with expert insights, industry perspectives, and practical guidance.</p></div><div className="insight-grid">{insights.map((item) => <article key={item.title}><img src={item.image} alt={item.title} loading="lazy" /><h3>{item.title}</h3><p>{item.desc}</p><a href={item.link}>Learn More About This ↗</a></article>)}</div></section>

      <section className="cream faq section"><div className="section-intro"><h2>Your Questions, Answered Clearly</h2><p>Whether you're seeking strategic direction or improving business performance, here are answers to the most common questions clients ask.</p></div><div className="faq-layout"><div className="quote"><h2>Our main goal is to turn complex challenges into clear strategies that drive growth.</h2><Placeholder /><p>Co-founder of Archio</p></div><div className="faq-list">{faqs.map(([q,a],i)=><button key={q} onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><b>{openFaq===i?'−':'+'}</b>{openFaq===i&&<p>{a}</p>}</button>)}</div></div></section>

      <section className="section contact-section" id="contact-form"><div className="contact-card"><div className="contact-details"><h2>Get in touch</h2><dl><div><dt>Email:</dt><dd>Moneta@gmail.com</dd></div><div><dt>Phone:</dt><dd>+17631683</dd></div><div><dt>Address:</dt><dd>123 Innovation Avenue, Suite 456<br />Tech District, San Francisco, CA 94107<br />United States</dd></div></dl><div className="contact-socials"><span>Follow us</span><div><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Dribbble">◉</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="X">𝕏</a></div></div></div><form className="contact-form"><div className="contact-fields"><label>Your Name<input type="text" name="name" placeholder="Your full name" /></label><label>Email address<input type="email" name="email" placeholder="Your email address" /></label></div><label>Message<textarea name="message" placeholder="Write something...." rows={5} /></label><button type="submit">Send Message</button></form></div></section>

      <footer className="footer cream section" id="contact"><a className="logo" href="#hero">Integrated Quality Solutions</a><h2>Let's build your next growth story.</h2><p>Ready to turn your ideas into measurable progress? Let's talk.</p><Button>Get Started</Button><div className="footer-bottom"><span>© 2026 Integrated Quality Solutions</span><span>Addis Ababa, Ethiopia</span><span>Instagram　Whatsapp　Facebook</span></div></footer>
    </main>
  )
}