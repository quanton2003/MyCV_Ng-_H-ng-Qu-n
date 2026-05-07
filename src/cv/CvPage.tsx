import type { ReactNode } from 'react'
import type { CvData, CvLabels } from './cvData'

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
      />
    </svg>
  )
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.989 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  )
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  )
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  )
}

function IconZaloCall({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  )
}

function toTelHref(vnPhone: string): string {
  const digits = vnPhone.replace(/\D/g, '')
  if (digits.startsWith('84')) return `tel:+${digits}`
  if (digits.startsWith('0')) return `tel:+84${digits.slice(1)}`
  return `tel:+${digits}`
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="cv-section-title">{children}</h2>
}

function renderLinkedText(text: string): ReactNode[] {
  const urlPattern = /(https?:\/\/[^\s|]+)/g

  return text.split(urlPattern).map((part, index) => {
    if (!urlPattern.test(part)) return part

    return (
      <a
        className="cv-link"
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        key={`${part}-${index}`}
      >
        {part}
      </a>
    )
  })
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="cv-bullets">
      {items.map((item) => (
        <li key={item}>{renderLinkedText(item)}</li>
      ))}
    </ul>
  )
}

export default function CvPage({ data, labels }: { data: CvData; labels: CvLabels }) {
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
            <span>Zalo: {data.header.zaloPhone}</span>
            <span className="cv-sep">|</span>
            <a className="cv-link" href={`mailto:${data.header.email}`}>
              {data.header.email}
            </a>
          </div>

          <div className="cv-social" role="group" aria-label={labels.socialAria}>
            <a
              className="cv-social-link"
              href={`mailto:${data.header.email}`}
              aria-label={`${labels.emailAria} ${data.header.email}`}
              title="Email"
            >
              <IconMail className="cv-social-icon" />
            </a>
            <a
              className="cv-social-link"
              href={data.header.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels.youtubeAria}
              title="YouTube"
            >
              <IconYouTube className="cv-social-icon" />
            </a>
            <a
              className="cv-social-link"
              href={toTelHref(data.header.zaloPhone)}
              aria-label={`${labels.zaloAria} ${data.header.zaloPhone}`}
              title={labels.zaloTitle}
            >
              <IconZaloCall className="cv-social-icon" />
            </a>
            <a
              className="cv-social-link"
              href={data.header.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub - quanton2003"
              title="GitHub"
            >
              <IconGitHub className="cv-social-icon" />
            </a>
            <a
              className="cv-social-link"
              href={data.header.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <IconFacebook className="cv-social-icon" />
            </a>
          </div>
        </div>
      </header>

      <section className="cv-section" id="section-summary">
        <SectionTitle>{labels.sections.summary}</SectionTitle>
        <p className="cv-paragraph">{data.summary}</p>
      </section>

      <section className="cv-section" id="section-skills">
        <SectionTitle>{labels.sections.skills}</SectionTitle>
        <div className="cv-skills">
          {data.skills.map((group) => (
            <div className="cv-skill-group" key={group.label}>
              <div className="cv-skill-label">{group.label}</div>
              <div className="cv-skill-items">{group.items.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section" id="section-experience">
        <SectionTitle>{labels.sections.experience}</SectionTitle>
        <div className="cv-timeline">
          {data.experience.map((item) => (
            <article className="cv-timeline-item" key={item.title}>
              <div className="cv-item-top">
                <div className="cv-item-title">{item.title}</div>
                <div className="cv-item-date">{item.date}</div>
              </div>
              <BulletList items={item.bullets} />
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section" id="section-projects">
        <SectionTitle>{labels.sections.projects}</SectionTitle>
        <div className="cv-timeline">
          {data.projects.map((item) => (
            <article className="cv-timeline-item" key={item.title}>
              <div className="cv-item-top">
                <div className="cv-item-title">{item.title}</div>
                <div className="cv-item-date">{item.date}</div>
              </div>
              <BulletList items={item.bullets} />
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section" id="section-education">
        <SectionTitle>{labels.sections.education}</SectionTitle>
        <div className="cv-education">
          <div className="cv-item-top">
            <div className="cv-item-title">{data.education.school}</div>
            <div className="cv-item-date">{data.education.date}</div>
          </div>
          <div className="cv-education-major">{data.education.major}</div>
          <div className="cv-education-gpa">{data.education.gpa}</div>
        </div>
      </section>

      <section className="cv-section" id="section-soft-skills">
        <SectionTitle>{labels.sections.softSkills}</SectionTitle>
        <BulletList items={data.softSkills} />
      </section>

      <footer className="cv-footer">
        <div>
          <h2 className="cv-footer-title">{labels.footerTitle}</h2>
          <p className="cv-footer-subtitle">{labels.footerSubtitle}</p>
        </div>
        <div className="cv-footer-links" aria-label={labels.socialAria}>
          <a className="cv-footer-link" href={`mailto:${data.header.email}`}>
            <IconMail className="cv-footer-icon" />
            <span>{labels.footerEmail}: {data.header.email}</span>
          </a>
          <a className="cv-footer-link" href={toTelHref(data.header.zaloPhone)}>
            <IconZaloCall className="cv-footer-icon" />
            <span>{labels.footerZalo}: {data.header.zaloPhone}</span>
          </a>
          <a className="cv-footer-link" href={data.header.github} target="_blank" rel="noopener noreferrer">
            <IconGitHub className="cv-footer-icon" />
            <span>GitHub</span>
          </a>
          <a className="cv-footer-link" href={data.header.facebook} target="_blank" rel="noopener noreferrer">
            <IconFacebook className="cv-footer-icon" />
            <span>Facebook</span>
          </a>
          <a className="cv-footer-link" href={data.header.youtube} target="_blank" rel="noopener noreferrer">
            <IconYouTube className="cv-footer-icon" />
            <span>YouTube</span>
          </a>
        </div>
      </footer>
    </div>
  )
}
