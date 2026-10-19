import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Integrated Quality Solutions — who we are, the vision, mission, and goals that drive our consultancy, auditing, and training services in Addis Ababa, Ethiopia.',
  alternates: { canonical: '/about' },
}

const goals = 
[
  {
    n: '01',
    title: 'Integrity',
    text: 'Provide honest, objective advice, maintain confidentiality, and uphold professional and ethical standards in every engagement.'
  },
  {
    n: '02',
    title: 'Open-mindedness',
    text: 'Consider diverse perspectives, evaluate evidence objectively, and develop practical solutions suited to each organization’s needs.'
  },
  {
    n: '03',
    title: 'Respect',
    text: 'Treat every client with fairness and professionalism, recognizing their unique challenges, resources, and organizational goals.'
  },
  {
    n: '04',
    title: 'Learning and Improvement',
    text: 'Promote continual improvement through performance evaluation, evidence-based recommendations, and regular review of management systems.'
  },
  {
    n: '05',
    title: 'Teamwork',
    text: 'Collaborate closely with clients and stakeholders, sharing expertise and aligning efforts to achieve sustainable organizational results.'
  }
]

export default function AboutPage() {
  return (
    <main>
      <section className="section about-intro">
        <div className="section-intro">
          <span className="eyebrow">ABOUT US</span>
          <h1>Integrated Quality Solutions</h1>
          <p className="lead">
            Integrated Quality Solution PLC is a licensed company in Ethiopia since 2006 (G.C.) engaged in providing Consultancy, Training and Management System Auditing services to manufacturing and service sectors (both government and private) based on national and international standards.
          </p>
          <a className="button" href="/contact">Get Started<span>↗</span></a>
        </div>
      </section>

      <section className="cream section">
        <div className="section-intro">
          <span className="eyebrow">OUR VISION</span>
          <h2>A future where quality is how business <em>gets done.</em></h2>
          <p>
            To be a significant business partner to Ethiopian industries impacting on quality, productivity and food safety.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <span className="eyebrow">OUR MISSION</span>
          <h2>To build stronger, more capable <em>organizations.</em></h2>
          <p>
            Deliver knowledge and experience to Ethiopian industries through the provision of credible, reliable and tailor made management systems consultancy, training and auditing services.
          </p>
        </div>
      </section>

      <section className="cream section">
        <div className="section-intro">
          <span className="eyebrow">OUR GOALS</span>
          <h2>What we&apos;re working toward.</h2>
          <p>Four commitments that shape every project, audit, and training session we take on.</p>
        </div>
        <div className="why-cards">
          {goals.map((g) => (
            <article key={g.n}>
              <b>{g.n}</b>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
