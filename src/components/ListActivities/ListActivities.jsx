import { useSelector } from 'react-redux'
import Activity from '../Activity/Activity'
import styles from './ListActivities.module.css'

const ListActivities = () => {
  const { activities } = useSelector((state) => state.activities)

  return (
    <>
      <h2 className={styles.title}>Actividades turísticas</h2>
      <div className={styles.actividades}>
        {activities &&
          activities.length > 0 &&
          activities.map((activity) => (
            <Activity key={activity.id} {...activity} />
          ))}
      </div>
    </>
  )
}

export default ListActivities
