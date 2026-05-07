import { useEffect, useMemo, useState } from 'react'
import type { CvLabels, CvLanguage } from './cvData'

const NAV_ORDER = [
  'cv',
  'section-summary',
  'section-skills',
  'section-experience',
  'section-projects',
  'section-education',
  'section-soft-skills',
] as const

type NavId = (typeof NAV_ORDER)[number]

const NAV_HEIGHT = 56

type CvNavProps = {
  language: CvLanguage
  labels: CvLabels
  onToggleLanguage: () => void
}

export default function CvNav({ language, labels, onToggleLanguage }: CvNavProps) {
  const [activeId, setActiveId] = useState<string>('cv')

  const navItems = useMemo<{ id: NavId; label: string }[]>(
    () => [
      { id: 'cv', label: labels.nav.top },
      { id: 'section-summary', label: labels.nav.summary },
      { id: 'section-skills', label: labels.nav.skills },
      { id: 'section-experience', label: labels.nav.experience },
      { id: 'section-projects', label: labels.nav.projects },
      { id: 'section-education', label: labels.nav.education },
      { id: 'section-soft-skills', label: labels.nav.softSkills },
    ],
    [labels],
  )

  useEffect(() => {
    const updateActive = () => {
      const y = window.scrollY + NAV_HEIGHT + 12
      const cvEl = document.getElementById('cv')
      if (!cvEl) return

      const cvTop = cvEl.getBoundingClientRect().top + window.scrollY
      if (y < cvTop + 48) {
        setActiveId('cv')
        return
      }

      for (let i = NAV_ORDER.length - 1; i >= 1; i--) {
        const el = document.getElementById(NAV_ORDER[i])
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (y >= top) {
          setActiveId(NAV_ORDER[i])
          return
        }
      }
      setActiveId('cv')
    }

    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    updateActive()
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return (
    <nav className="cv-nav" aria-label={labels.navAria}>
      <div className="cv-nav-inner">
        <a className="cv-nav-brand" href="#cv" aria-label={labels.brandAria}>
          <img
            className="cv-nav-logo"
            src="/favicon.png?v=8"
            alt=""
            width={36}
            height={36}
            decoding="async"
          />
          <span className="cv-nav-title">Ngô Hồng Quân</span>
        </a>
        <div className="cv-nav-actions">
          <div className="cv-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`cv-nav-link ${activeId === item.id ? 'cv-nav-link--active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="cv-language-toggle"
            type="button"
            onClick={onToggleLanguage}
            aria-label={language === 'vi' ? 'Switch CV to English' : 'Chuyển CV sang tiếng Việt'}
          >
            {labels.switchLabel}
          </button>
        </div>
      </div>
    </nav>
  )
}
