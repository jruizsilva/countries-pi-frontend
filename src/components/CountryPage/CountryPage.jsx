import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getActivitiesByCountry,
  getCountryById
} from '../../redux/ducks/countries'
import Activity from '../Activity/Activity'
import styles from './CountryPage.module.css'

const CountryPage = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const dispatch = useDispatch()
  const { country, countryActivities } = useSelector(
    (state) => state.countries
  )

  useEffect(() => {
    dispatch(getCountryById(id))
    dispatch(getActivitiesByCountry(id))
  }, [id, dispatch])

  return (
    <div className={styles.contenedor}>
      <h3 className={styles.title}>{country?.name}</h3>
      <div className={styles.card}>
        <img
          src={country?.flag_image}
          alt={country?.name}
          className={styles.img}
        />
        <p className={styles.p}>Codigo: {country?.flag}</p>
        <p className={styles.p}>Continente: {country?.continent}</p>
        <p className={styles.p}>Capital: {country?.capital}</p>
        <p className={styles.p}>Subregion: {country?.subregion}</p>
        <p className={styles.p}>Area: {country?.area} km²</p>
        <p className={styles.p}>Población: {country?.population}</p>
      </div>

      <h3 className={styles.title}>
        Actividades turísticas que realiza
      </h3>
      {countryActivities && countryActivities.length === 0 && (
        <p className={styles.not_found}>
          No se encontraron actividades
        </p>
      )}
      {countryActivities && countryActivities.length > 0 && (
        <div className={styles.actividades}>
          {countryActivities.map((activity) => (
            <Activity key={activity.id} {...activity} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CountryPage
