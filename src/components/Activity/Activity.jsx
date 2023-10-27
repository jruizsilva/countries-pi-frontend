import { useDispatch } from 'react-redux'
import { useLocation, NavLink, useParams } from 'react-router-dom'
import { fetchAllCountries } from '../../redux/ducks/countries'
import { deleteActivityById } from '../../redux/ducks/tourist_activity'
import styles from './Activity.module.css'

const Activity = (props) => {
  const { id: idParams } = useParams()
  const location = useLocation()
  const dispatch = useDispatch()
  const {
    name,
    difficulty,
    duration,
    season,
    id,
    activityCountries
  } = props

  const handleDelete = () => {
    const yes = window.confirm(
      `¿Estas seguro que desea eliminar la actividad ${name}?`
    )
    if (yes) dispatch(deleteActivityById(id))
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.p}>
        Dificultad: <span className={styles.span}>{difficulty}</span>
      </p>
      <p className={styles.p}>
        Duración: <span className={styles.span}>{duration}</span>
      </p>
      <p className={styles.p}>
        Temporada: <span className={styles.span}>{season}</span>
      </p>
      {location.pathname.includes('paises') ? null : idParams ? (
        <>
          <p className={styles.p}>
            La actividad se realiza en{' '}
            <span className={styles.span}>
              {activityCountries && activityCountries.length}{' '}
            </span>
            paises
          </p>
          {activityCountries && activityCountries.length > 0 && (
            <ul className={styles.ul}>
              {activityCountries.map((country) => (
                <li className={styles.li} key={country.id}>
                  {country.name}
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <>
          <NavLink
            to={`/actividades/${id}`}
            onClick={() => dispatch(fetchAllCountries())}
            className={styles.button}
          >
            Agregar paises
          </NavLink>
          <div className={styles.delete} onClick={handleDelete}>
            <span className='material-symbols-outlined'>delete</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Activity
