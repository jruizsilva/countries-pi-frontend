import styles from './Message.module.css'

const Message = ({ success, msg }) => {
  return (
    <>
      {success ? (
        <div className={styles.success}>{msg}</div>
      ) : (
        <div className={styles.error}>{msg}</div>
      )}
    </>
  )
}

export default Message
