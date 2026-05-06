import { useEffect, useState } from 'react'

const NAV_ORDER = [
  'cv',
  'section-summary',
  'section-skills',
  'section-experience',
  'section-projects',
  'section-education',
  'section-soft-skills',
] as const

const NAV_ITEMS: { id: (typeof NAV_ORDER)[number]; label: string }[] = [
  { id: 'cv', label: 'Đầu trang' },
  { id: 'section-summary', label: 'Tóm tắt' },
  { id: 'section-skills', label: 'Kỹ năng' },
  { id: 'section-experience', label: 'Kinh nghiệm' },
  { id: 'section-projects', label: 'Dự án' },
  { id: 'section-education', label: 'Học vấn' },
  { id: 'section-soft-skills', label: 'Kỹ năng mềm' },
]

const NAV_HEIGHT = 56

export default function CvNav() {
  const [activeId, setActiveId] = useState<string>('cv')

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
    <nav className="cv-nav" aria-label="Điều hướng CV">
      <div className="cv-nav-inner">
        <a className="cv-nav-brand" href="#cv" aria-label="Ngô Hồng Quân - về đầu trang">
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
        <div className="cv-nav-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`cv-nav-link ${activeId === item.id ? 'cv-nav-link--active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
