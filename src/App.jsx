import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import { fetchAllCountries } from './redux/ducks/countries'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TouristActivities from './components/TouristActivities/TouristActivities'
import { getAllTouristActivities } from './redux/ducks/tourist_activity'
import ActivityPage from './components/ActivityPage/ActivityPage'
import CountryPage from './components/CountryPage/CountryPage'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCountries())
    dispatch(getAllTouristActivities())
  }, [dispatch])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/actividades'
            element={<TouristActivities />}
          />
          <Route path='/actividades/:id' element={<ActivityPage />} />
          <Route path='/paises/:id' element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
