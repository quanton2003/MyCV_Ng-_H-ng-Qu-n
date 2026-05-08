import { useState } from 'react'
import CvNav from './cv/CvNav'
import CvPage from './cv/CvPage'
import { cvDataByLanguage as sampleCvDataByLanguage, cvLabels, type CvData, type CvLanguage } from './cv/cvData'

function loadCvDataFromEnv(): Record<CvLanguage, CvData> {
  const rawData = import.meta.env.VITE_CV_DATA_JSON as string | undefined
  if (!rawData) return sampleCvDataByLanguage

  try {
    const parsed = JSON.parse(rawData) as Partial<Record<CvLanguage, CvData>>
    if (!parsed.vi || !parsed.en) {
      console.warn('VITE_CV_DATA_JSON must include both "vi" and "en" CV data. Falling back to sample data.')
      return sampleCvDataByLanguage
    }

    return parsed as Record<CvLanguage, CvData>
  } catch (error) {
    console.error('Failed to parse VITE_CV_DATA_JSON. Falling back to sample data.', error)
    return sampleCvDataByLanguage
  }
}

const cvDataByLanguage = loadCvDataFromEnv()

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
