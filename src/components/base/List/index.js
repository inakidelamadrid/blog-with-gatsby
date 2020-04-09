import React from "react"
import styles from "./styles.module.scss"

const List = ({ elements }) => {
  return (
    <ul className={styles.list_unstyled}>
      {elements.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  )
}
export default List
