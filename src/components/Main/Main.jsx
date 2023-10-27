import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Countries from '../Countries/Countries'
import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import styles from './Main.module.css'

const Main = () => {
  const { modeAddCountriesToActivity } = useSelector(
    (state) => state.activities
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.main}>
      <Search />
      <Filter
        modeAddCountriesToActivity={modeAddCountriesToActivity}
      />
      <Countries
        modeAddCountriesToActivity={modeAddCountriesToActivity}
      />
    </div>
  )
}

export default Main
