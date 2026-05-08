import { useState } from 'react'
import CvNav from './cv/CvNav'
import CvPage from './cv/CvPage'
import { cvDataByLanguage, cvLabels, type CvLanguage } from './cv/cvData'

export default function App() {
  const [language, setLanguage] = useState<CvLanguage>('vi')
  const labels = cvLabels[language]
  const data = cvDataByLanguage[language]

  return (
    <div className="app-layout">
      <CvNav
        language={language}
        labels={labels}
        ownerName={data.header.name}
        onToggleLanguage={() => setLanguage((current) => (current === 'vi' ? 'en' : 'vi'))}
      />
      <main className="app-main">
        <CvPage data={data} labels={labels} />
      </main>
    </div>
  )
}
