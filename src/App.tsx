import { useEffect, useState } from 'react'
import CvNav from './cv/CvNav'
import CvPage from './cv/CvPage'
import { cvDataByLanguage, cvLabels, type CvLanguage } from './cv/cvData'

export default function App() {
  const [language, setLanguage] = useState<CvLanguage>('vi')
  const labels = cvLabels[language]
  const data = cvDataByLanguage[language]

  useEffect(() => {
    try {
      const source = new URLSearchParams(window.location.search).get('from') || 'trực tiếp'

      fetch(`/api/track?from=${encodeURIComponent(source)}`, {
        method: 'POST',
        credentials: 'same-origin',
        keepalive: true,
      }).catch((error) => {
        console.error('Visitor tracking failed:', error)
      })
    } catch (error) {
      console.error('Visitor tracking setup failed:', error)
    }
  }, [])

  return (
    <div className="app-layout">
      <CvNav
        language={language}
        labels={labels}
        onToggleLanguage={() => setLanguage((current) => (current === 'vi' ? 'en' : 'vi'))}
      />
      <main className="app-main">
        <CvPage data={data} labels={labels} />
      </main>
    </div>
  )
}
