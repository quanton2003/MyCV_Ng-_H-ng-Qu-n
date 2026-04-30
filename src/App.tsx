import { useEffect } from 'react'
import CvNav from './cv/CvNav'
import CvPage from './cv/CvPage'
import { cvData } from './cv/cvData'

export default function App() {
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
      <CvNav />
      <main className="app-main">
        <CvPage data={cvData} />
      </main>
    </div>
  )
}
