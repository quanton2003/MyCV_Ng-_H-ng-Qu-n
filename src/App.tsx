import { useEffect } from 'react'
import CvNav from './cv/CvNav'
import CvPage from './cv/CvPage'
import { cvData } from './cv/cvData'

const TRACKING_STORAGE_KEY = 'cv_visitor_tracked_at'
const TRACKING_TTL = 24 * 60 * 60 * 1000

export default function App() {
  useEffect(() => {
    try {
      const lastTracked = Number(localStorage.getItem(TRACKING_STORAGE_KEY) || 0)

      if (Number.isFinite(lastTracked) && Date.now() - lastTracked < TRACKING_TTL) {
        return
      }

      const source = new URLSearchParams(window.location.search).get('from') || 'direct'

      fetch(`/api/track?from=${encodeURIComponent(source)}`, {
        method: 'POST',
        credentials: 'same-origin',
        keepalive: true,
      })
        .then(() => {
          localStorage.setItem(TRACKING_STORAGE_KEY, String(Date.now()))
        })
        .catch((error) => {
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

