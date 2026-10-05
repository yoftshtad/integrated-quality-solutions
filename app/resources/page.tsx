import { getResources } from '@/lib/resources'

export const dynamic = 'force-dynamic'

export default async function ResourcesPage() {
  const resources = await getResources()
  return <main><section className="section resources-page"><div className="section-intro"><span className="eyebrow">ARCHIO RESOURCES</span><h1>Ideas that move your business <em>forward.</em></h1><p>Practical guides and thoughtful insights to help you make clearer decisions, build momentum, and grow with confidence.</p></div><div className="resource-grid">{resources.map((resource) => <article className="resource-card" key={resource.id}><div className="pdf-icon" aria-hidden="true">PDF</div><div className="resource-card-copy"><h3>{resource.title}</h3><p>{resource.description}</p><a href={resource.link} target="_blank" rel="noreferrer">View Resource <span>↗</span></a></div></article>)}</div></section></main>
}
