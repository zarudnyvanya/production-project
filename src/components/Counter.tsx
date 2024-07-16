import { useState } from 'react'
import styles from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((count) => count + 1)
  }

  return (
    <>
      <div className={styles.btn}>Counter: {counter}</div>
      <button onClick={increment}>click</button>
    </>
  )
}
