import type { CvData } from './cvData'

function SectionTitle({ children }: { children: string }) {
  return <h2 className="cv-section-title">{children}</h2>
}

export default function CvPage({ data }: { data: CvData }) {
  return (
    <div className="cv-page" id="cv">
      <header className="cv-header">
        <div className="cv-header-left">
          <h1 className="cv-name">{data.header.name}</h1>
        </div>

        <div className="cv-header-right">
          <div className="cv-profession">{data.header.title}</div>

          <div className="cv-contact">
            <span>{data.header.location}</span>
            <span className="cv-sep">|</span>
            <span>{data.header.phone}</span>
            <span className="cv-sep">|</span>
            <a className="cv-link" href={`mailto:${data.header.email}`}>
              {data.header.email}
            </a>
            <span className="cv-sep">|</span>
            <a className="cv-link" href={data.header.github} target="_blank" rel="noreferrer">
              {data.header.github}
            </a>
          </div>
        </div>
      </header>

      <section className="cv-section">
        <SectionTitle>TÓM TẮT BẢN THÂN</SectionTitle>
        <p className="cv-paragraph">{data.summary}</p>
      </section>

      <section className="cv-section">
        <SectionTitle>KỸ NĂNG</SectionTitle>
        <div className="cv-skills">
          {data.skills.map((group) => (
            <div className="cv-skill-group" key={group.label}>
              <div className="cv-skill-label">{group.label}</div>
              <div className="cv-skill-items">{group.items.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <SectionTitle>KINH NGHIỆM LÀM VIỆC</SectionTitle>
        <div className="cv-timeline">
          {data.experience.map((item) => (
            <article className="cv-timeline-item" key={item.title}>
              <div className="cv-item-top">
                <div className="cv-item-title">{item.title}</div>
                <div className="cv-item-date">{item.date}</div>
              </div>
              <ul className="cv-bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <SectionTitle>DỰ ÁN CÁ NHÂN</SectionTitle>
        <div className="cv-timeline">
          {data.projects.map((item) => (
            <article className="cv-timeline-item" key={item.title}>
              <div className="cv-item-top">
                <div className="cv-item-title">{item.title}</div>
                <div className="cv-item-date">{item.date}</div>
              </div>
              <ul className="cv-bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <SectionTitle>HỌC VẤN</SectionTitle>
        <div className="cv-education">
          <div className="cv-item-top">
            <div className="cv-item-title">{data.education.school}</div>
            <div className="cv-item-date">{data.education.date}</div>
          </div>
          <div className="cv-education-major">{data.education.major}</div>
          <div className="cv-education-gpa">{data.education.gpa}</div>
        </div>
      </section>
    </div>
  )
}

