import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site'

export const metadata: Metadata = {
  title: 'The 8 Categories of Wastes — Consuming the Benefits of the Human Effort',
  description:
    'Waste is any human activity that uses resources but creates no value. Learn about Taiichi Ohno\'s 8 categories of waste and how to eliminate them from your operations.',
  alternates: {
    canonical: '/insights/8-categories-of-waste',
  },
  openGraph: {
    title: 'The 8 Categories of Wastes | Integrated Quality Solutions',
    description:
      'Learn about Taiichi Ohno\'s 8 categories of waste and how to eliminate them from your operations.',
    url: '/insights/8-categories-of-waste',
    type: 'article',
    images: [
      {
        url: '/blogs/waste.jpeg',
        width: 1666,
        height: 624,
        alt: 'The 8 categories of waste',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 8 Categories of Wastes | Integrated Quality Solutions',
    description:
      'Learn about Taiichi Ohno\'s 8 categories of waste and how to eliminate them from your operations.',
    images: ['/blogs/waste.jpeg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The 8 Categories of Wastes — Consuming the Benefits of the Human Effort',
  description:
    'Waste is any human activity that uses resources but creates no value. Learn about Taiichi Ohno\'s 8 categories of waste and how to eliminate them.',
  image: `${SITE_URL}/blogs/waste.jpeg`,
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon.svg`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/insights/8-categories-of-waste`,
  },
}

export default function WasteArticlePage() {
  return (
    <main className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="blog-hero section">
        <div className="blog-hero-inner">
          <span className="eyebrow">INSIGHTS & BLOGS</span>
          <h1>The 8 Categories of Wastes — Consuming the Benefits of the Human Effort</h1>
          <p className="blog-meta">Integrated Quality Solutions - </p>
          <img
            src="/blogs/waste.jpeg"
            alt="Diagram illustrating the eight categories of waste in lean manufacturing"
            width={1666}
            height={624}
            className="blog-cover"
          />
        </div>
      </section>

      <article className="blog-article section">
        <p className="blog-lead">
          Wastes is defined as any human activity which uses resources but creates no value. Ohno has identified seven types of waste categories which are also known as Ohno’s The Seven Muda and later the 8th category “untapped human potential” was added by other researchers. Waste avoidance is a crucial idea, as this approach significantly contributes to maximize value both to the customers and the organization. Waste takes place in diverse forms, depending on the types of industry or service sector and of working processes. Elimination or reduction of waste to a certain degree requires the ability to identify waste and to make it transparent to the parties involved in the work process. To provide a deeper insight to the 8 manufacturing/service provision wastes and factors leading to each category of wastes have been depicted as follows:
        </p>

        <h2>1. Defect wastes</h2>
        <p>
          Defects waste occurs due to production of a product or provision of a service not according to the customers demand or required specification and the product or the service is considered to be a waste which further increases the cost of products or services. In Ethiopia, my experience tells me that this category of waste constitute the large portion of all categories of wastes.<br />

          Factors leading to this type of waste are:<br />
          • Use of defective input materials<br />
          • Lack of knowledge and skill<br />
          • The absence of clear work instruction<br />
          • Defective machines, equipment and tools<br />
          • Poor internal communication<br />
          • Lack of motivation<br />
          • Poor understanding of the consequences of defects<br />
          • Holding the wrong attitude “Fix it when it is broken”<br />
          • Using Inadequate /wrong specification<br />
          • Inadequate process monitoring system<br />
          • Ineffective breakdown maintenance<br />
          • Poor handling and storage of materials
        </p>

        <h2>2. Inventory wastes</h2>
        <p>
          Inventory waste occurs due to stock of raw material or products yet to be finished (work-in-progress) or on-hold finished products to be supplied to the customers. These stocks increases an additional cost in terms of its storage and maintenance.<br /> Factors leading to this type of waste are:<br />

            • Poor understanding of the consequences of excessive inventory<br />
            • Adopting push production system instead of pool<br />
            • Poor sales performance<br />
            • Poor sales forecasting<br />
            • Poor stock level communication<br />
            • Poor consideration of economy of scale<br />
            • Overproduction<br />
            • Poor alignment between production speed and customer’s demand<br />
            • Long-time production changeover triggering excess production<br />
            • Unavailability of foreign currency when needed triggers excess purchasing to hold buffer stock<br />
            • Unreliability of the supply chain triggers to hold excess buffer stock<br />
        </p>

        <h2>3. Transportation wastes</h2>
        <p>
          Transportation waste occurs due to moving products with in the plant between different manufacturing/service provision processes. This waste result in additional expenses in transportation of products from place to place, decrease in efficiency of manufacturing, non-value added labour exertion and sometimes can cause damage or product deterioration.<br /> 
          Factors leading to this type of waste are:<br />

          • Poor understanding of the consequences of excessive transportation<br />
          • Poor factory layout<br />
          • Overproduction (requiring additional space in remote location)<br />
          • Poor sales forecast<br />
          • Push production system instead of pull<br />
        </p>

        <h2>4. Waiting wastes</h2>
        <p>
          Waiting waste occurs due to the waiting of one or more work station for another work station to complete the job and hand it over further. This waste generally occurs where synchronization between two or more work station is poor and finally results into man or machines idle or waste of time.<br />
          Factors leading to this type of waste are:<br />

          • Due to absentees, jobs remains undone on time<br />
          • Poor understanding of the consequences of excessive waiting<br />
          • Inadequate manpower<br />
          • Poor process planning<br />
          • Unbalanced workloads<br />
          • Lack of work standards<br />
          • Instructions/ decisions take longer time<br />
          • Production change over takes longer time<br />
          • Poorly organized maintenance tools delay maintenance jobs<br />
          • Increased corrective maintenance due to poor/absence of preventive maintenance<br />
          • Poorly established supply chain management<br />
          • Poor quality of input materials halts production/service provision process until the problem is fixed<br />
        </p>

        <h2>5. Motion Wastes</h2>
        <p>
          Motion includes any unnecessary physical movement people or machine. For example, this might include walking around the factory floor to look for a tool, or even unnecessary or difficult physical movements, due to poorly designed ergonomics, which slow down the workers job performance. Unnecessary movement of machines, such as, stirring, hammering, and distance travelled by conveyor belts could also be come the cause of motion waste.<br />
          Factors leading to this type of waste are:<br />

            • Poor understanding of the consequences of excessive motion<br />
            • Lack of work standard (anyone can do something unauthorized)<br />
            • Poor factory layout (far apart)<br />
            • Poor production planning<br />
            • Poor machines setup / Poor machine layout<br />
            • Long conveyor belts<br />
            • Shared machines, tools, equipment (photocopy machines, printers, other equipment and tools)<br />
            • Poor workplace ergonomics: failure to keep work closer to the body, bending, twisting, prolonged posture, excessive reaches (excessive stretching), lifting excessive heavy weights, etc.<br />
        </p>

        <h2>6. Wastes of Overprocessing</h2>
        <p>
          Processing waste occurs due to excessive works in the processes. Working on the product than actually needed with unnecessary tight tolerance. This would finally increase the material and the time required in process as well as cost associated with it. This extra work is considered as waste. The work should be to the level required no more no less.<br />
          Factors leading to this type of waste are:<br />

          • Poor understanding of the consequences of overprocessing<br />
          • Inadequate process control<br />
          • Addition of unnecessary process steps<br />
          • Unnecessarily using high capability machine<br />
          • Absence of clear materials specification and work instruction<br />
        </p>

        <h2>7. Wastes of Overproduction</h2>
        <p>
          overproduction is unnecessarily producing more than demanded or producing it too early before it is needed. This increases the risk of obsolescence and increasing the possibility of having to sell those items at a discount or discard them as scrap. <br />
          Factors leading to this type of waste are:<br />

          • Poor understanding of the consequences of overproduction<br />
          • Inappropriate internal competition on production volume<br />
          • Inappropriate incentives based on quota<br />
          • Machines capacity exceeds demand<br />
          • Push production system instead of pull<br />
          • Producing in excess to compensate power interruption<br />
          • Producing for in cases (Unpredictable processes performance in terms of quality)<br />
          • Poor forecasting (creating false demand)<br />
        </p>

        <h2>8. Wastes of untapped human potential</h2>
        <p>
          The loss of human creativity waste exists in any company that doesn’t value its people. The Toyota way preaches that “the worker is the most valuable resource – not just a pair of hands taking orders, but an analyst and problem solver”. According to Addy et al. (2012, 214) “underemployed persons are workers who believe that their education and training, skills, or experience are not fully used in the jobs they currently hold and that qualify them for higher paying or more satisfying jobs. Failure to participate people and delegate authorities becomes the source of wastes the human potential. <br />
          Factors leading to this type of waste are:<br />

          • Low satisfaction of people<br />
          • Absenteeism<br />
          • Employee turnover<br />
          • Lack of appropriate management systems<br />
          • Forced to use inappropriate machines and tools<br />
          • Forced to use inappropriate input materials<br />
          • Lack of respect<br />
          • Lack of support<br />
          • Discrimination<br />
          • Inadequately organized people facilities<br />
          • Poor relationship between workers<br />
          • Poor relationship between leaders and subordinates<br />
          Implementation and continual improvement of a lean system is a solution for the reduction /elimination of wastes step-by-step. Next blog will be elaborating lean system connected to how to eliminate the 8 wastes.Your feedback is important!
        </p>

        <h2>How we help</h2>
        <p>
          At Integrated Quality Solutions, we work with teams across Ethiopia to identify these
          wastes in real processes, quantify their cost, and build practical elimination plans that
          stick. Whether you are pursuing ISO certification or simply want leaner operations, the
          journey starts with learning to see waste.
        </p>

        <div className="blog-cta">
          <Link className="button" href="/contact">
            Talk to Our Team <span>↗</span>
          </Link>
          <Link className="button button-pale" href="/#insights">
            Back to Insights <span>↗</span>
          </Link>
        </div>
      </article>

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