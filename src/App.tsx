import CvNav from './cv/CvNav'
import CvPage from './cv/CvPage'
import { cvData } from './cv/cvData'

export default function App() {
  return (
    <div className="app-layout">
      <CvNav />
      <main className="app-main">
        <CvPage data={cvData} />
      </main>
    </div>
  )
}

