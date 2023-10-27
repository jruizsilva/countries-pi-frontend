import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage } from '../../redux/ducks/countries'
import styles from './Pagination.module.css'

const Pagination = () => {
  const dispatch = useDispatch()
  const { form, countries, page } = useSelector(
    (state) => state.countries
  )

  const handlePrevClick = () => {
    dispatch(prevPage(form, page))
  }
  const handleNextClick = () => {
    dispatch(nextPage(form, page))
  }

  return (
    <div className={styles.pagination}>
      {page > 0 && (
        <button className={styles.button} onClick={handlePrevClick}>
          Anterior
        </button>
      )}
      {countries && countries.length > 8 && (
        <button className={styles.button} onClick={handleNextClick}>
          Siguiente
        </button>
      )}
    </div>
  )
}

export default Pagination
