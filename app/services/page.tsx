import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Integrated Quality Solutions services: business consultancy, management system auditing, and professional training for organizations in Ethiopia and beyond.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | Integrated Quality Solutions',
    description:
      'Business consultancy, management system auditing, and professional training — practical support for measurable growth.',
    url: '/services',
  },
}

function ServiceActions() {
  return (
    <div className="actions">
      <Link className="button" href="/contact">
        Get Started <span>↗</span>
      </Link>
      <Link className="button button-pale" href="/contact">
        Contact Us <span>↗</span>
      </Link>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="section">
        <div className="section-intro">
          <span className="eyebrow">OUR SERVICES</span>
          <h1>Services built to move your business <em>forward.</em></h1>
          <p>
            From strategy to systems to skills — we partner with your team at every level to build
            stronger, more capable organizations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="service-detail">
          <span className="eyebrow">01 — CONSULTANCY</span>
          <h2>Consultancy Service</h2>
          <p>
            Crafting clear, actionable strategies that align with your vision, ensuring sustainable
            growth and a competitive edge. We work alongside your leadership team to turn ambition
            into a sequenced, measurable plan.
          </p>
          <ul className="service-list">
            <li>ISO 9001:2026 Quality Management System</li>
            <li>ISO 22000:2018 Food Safety Management System </li>
            <li>FSSC 22000 Scheme Version 7.0, Food Safety Management System </li>
            <li>General Principles of Food Hygiene (CXC 1-1969) V2023 - Codex Alimentarius Code of Practice</li>
            <li>ISO 14001:2026 Environmental Management System</li>
          </ul>
          <ServiceActions />
        </div>
      </section>

      <section className="section cream">
        <div className="service-detail">
          <span className="eyebrow">02 — AUDITING</span>
          <h2>Management System Auditing</h2>
          <p>
            We provide management system auditing services based on ISO 19011:2026 which provides an extra edge to our customers to meet predetermined requirements and achieve continual improvements.
          </p>
          <ServiceActions />
        </div>
      </section>

      <section className="section">
        <div className="service-detail">
          <span className="eyebrow">03 — TRAINING</span>
          <h2>Training Service</h2>
          <p>
            We provide standard and tailor made trainings to our customers on the following main topics:
          </p>
          <ul className="service-list">
            <li>ISO 9001:2026 Quality Management System</li>
            <li>FSSC 22000 Scheme Version 7.0, Food Safety Management System </li>
            <li>ISO 22000:2018 Food Safety Management System</li>
            <li>ISO 22002-1:2025 Prerequisite Programmes on Food Safety</li>
            <li>ISO 22002-6:2025 Prerequisite Programmes on Feed and Animal Food Production</li>
            <li>ISO 22002-4:2025 Prerequisite Programmes on Food Safety (Food Packaging Manufacturing)</li>
            <li>General Principles of Food Hygiene (CXC 1-1969) V2023 - Codex Alimentarius Code of Practice</li>
            <li>ISO 19011:2026 Guidelines for Auditing Management System</li>
            <li>ISO 31000:2018 Risk Management</li>
            <li>ISO 45001:2018 Occupational health and safety management system</li>
            <li>ISO 14001:2026 Environmental Management System</li>
            <li>Deming Principles of Quality Management for Managers and Departmental Heads (A System of Profound Knowledge and the 14 Principles)</li>
            <li>Problem Solving Methodology</li>
            <li>The Eight Manufacturing Wastes and their Impact on Operational and Business Performances</li>
            <li>Employees’ Discipline at Work</li>
            <li>Building Quality Circles for Human Resource Development and Continual Improvement</li>
            <li>Productivity Management</li>
            <li>5S Methodology</li>
          </ul>
          <ServiceActions />
        </div>
      </section>

      <footer className="footer cream section">
        <a className="logo" href="/">Integrated Quality Solutions</a>
        <h2>Let&apos;s build your next growth story.</h2>
        <p>Ready to turn your ideas into measurable progress? Let&apos;s talk.</p>
        <Link className="button" href="/contact">
          Get Started <span>↗</span>
        </Link>
        <div className="footer-bottom">
          <span>© 2026 Integrated Quality Solutions</span>
          <span>Addis Ababa, Ethiopia</span>
          <span>Instagram　Whatsapp　Facebook</span>
        </div>
      </footer>
    </main>
  )
}