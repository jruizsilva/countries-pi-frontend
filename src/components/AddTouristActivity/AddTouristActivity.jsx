import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validate } from '../../helpers/validate'
import { addTouristActivity } from '../../redux/ducks/tourist_activity'
import Message from '../Message/Message'
import styles from './AddTouristActivity.module.css'

const initialForm = {
  name: '',
  difficulty: '',
  duration: '',
  season: ''
}

const AddTouristActivity = () => {
  const dispatch = useDispatch()
  const { success } = useSelector((state) => state.activities)
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { success, msg } = validate(form)
    if (success) {
      // Add activity
      dispatch(addTouristActivity(form))
      setForm(initialForm)
    } else {
      setError(msg)
      setTimeout(() => {
        setError('')
      }, 3000)
    }
  }

  return (
    <>
      <div className={styles.contenedor}>
        <h2 className={styles.title}>
          Agrega actividades turísticas
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.box}>
            <label htmlFor='name' className={styles.label}>
              Nombre:
            </label>
            <input
              type='text'
              name='name'
              id='name'
              onChange={handleForm}
              value={form.name}
              className={styles.input}
              autoComplete='off'
            />
          </div>
          <div className={styles.box}>
            <label htmlFor='difficulty' className={styles.label}>
              Dificultad:
            </label>
            <select
              name='difficulty'
              id='difficulty'
              onChange={handleForm}
              value={form.difficulty}
              className={styles.select}
            >
              <option value=''>Seleccione una dificultad</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className={styles.box}>
            <label htmlFor='duration' className={styles.label}>
              Duración:
            </label>
            <select
              name='duration'
              id='duration'
              onChange={handleForm}
              value={form.duration}
              className={styles.select}
            >
              <option value=''>Seleccione la duracion</option>
              <option value='1 hora'>1 hora</option>
              <option value='2 horas'>2 hora</option>
              <option value='3 horas'>3 hora</option>
              <option value='4 horas'>4 hora</option>
              <option value='5 horas'>5 hora</option>
            </select>
          </div>
          <div className={styles.box}>
            <label htmlFor='season' className={styles.label}>
              Temporada:
            </label>
            <select
              name='season'
              id='season'
              onChange={handleForm}
              value={form.season}
              className={styles.select}
            >
              <option value=''>Seleccione la temporada</option>
              <option value='Verano'>Verano</option>
              <option value='Otoño'>Otoño</option>
              <option value='Invierno'>Invierno</option>
              <option value='Primavera'>Primavera</option>
            </select>
          </div>
          <input
            type='submit'
            value='Agregar'
            className={styles.button}
          />
        </form>
      </div>
      {error && <Message success={false} msg={error} />}
      {success && <Message success={true} msg={success} />}
    </>
  )
}

export default AddTouristActivity
